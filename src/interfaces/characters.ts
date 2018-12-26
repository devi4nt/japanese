import { Character } from "../classes/Character";

export interface ICharacterGroup {
    identifier: string;
    filter: RegExp;
}

export interface ICharacterGroupData {
    identifier: string;
    characters: Character[];
}
