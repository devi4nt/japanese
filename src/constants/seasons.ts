import { Phrase } from '../classes/Phrase';
import { PhraseTable } from '../classes/PhraseTable';
import { Kanji } from './../classes/Kanji';
import { hiragana } from './hiragana';

export const seasons: Phrase[] = [
    new Phrase([new Kanji('春', [hiragana.ha, hiragana.ru])], null, ['Spring']),
    new Phrase([new Kanji('夏', [hiragana.na, hiragana.tsu])], null, ['Summer']),
    new Phrase([new Kanji('秋', [hiragana.a, hiragana.ki])], null, ['Autumn']),
    new Phrase([new Kanji('冬', [hiragana.fu, hiragana.yu])], null, ['Winter']),
];

export const seasonsTable = new PhraseTable(seasons);
