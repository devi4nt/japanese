import { AbstractPage } from "./AbstractPage";
import { japaneseNumberTable } from "../constants/numbers";

export class NumbersPage extends AbstractPage {
    templateHTML = `<h2>Numbers</h2>`;
    pageHTML(): string {
        return this.templateHTML + japaneseNumberTable.html("0-10");
    }
}
