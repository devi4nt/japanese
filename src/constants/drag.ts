import { DragDrop } from '../classes/DragDrop';

/**
 *
 */
export function setupDragEvents(): void {
    const nodes = document.querySelectorAll('[data-drag-drop]') as NodeListOf<HTMLElement>;

    const elements = Array.from(nodes);
    elements.forEach(element => {
        const dragDrop = new DragDrop(element);
        dragDrop.setup();
    });
}
