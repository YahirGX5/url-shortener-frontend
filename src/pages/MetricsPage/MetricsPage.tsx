import { DndContext, useDroppable, useDraggable, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { useContext, useMemo, useState } from 'react';
import { urlsContext } from '../../contexts/UrlsContext';
import { CSS } from '@dnd-kit/utilities';

import './MetricsPage.css';

type UrlData = {
    numberOfVisits: number,
    expirationDay: Date,
    daysToExpiration: number
}


function DroppableArea ({ id }: { id: string }) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <article ref={setNodeRef} className='DroppableArea'>

        </article>
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
    const [droppableData, setDroppableData] = useState<null | UrlData>(null);
    const { urls } = useContext(urlsContext);
    const isUrlsEmpty = useMemo(() => urls?.length === 0, [urls]);


    async function handleDragEnd (event: DragEndEvent) {
    }

    return (
        <article className='dndContainer'>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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