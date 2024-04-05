import { DndContext, useDroppable } from '@dnd-kit/core';

import './MetricsPage.css';

function DroppableArea ({ id }: { id: string }) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div ref={setNodeRef} className='DroppableArea'/>
    )
}


export default function MetricsPage () {
    return (
        <article className='dndContainer'>
            <DndContext>
                <DroppableArea id='droppable-1'/>
            </DndContext>
        </article>
        
    )
}