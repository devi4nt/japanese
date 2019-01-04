import { AbstractPage } from "./AbstractPage";
import { commonVerbsTable } from "../constants/verbs";

export class VerbsPage extends AbstractPage {
    templateHTML = `<h2>Japanese Verbs</h2>`;
    pageHTML(): string {
        return this.templateHTML + commonVerbsTable.html("Common Verbs");
    }
}
