import { IRomanji } from "../interfaces/romanji";

export class Character {
    type?: string;
    symbol: string;
    romanji?: keyof IRomanji;
    vowel?: Character;
    constructor(symbol: string, romanji?: keyof IRomanji) {
        this.symbol = symbol;
        this.romanji = romanji;
    }
}
