import { Kanji } from "./../classes/Kanji";
import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";

export const seasons: Phrase[] = [
    new Phrase([new Kanji("春", [hiragana.ha, hiragana.ru])], undefined, [
        "Spring"
    ]),
    new Phrase([new Kanji("夏", [hiragana.na, hiragana.tsu])], undefined, [
        "Summer"
    ]),
    new Phrase([new Kanji("秋", [hiragana.a, hiragana.ki])], undefined, [
        "Autumn"
    ]),
    new Phrase([new Kanji("冬", [hiragana.fu, hiragana.yu])], undefined, [
        "Winter"
    ])
];

export const seasonsTable = new PhraseTable(seasons);
