import { Character } from "./Character";
import { IRomanji } from "../interfaces/romanji";

export class Katakana extends Character {
    constructor(symbol: string, romanji: keyof IRomanji, vowel?: Katakana) {
        super(symbol, romanji);
        this.vowel = vowel;
    }
}
