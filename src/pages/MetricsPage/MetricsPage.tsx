import { DndContext, useDroppable, useDraggable, rectIntersection, DragEndEvent } from '@dnd-kit/core';
import { useContext, useMemo, useState } from 'react';
import { urlsContext } from '../../contexts/UrlsContext';
import { errorContext } from '../../contexts/ErrorContext';
import { CSS } from '@dnd-kit/utilities';

import Stats, { StatsProps } from '../../components/Stats/Stats';

import './MetricsPage.css';

function DroppableArea () {
    const { setNodeRef } = useDroppable({ id: 1 });

    return (
        <article ref={setNodeRef} className='DroppableArea' />
    )
}

function DraggableUrl({ identifier, dataOfUrl }: { identifier: string, dataOfUrl: string }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
    } = useDraggable({
        id: identifier,
        data: { content: dataOfUrl },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <article
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className='DraggableUrl'
        >
            {identifier}
        </article>
    );
}

export default function MetricsPage () {
    const [droppableData, setDroppableData] = useState<StatsProps | null>(null);
    const { urls } = useContext(urlsContext);
    const { setError } = useContext(errorContext);
    const isUrlsEmpty = useMemo(() => urls?.length === 0, [urls]);


    async function handleDragEnd (event: DragEndEvent) {
        try {
            const { active, over } = event;
            if (over?.id === 1 && active.id) {
                const response = await fetch('https://mi-back/urls', {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });
    
                const responseData = await response.json();
    
                if (!response.ok) setError(responseData.error);
    
                setDroppableData(responseData.data);
            } 
        } catch (error) {
            if (typeof error === 'string') {
                setError(error);
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Ha ocurrido un error desconocido');
            }
        }
    }

    return (
        <article className='dndContainer'>
            <DndContext collisionDetection={rectIntersection} onDragEnd={handleDragEnd}>
                <section className='DraggableUrlContainer'>
                    {isUrlsEmpty ? (
                        <h1>Nothing here</h1>
                    ) : (
                        urls?.map(({ originalUrl, shortUrl }, index) => (
                            <DraggableUrl key={index} identifier={shortUrl} dataOfUrl={originalUrl}/>
                        ))
                    )}
                </section>
                <DroppableArea />
                {droppableData ? (
                    <Stats {...droppableData}/>
                ) : (
                    <h1>Nothing here</h1>
                )}
            </DndContext>
        </article>
        
    )
}