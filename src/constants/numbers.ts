import { JapaneseNumber } from "../classes/JapaneseNumber";
import { Kanji } from "../classes/Kanji";
import { NumberTable } from "../classes/NumberTable";
import { Phrase } from "../classes/Phrase";
import { hiragana } from "./hiragana";

// numbers
const zero = new JapaneseNumber(
    0,
    [
        new Phrase([hiragana.re, hiragana.i], undefined, ["zero"]),
        new Phrase([hiragana.ze, hiragana.ro], undefined, ["zero"]),
        new Phrase([hiragana.ma, hiragana.ru], undefined, ["zero"])
    ],
    new Kanji("零")
);
const one = new JapaneseNumber(
    1,
    [new Phrase([hiragana.i, hiragana.chi], undefined, ["one"])],
    new Kanji("一"),
    [new Phrase([hiragana.hi, hiragana.to, hiragana.tsu])],
    new Kanji("一つ")
);
const two = new JapaneseNumber(
    2,
    [new Phrase([hiragana.ni], undefined, ["two"])],
    new Kanji("二"),
    [new Phrase([hiragana.fu, hiragana.ta, hiragana.tsu])],
    new Kanji("二つ")
);
const three = new JapaneseNumber(
    3,
    [new Phrase([hiragana.sa, hiragana.n], undefined, ["three"])],
    new Kanji("三"),
    [new Phrase([hiragana.mi, hiragana.sokuon, hiragana.tsu], "mittsu")],
    new Kanji("三つ")
);
const four = new JapaneseNumber(
    4,
    [
        new Phrase([hiragana.shi], undefined, ["four"]),
        new Phrase([hiragana.yo, hiragana.n], undefined, ["four"])
    ],
    new Kanji("四"),
    [new Phrase([hiragana.yo, hiragana.sokuon, hiragana.tsu], "yottsu")],
    new Kanji("四つ")
);
const five = new JapaneseNumber(
    5,
    [new Phrase([hiragana.go], undefined, ["five"])],
    new Kanji("五"),
    [new Phrase([hiragana.i, hiragana.tsu, hiragana.tsu])],
    new Kanji("五つ")
);
const six = new JapaneseNumber(
    6,
    [new Phrase([hiragana.ro, hiragana.ku], undefined, ["six"])],
    new Kanji("六"),
    [new Phrase([hiragana.mu, hiragana.sokuon, hiragana.tsu], "muttsu")],
    new Kanji("六つ")
);
const seven = new JapaneseNumber(
    7,
    [
        new Phrase([hiragana.shi, hiragana.chi], undefined, ["seven"]),
        new Phrase([hiragana.na, hiragana.na], undefined, ["seven"])
    ],
    new Kanji("七"),
    [new Phrase([hiragana.na, hiragana.na, hiragana.tsu])],
    new Kanji("七つ")
);
const eight = new JapaneseNumber(
    8,
    [new Phrase([hiragana.ha, hiragana.chi], undefined, ["eight"])],
    new Kanji("八"),
    [new Phrase([hiragana.ya, hiragana.sokuon, hiragana.tsu], "yattsu")],
    new Kanji("八つ")
);
const nine = new JapaneseNumber(
    9,
    [
        new Phrase([hiragana.ku], undefined, ["nine"]),
        new Phrase([hiragana.kyo, hiragana.u], "kyū", ["nine"])
    ],
    new Kanji("九"),
    [new Phrase([hiragana.ko, hiragana.ko, hiragana.no, hiragana.tsu])],
    new Kanji("九つ")
);
const ten = new JapaneseNumber(
    10,
    [new Phrase([hiragana.ju, hiragana.u], "jū", ["ten"])],
    new Kanji("十"),
    [new Phrase([hiragana.to, hiragana.u])],
    new Kanji("十")
);

export const numbers: JapaneseNumber[] = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten
];

export const japaneseNumberTable = new NumberTable(numbers);
