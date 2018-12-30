import { ICharacterGroup } from "../interfaces/characters";

export const defaultGrouping: ICharacterGroup[] = [
    { identifier: "n", filter: /^n$/ },
    { identifier: "w", filter: /^w/ },
    { identifier: "r", filter: /^r/ },
    { identifier: "y", filter: /^y/ },
    { identifier: "m", filter: /^m/ },
    { identifier: "h", filter: /^h|f/ },
    { identifier: "n", filter: /^n./ },
    { identifier: "t", filter: /^t|c/ },
    { identifier: "s", filter: /^s/ },
    { identifier: "k", filter: /^k/ },
    { identifier: "∅", filter: /^(a|i|u|e|o)$/ }
];

export const diacriticsGrouping: ICharacterGroup[] = [
    { identifier: "p", filter: /^p/ },
    { identifier: "b", filter: /^b/ },
    { identifier: "d", filter: /^d/ },
    { identifier: "z", filter: /^z/ },
    { identifier: "g", filter: /^g/ }
];

export const digraphsGrouping: ICharacterGroup[] = [
    { identifier: "r", filter: /^r/ },
    { identifier: "m", filter: /^m/ },
    { identifier: "h", filter: /^h/ },
    { identifier: "n", filter: /^n/ },
    { identifier: "c", filter: /^c/ },
    { identifier: "s", filter: /^s/ },
    { identifier: "k", filter: /^k/ }
];

export const digraphsDiacriticsGrouping: ICharacterGroup[] = [
    { identifier: "p", filter: /^p/ },
    { identifier: "b", filter: /^b/ },
    { identifier: "j", filter: /^j/ },
    { identifier: "g", filter: /^g/ }
];
