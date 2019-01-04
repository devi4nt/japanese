import { AbstractPage } from "./AbstractPage";
import { commonAdjectivesTable } from "../constants/adjectives";

export class AdjectivesPage extends AbstractPage {
    templateHTML = `<h2>Japanese Adjectives</h2>`;
    pageHTML(): string {
        return (
            this.templateHTML + commonAdjectivesTable.html("Common Adjectives")
        );
    }
}
