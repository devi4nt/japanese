import { AbstractComponent } from "./AbstractComponent";
import { IPageContentsStructure } from "../interfaces/contents";
import { IPageStructure } from "../interfaces/pages";

export class ContentsComponent extends AbstractComponent {
    templateHTML = `<ul>{{#each structure}}
    <li>
        <a {{#unless active}}href="#{{identifier}}"{{else}}nohref{{/unless}}>{{title}}</a>{{#if description}} - {{description}}{{/if}}
        {{#if children}}<ul>{{#each children}}<li><a {{#unless active}}href="#{{identifier}}"{{else}}nohref{{/unless}}>{{title}}</a>{{#if description}} - {{description}}{{/if}}</li>{{/each}}</ul>{{/if}}
    </li>
{{/each}}</ul>`;

    recurseSetActive(
        activeIdentifier: string,
        structure: IPageStructure[]
    ): void {
        structure.forEach((element: IPageStructure) => {
            element.active =
                element.identifier === activeIdentifier ? true : false;
            if (typeof element.children !== "undefined") {
                this.recurseSetActive(activeIdentifier, element.children);
            }
        });
    }

    compile(templateData?: IPageContentsStructure): string {
        // decorate active element
        const activeIdentifier: string = location.hash.replace("#", "");
        this.recurseSetActive(activeIdentifier, templateData.structure);
        // call parent compiler
        return super.compile(templateData);
    }
}
