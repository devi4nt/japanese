import { IRomanji } from '../interfaces/romanji';
import { Character } from './Character';

export class Katakana extends Character {
    constructor(symbol: string, romanji: keyof IRomanji, vowel?: Katakana) {
        super(symbol, romanji);
        this.vowel = vowel;
    }
}
