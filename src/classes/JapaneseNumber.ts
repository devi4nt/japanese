import { Kanji } from './Kanji';
import { Phrase } from './Phrase';

export class JapaneseNumber {
    decimal: number;
    sinoPhrases: Phrase[];
    sinoKanji: Kanji;
    nativePhrases?: Phrase[];
    nativeKanji?: Kanji;
    constructor(decimal: number, sinoPhrases: Phrase[], sinoKanji: Kanji, nativePhrases?: Phrase[], nativeKanji?: Kanji) {
        this.decimal = decimal;
        this.sinoPhrases = sinoPhrases;
        this.sinoKanji = sinoKanji;
        this.nativePhrases = nativePhrases;
        this.nativeKanji = nativeKanji;
    }
}
