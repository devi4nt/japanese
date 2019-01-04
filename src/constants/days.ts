import { Kanji } from "./../classes/Kanji";
import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";

export const day = new Kanji("曜日", [hiragana.yo, hiragana.u, hiragana.bi]);
export const days: Phrase[] = [
    new Phrase([new Kanji("日", [hiragana.ni, hiragana.chi]), day], undefined, [
        "Sunday"
    ]),
    new Phrase([new Kanji("月", [hiragana.ge, hiragana.tsu]), day], undefined, [
        "Monday"
    ]),
    new Phrase([new Kanji("火", [hiragana.ka]), day], undefined, ["Tuesday"]),
    new Phrase([new Kanji("水", [hiragana.su, hiragana.i]), day], undefined, [
        "Wednesday"
    ]),
    new Phrase([new Kanji("木", [hiragana.mo, hiragana.ku]), day], undefined, [
        "Thursday"
    ]),
    new Phrase([new Kanji("金", [hiragana.ki, hiragana.n]), day], undefined, [
        "Friday"
    ]),
    new Phrase([new Kanji("土", [hiragana.do]), day], undefined, ["Saturday"])
];

export const daysTable = new PhraseTable(days);
