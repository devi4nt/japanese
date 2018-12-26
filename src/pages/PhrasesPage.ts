import { AbstractPage } from "./AbstractPage";
import { phrasesTable } from "../constants/phrases";

export class PhrasesPage extends AbstractPage {
    templateHTML = `<h2>Phrases</h2>`;
    pageHTML(): string {
        return this.templateHTML + phrasesTable.html("");
    }
}
