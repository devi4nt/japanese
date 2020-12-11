import { IRomanji } from '../interfaces/romanji';
import { Character } from './Character';

export class Furigana extends Character {
    constructor(symbol: string, romanji: keyof IRomanji) {
        super(symbol, romanji);
    }
}
