import { Furigana } from "./Furigana";

// https://jisho.org/search/%23kanji%20%E7%A5%A5

export class Kanji {
    symbol: string;
    furigana?: Furigana[];
    romanji?: string;
    constructor(symbol: string, furigana?: Furigana[]) {
        this.symbol = symbol;
        this.furigana = furigana;
        if (furigana) {
            this.romanji = "";
            furigana.forEach((symbol: Furigana) => {
                this.romanji += symbol.romanji;
            });
        }
    }
}
