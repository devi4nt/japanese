import { Phrase } from '../classes/Phrase';
import { PhraseTable } from '../classes/PhraseTable';
import { eight, five, four, nine, one, seven, six, ten, three, two } from './numbers';

import { Kanji } from './../classes/Kanji';
import { hiragana } from './hiragana';

export const month = new Kanji('月', [hiragana.ga, hiragana.tsu]);
export const months: Phrase[] = [
    new Phrase([one, month], null, ['January']),
    new Phrase([two, month], null, ['February']),
    new Phrase([three, month], null, ['March']),
    new Phrase([four, month], 'shigatsu', ['April']),
    new Phrase([five, month], null, ['May']),
    new Phrase([six, month], null, ['June']),
    new Phrase([seven, month], 'shichigatsu', ['July']),
    new Phrase([eight, month], null, ['August']),
    new Phrase([nine, month], null, ['September']),
    new Phrase([ten, month], null, ['October']),
    new Phrase([ten, one, month], null, ['November']),
    new Phrase([ten, two, month], null, ['December']),
];

export const monthsTable = new PhraseTable(months);
