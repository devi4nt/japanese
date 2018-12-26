export function setupQuizEvents(): void {
    const nodes = document.querySelectorAll(
        "[data-type][data-romanji]"
    ) as NodeListOf<HTMLElement>;
    const elements = Array.from(nodes);
    // tslint:disable-next-line:no-console
    console.log(elements);
    elements.forEach(element => {
        element.addEventListener("click", () => {
            // tslint:disable-next-line:no-console
            console.log(element.dataset);
        });
    });
}
