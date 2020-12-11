export class DragDrop {
    active: boolean;
    startBtn: HTMLElement;
    stopBtn: HTMLElement;
    resetBtn: HTMLElement;
    dragSourceElement: HTMLElement;
    correctElement: HTMLElement;
    mistakeElement: HTMLElement;
    placeHolder: HTMLSpanElement;
    dropElements: IDropElement[] = [];
    mistakeCount: number;
    correctCount: number;
    dragMatch: string;
    startTime: Date;
    tickInterval: number | NodeJS.Timeout;
    timerElement: HTMLElement;

    constructor(wrapperElement: HTMLElement) {
        // collect elements
        this.startBtn = wrapperElement.querySelector('button[data-start-btn]');
        this.stopBtn = wrapperElement.querySelector('button[data-stop-btn]');
        this.resetBtn = wrapperElement.querySelector('button[data-reset-btn]');
        this.correctElement = wrapperElement.querySelector('[data-correct]');
        this.mistakeElement = wrapperElement.querySelector('[data-mistake]');
        this.timerElement = wrapperElement.querySelector('[data-timer]');
        this.dragSourceElement = wrapperElement.querySelector('[data-drag-source]');
        const dragNodes = wrapperElement.querySelectorAll('[data-drag-element]') as NodeListOf<HTMLElement>;

        Array.from(dragNodes).forEach(dragElement => {
            const dropElement: IDropElement = {
                element: dragElement,
                parent: dragElement.parentElement,
            };

            // setup the drop, dragover & dragstart event listeners
            dropElement.parent.addEventListener('drop', (e: MouseEvent) => this.drop(e, dropElement));
            dropElement.parent.addEventListener('dragover', (e: MouseEvent) => e.preventDefault());
            dropElement.element.addEventListener('dragstart', (e: MouseEvent) => this.drag(e));

            this.dropElements.push(dropElement);
        });

        // setup place holder element, this is cloned as required
        this.placeHolder = document.createElement('span');
        this.placeHolder.classList.add('invisible');
    }

    setup(): void {
        // bind events
        this.startBtn.addEventListener('click', () => this.start());
        this.stopBtn.addEventListener('click', () => this.stop());
        this.resetBtn.addEventListener('click', () => this.reset());
    }

    start(): void {
        this.active = true;

        this.timerElement.innerHTML = '';

        // toggle element display after start
        [this.stopBtn, this.correctElement, this.mistakeElement, this.timerElement].forEach(element => {
            element.classList.remove('d-none');
        });
        [this.resetBtn, this.startBtn].forEach(element => {
            element.classList.add('d-none');
        });

        // reset the tallys for correct / mistakes
        this.updateCounter(this.correctElement, (this.mistakeCount = 0));
        this.updateCounter(this.mistakeElement, (this.correctCount = 0));

        // reset the start time
        this.startTime = new Date();

        // clear the previous interval
        if (this.tickInterval) {
            clearInterval(this.tickInterval as number);
        }

        // shuffle elements (so they don't end up in the same order) then move elements to the source zone
        this.shuffle<IDropElement>(this.dropElements).forEach(dropElement => this.dragSetup(dropElement));

        // update every second
        this.tickInterval = setInterval(() => this.tick(), 1000);
    }

    stop(): void {
        this.active = false;

        // toggle elements after game stop
        this.startBtn.classList.remove('d-none');
        [this.stopBtn, this.resetBtn, this.correctElement, this.mistakeElement, this.timerElement].forEach(element => {
            element.classList.add('d-none');
        });

        // reset drop elements, move them back into the table
        this.dropElements.forEach(dropElement => this.dragReset(dropElement));

        // reset drag match
        this.dragMatch = null;
    }

    dragSetup(dropElement: IDropElement): void {
        dropElement.parent.classList.add('drop-target');
        dropElement.parent.classList.remove('potential-drop-target');

        // setup the placeholder
        dropElement.placeHolder = this.placeHolder.cloneNode() as HTMLSpanElement;
        dropElement.placeHolder.innerHTML = dropElement.element.innerHTML;
        dropElement.parent.appendChild(dropElement.placeHolder);

        const romanji: string = dropElement.element.dataset.romanji;
        dropElement.parent.dataset.romanji = romanji;

        // make it draggable
        dropElement.element.setAttribute('draggable', 'true');

        // move the drop element into the source area
        this.dragSourceElement.appendChild(dropElement.element);
    }

    dragReset(dropElement: IDropElement): void {
        dropElement.parent.classList.remove('drop-target');
        dropElement.parent.classList.add('potential-drop-target');

        // make it not draggable
        dropElement.element.removeAttribute('draggable');

        // remove the placeholder
        if (dropElement.placeHolder) {
            dropElement.placeHolder.remove();
            dropElement.placeHolder = null;
        }

        // put the drop element back where it came from
        dropElement.parent.appendChild(dropElement.element);
    }

    drop(event: MouseEvent, dropElement: IDropElement): void {
        const parent = event.currentTarget as HTMLElement;
        if (this.dragMatch === parent.dataset.romanji) {
            this.updateCounter(this.correctElement, ++this.correctCount);
            this.dragReset(dropElement);
        } else {
            this.updateCounter(this.mistakeElement, ++this.mistakeCount);
            parent.classList.add('drop-target-transition', 'bg-danger');
            setTimeout(() => {
                parent.classList.remove('bg-danger');
                setTimeout(() => {
                    parent.classList.remove('drop-target-transition');
                }, 200);
            }, 500);
        }
    }

    drag(event: MouseEvent): void {
        // keep track of the romanji we're dragging
        const element = event.currentTarget as HTMLElement;
        this.dragMatch = element.dataset.romanji;
    }

    updateCounter(counterElement: HTMLElement, count: number): void {
        counterElement.innerHTML = String(count);
    }

    tick(): void {
        // do we have any source elements left?
        const remaining: number = this.dragSourceElement.childNodes.length;
        if (remaining) {
            const seconds: number = Math.round((new Date().getTime() - this.startTime.getTime()) / 1000);
            this.timerElement.innerHTML = String(seconds + (seconds > 1 ? ' seconds' : ' second'));
        } else {
            // stop the timer
            clearInterval(this.tickInterval as number);

            if (this.active) {
                this.stopBtn.classList.add('d-none');
                this.resetBtn.classList.remove('d-none');
            }
        }
    }

    reset(): void {
        this.resetBtn.classList.add('d-none');
        this.startBtn.classList.remove('d-none');

        // stop the timer
        clearInterval(this.tickInterval as number);

        this.stop();
    }

    // fisher yates shuffle
    shuffle<T>(array: T[]): T[] {
        let m = array.length,
            t,
            i;

        // while there remain elements to shuffle
        while (m) {
            // pick a remaining element
            i = Math.floor(Math.random() * m--);

            // then swap it with the current element
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
}

interface IDropElement {
    element: HTMLElement;
    parent: HTMLElement;
    placeHolder?: HTMLSpanElement;
}
