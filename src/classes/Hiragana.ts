import { Character } from "./Character";
import { IRomanji } from "../interfaces/romanji";

export class Hiragana extends Character {
    type = "hiragana";
    constructor(symbol: string, romanji: keyof IRomanji, vowel?: Hiragana) {
        super(symbol, romanji);
        this.vowel = vowel;
    }
}
