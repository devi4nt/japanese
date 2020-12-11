import { Phrase } from '../classes/Phrase';
import { PhraseTable } from '../classes/PhraseTable';
import { Kanji } from './../classes/Kanji';
import { hiragana } from './hiragana';

export const day = new Kanji('曜日', [hiragana.yo, hiragana.u, hiragana.bi]);
export const days: Phrase[] = [
    new Phrase([new Kanji('日', [hiragana.ni, hiragana.chi]), day], null, ['Sunday']),
    new Phrase([new Kanji('月', [hiragana.ge, hiragana.tsu]), day], null, ['Monday']),
    new Phrase([new Kanji('火', [hiragana.ka]), day], null, ['Tuesday']),
    new Phrase([new Kanji('水', [hiragana.su, hiragana.i]), day], null, ['Wednesday']),
    new Phrase([new Kanji('木', [hiragana.mo, hiragana.ku]), day], null, ['Thursday']),
    new Phrase([new Kanji('金', [hiragana.ki, hiragana.n]), day], null, ['Friday']),
    new Phrase([new Kanji('土', [hiragana.do]), day], null, ['Saturday']),
];

export const daysTable = new PhraseTable(days);
