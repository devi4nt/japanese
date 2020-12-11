import { JapaneseNumber } from '../classes/JapaneseNumber';
import { Kanji } from '../classes/Kanji';
import { NumberTable } from '../classes/NumberTable';
import { Phrase } from '../classes/Phrase';
import { hiragana } from './hiragana';

// kanji numbers
export const zero = new Kanji('零', [hiragana.re, hiragana.i]);
export const one = new Kanji('一', [hiragana.i, hiragana.chi]);
export const two = new Kanji('二', [hiragana.ni]);
export const three = new Kanji('三', [hiragana.sa, hiragana.n]);
export const four = new Kanji('四', [hiragana.yo, hiragana.n]);
export const five = new Kanji('五', [hiragana.go]);
export const six = new Kanji('六', [hiragana.ro, hiragana.ku]);
export const seven = new Kanji('七', [hiragana.na, hiragana.na]);
export const eight = new Kanji('八', [hiragana.ha, hiragana.chi]);
export const nine = new Kanji('九', [hiragana.ku]);
export const ten = new Kanji('十', [hiragana.yu, hiragana.u]);

// number composites
export const numbers: JapaneseNumber[] = [
    new JapaneseNumber(
        0,
        [
            new Phrase([hiragana.re, hiragana.i], null, ['zero']),
            new Phrase([hiragana.ze, hiragana.ro], null, ['zero']),
            new Phrase([hiragana.ma, hiragana.ru], null, ['zero']),
        ],
        zero,
    ),
    new JapaneseNumber(
        1,
        [new Phrase([hiragana.i, hiragana.chi], null, ['one'])],
        one,
        [new Phrase([hiragana.hi, hiragana.to, hiragana.tsu])],
        new Kanji('一つ'),
    ),
    new JapaneseNumber(2, [new Phrase([hiragana.ni], null, ['two'])], two, [new Phrase([hiragana.fu, hiragana.ta, hiragana.tsu])], new Kanji('二つ')),
    new JapaneseNumber(
        3,
        [new Phrase([hiragana.sa, hiragana.n], null, ['three'])],
        three,
        [new Phrase([hiragana.mi, hiragana.sokuon, hiragana.tsu], 'mittsu')],
        new Kanji('三つ'),
    ),
    new JapaneseNumber(
        4,
        [new Phrase([hiragana.shi], null, ['four']), new Phrase([hiragana.yo, hiragana.n], null, ['four'])],
        four,
        [new Phrase([hiragana.yo, hiragana.sokuon, hiragana.tsu], 'yottsu')],
        new Kanji('四つ'),
    ),
    new JapaneseNumber(
        5,
        [new Phrase([hiragana.go], null, ['five'])],
        five,
        [new Phrase([hiragana.i, hiragana.tsu, hiragana.tsu])],
        new Kanji('五つ'),
    ),
    new JapaneseNumber(
        6,
        [new Phrase([hiragana.ro, hiragana.ku], null, ['six'])],
        six,
        [new Phrase([hiragana.mu, hiragana.sokuon, hiragana.tsu], 'muttsu')],
        new Kanji('六つ'),
    ),
    new JapaneseNumber(
        7,
        [new Phrase([hiragana.shi, hiragana.chi], null, ['seven']), new Phrase([hiragana.na, hiragana.na], null, ['seven'])],
        seven,
        [new Phrase([hiragana.na, hiragana.na, hiragana.tsu])],
        new Kanji('七つ'),
    ),
    new JapaneseNumber(
        8,
        [new Phrase([hiragana.ha, hiragana.chi], null, ['eight'])],
        eight,
        [new Phrase([hiragana.ya, hiragana.sokuon, hiragana.tsu], 'yattsu')],
        new Kanji('八つ'),
    ),
    new JapaneseNumber(
        9,
        [new Phrase([hiragana.ku], null, ['nine']), new Phrase([hiragana.kyo, hiragana.u], 'kyū', ['nine'])],
        nine,
        [new Phrase([hiragana.ko, hiragana.ko, hiragana.no, hiragana.tsu])],
        new Kanji('九つ'),
    ),
    new JapaneseNumber(10, [new Phrase([hiragana.ju, hiragana.u], 'jū', ['ten'])], ten, [new Phrase([hiragana.to, hiragana.u])], new Kanji('十')),
];

export const japaneseNumberTable = new NumberTable(numbers);
