import { HiraganaPage, hiraganaPageStructure } from "../pages/HiraganaPage";

import { DefaultPage } from "../pages/DefaultPage";
import { IPageStructure } from "../interfaces/pages";
import { KatakanaPage } from "../pages/KatakanaPage";
import { NumbersPage } from "../pages/NumbersPage";
import { PhrasesPage } from "../pages/PhrasesPage";
import { katakanaPageStructure } from "./../pages/KatakanaPage";
import { setupDragEvents } from "./drag";

// import { setupQuizEvents } from "./quiz";

export const pageStructure: IPageStructure[] = [
    hiraganaPageStructure,
    katakanaPageStructure,
    { identifier: "numbers", title: "Numbers" },
    { identifier: "phrases", title: "Phrases" }
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
        case "phrases":
            page = new PhrasesPage();
            break;
        default:
            page = new DefaultPage();
            break;
    }

    page.render(identifier);
}
