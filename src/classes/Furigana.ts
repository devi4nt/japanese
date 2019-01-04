import { Character } from "./Character";
import { IRomanji } from "../interfaces/romanji";

export class Furigana extends Character {
    constructor(symbol: string, romanji: keyof IRomanji) {
        super(symbol, romanji);
    }
}
