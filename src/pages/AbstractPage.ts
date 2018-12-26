import { AbstractComponent } from "../classes/AbstractComponent";
import { ContentsComponent } from "./../classes/ContentsComponent";
import { IPageStructure } from "./../interfaces/pages";

export abstract class AbstractPage extends AbstractComponent {
    contents: ContentsComponent = new ContentsComponent();
    pageStructure?: IPageStructure[];
    outputElement: HTMLElement;

    constructor() {
        super();
        this.outputElement = document.getElementById("page-container");
    }

    abstract pageHTML(identifier: string): string;

    contentsHTML(): string {
        return this.pageStructure
            ? this.contents.compile({
                  structure: this.pageStructure
              })
            : "";
    }

    render(identifier: string): void {
        if (this.outputElement) {
            this.outputElement.innerHTML = this.pageHTML(identifier);
        } else {
            // tslint:disable-next-line:no-console
            console.error("unable to locate output DOM element");
        }
    }
}
