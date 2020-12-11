import { IRomanji } from '../interfaces/romanji';
import { Character } from './Character';

export class Hiragana extends Character {
    constructor(symbol: string, romanji: keyof IRomanji, vowel?: Hiragana) {
        super(symbol, romanji);
        this.vowel = vowel;
    }
}
