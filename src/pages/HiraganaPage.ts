import { AbstractCharacterPage } from "./AbstractCharacterPage";
import { CharacterTable } from "../classes/CharacterTable";
import { IPageStructure } from "../interfaces/pages";
import { hiraganaCharacterTables } from "../constants/hiragana";

const pageTitle = "Hiragana";
const pageIdentifier = "hiragana";

export const hiraganaPageStructure: IPageStructure = {
    title: pageTitle,
    identifier: pageIdentifier,
    children: []
};

hiraganaCharacterTables.forEach(characterTable => {
    hiraganaPageStructure.children.push({
        title: characterTable.title,
        description: characterTable.description,
        identifier: characterTable.identifier
    });
});

export class HiraganaPage extends AbstractCharacterPage {
    identifier = pageIdentifier;
    templateHTML = `<h2>` + pageTitle + `</h2>`;
    pageStructure = hiraganaPageStructure.children;
    characterTables: CharacterTable[] = hiraganaCharacterTables;

    pageHTML(identifier: string): string {
        return (
            this.templateHTML + this.contentsHTML() + this.tableHTML(identifier)
        );
    }
}
