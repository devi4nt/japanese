import {
    eight,
    five,
    four,
    nine,
    one,
    seven,
    six,
    ten,
    three,
    two
} from "./numbers";

import { Kanji } from "./../classes/Kanji";
import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";

export const month = new Kanji("月", [hiragana.ga, hiragana.tsu]);
export const months: Phrase[] = [
    new Phrase([one, month], undefined, ["January"]),
    new Phrase([two, month], undefined, ["February"]),
    new Phrase([three, month], undefined, ["March"]),
    new Phrase([four, month], "shigatsu", ["April"]),
    new Phrase([five, month], undefined, ["May"]),
    new Phrase([six, month], undefined, ["June"]),
    new Phrase([seven, month], "shichigatsu", ["July"]),
    new Phrase([eight, month], undefined, ["August"]),
    new Phrase([nine, month], undefined, ["September"]),
    new Phrase([ten, month], undefined, ["October"]),
    new Phrase([ten, one, month], undefined, ["November"]),
    new Phrase([ten, two, month], undefined, ["December"])
];

export const monthsTable = new PhraseTable(months);
