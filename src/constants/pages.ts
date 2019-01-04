import { HiraganaPage, hiraganaPageStructure } from "../pages/HiraganaPage";

import { AdjectivesPage } from "../pages/AdjectivesPage";
import { DefaultPage } from "../pages/DefaultPage";
import { IPageStructure } from "../interfaces/pages";
import { KatakanaPage } from "../pages/KatakanaPage";
import { NumbersPage } from "../pages/NumbersPage";
import { VerbsPage } from "../pages/VerbsPage";
import { WordsPage } from "../pages/WordsPage";
import { katakanaPageStructure } from "./../pages/KatakanaPage";
import { setupDragEvents } from "./drag";

export const pageStructure: IPageStructure[] = [
    hiraganaPageStructure,
    katakanaPageStructure,
    { identifier: "numbers", title: "Numbers" },
    { identifier: "words", title: "Words" },
    { identifier: "verbs", title: "Verbs" },
    { identifier: "adjectives", title: "Adjectives" }
];

export function viewPage(identifier?: string): void {
    // use the location.hash if no identifier is provided
    if (typeof identifier === "undefined") {
        identifier = location.hash.replace("#", "");
    }

    // if the anchor element for this page is visible then we don't need to render
    const anchorElement = document.getElementById(identifier);

    if (!anchorElement) {
        // render the page
        renderPage(identifier);

        // drag drop challenge setup
        setupDragEvents();
    }
}

function renderPage(identifier: string): void {
    let page;
    switch (identifier) {
        case "hiragana":
        case "hiraganamonographs":
        case "hiraganadiacritics":
        case "hiraganadigraphs":
        case "hiraganadigraphdiacritics":
            page = new HiraganaPage();
            break;
        case "katakana":
        case "katakanamonographs":
        case "katakanadiacritics":
        case "katakanadigraphs":
        case "katakanadigraphdiacritics":
            page = new KatakanaPage();
            break;
        case "numbers":
            page = new NumbersPage();
            break;
        case "words":
            page = new WordsPage();
            break;
        case "verbs":
            page = new VerbsPage();
            break;
        case "adjectives":
            page = new AdjectivesPage();
            break;
        default:
            page = new DefaultPage();
            break;
    }

    page.render(identifier);
}
