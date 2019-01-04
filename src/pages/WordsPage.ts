import { AbstractPage } from "./AbstractPage";
import { coloursTable } from "../constants/colours";
import { daysTable } from "../constants/days";
import { monthsTable } from "../constants/months";
import { seasonsTable } from "../constants/seasons";
import { usefulPhrasesTable } from "../constants/phrases";

export class WordsPage extends AbstractPage {
    templateHTML = `<h2>Japanese Words</h2>`;
    pageHTML(): string {
        return (
            this.templateHTML +
            usefulPhrasesTable.html("Useful Phrases") +
            coloursTable.html("Colours") +
            monthsTable.html("Months") +
            daysTable.html("Days") +
            seasonsTable.html("Seasons")
        );
    }
}
