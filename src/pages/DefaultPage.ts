import { AbstractPage } from "./AbstractPage";
import { pageStructure } from "../constants/pages";

export class DefaultPage extends AbstractPage {
    templateHTML = ``;
    pageStructure = pageStructure;

    pageHTML(): string {
        return this.contentsHTML();
    }
}
