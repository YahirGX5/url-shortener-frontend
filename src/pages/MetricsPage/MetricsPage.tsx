import { DndContext, useDroppable, useDraggable } from '@dnd-kit/core';
import { useContext, useMemo } from 'react';
import { urlsContext } from '../../contexts/UrlsContext';
import { CSS } from '@dnd-kit/utilities';

import './MetricsPage.css';

function DroppableArea ({ id }: { id: string }) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div ref={setNodeRef} className='DroppableArea'/>
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
    const { urls } = useContext(urlsContext);
    const isUrlsEmpty = useMemo(() => urls?.length === 0, [urls]);

    return (
        <article className='dndContainer'>
            <DndContext>
                <section className='DraggableUrlContainer'>
                    {isUrlsEmpty ? (
                        <h1>Nothing here</h1>
                    ) : (
                        urls?.map(({ originalUrl, shortUrl }) => (
                            <DraggableUrl identifier={shortUrl} dataOfUrl={originalUrl}/>
                        ))
                    )}
                </section>
                <DroppableArea id='droppable-1'/>
            </DndContext>
        </article>
        
    )
}