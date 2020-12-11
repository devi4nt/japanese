import { Hiragana } from './Hiragana';
import { Kanji } from './Kanji';
import { Katakana } from './Katakana';

export class Phrase {
    symbols: Hiragana[] | Katakana[] | Kanji[];
    romanji?: string;
    english?: string[];
    constructor(symbols: Hiragana[] | Katakana[] | Kanji[], romanji?: string, english?: string[]) {
        this.symbols = symbols;
        this.romanji = romanji;
        this.english = english;
    }
}
