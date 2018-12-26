import { ICharacterGroup } from "../interfaces/characters";

export const defaultGrouping: ICharacterGroup[] = [
    { identifier: "w", filter: /^w.|n$/ },
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
