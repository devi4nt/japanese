import { AbstractPage } from "./AbstractPage";
import { CharacterTable } from "../classes/CharacterTable";

export abstract class AbstractCharacterPage extends AbstractPage {
    abstract identifier: string;
    abstract characterTables: CharacterTable[];

    tableHTML(filter?: string): string {
        let tableHTML = "";
        this.characterTables.forEach(characterTable => {
            if (
                typeof filter === "undefined" ||
                characterTable.identifier.indexOf(filter) !== -1
            ) {
                tableHTML += characterTable.html();
            }
        });
        return tableHTML;
    }
}
