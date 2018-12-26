import { AbstractCharacterPage } from "./AbstractCharacterPage";
import { CharacterTable } from "../classes/CharacterTable";
import { IPageStructure } from "../interfaces/pages";
import { katakanaCharacterTables } from "../constants/katakana";

const pageTitle = "Katakana";
const pageIdentifier = "katakana";

export const katakanaPageStructure: IPageStructure = {
    title: pageTitle,
    identifier: pageIdentifier,
    children: []
};

katakanaCharacterTables.forEach(characterTable => {
    katakanaPageStructure.children.push({
        title: characterTable.title,
        description: characterTable.description,
        identifier: characterTable.identifier
    });
});

export class KatakanaPage extends AbstractCharacterPage {
    identifier = pageIdentifier;
    templateHTML = `<h2>` + pageTitle + `</h2>`;
    pageStructure = katakanaPageStructure.children;
    characterTables: CharacterTable[] = katakanaCharacterTables;

    pageHTML(identifier: string): string {
        return (
            this.templateHTML + this.contentsHTML() + this.tableHTML(identifier)
        );
    }
}
