import { Character } from '../classes/Character';
import { Hiragana } from './../classes/Hiragana';
import { Katakana } from './../classes/Katakana';

export interface ICharacterGroup {
    identifier: string;
    filter?: RegExp;
    romanji?: string;
    vowel?: Hiragana | Katakana;
}

export interface ICharacterGroupData {
    identifier: string;
    characters: Character[];
}
