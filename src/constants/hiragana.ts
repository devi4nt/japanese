import { IRomanji, RomanjiKeys } from "../interfaces/romanji";
import {
    defaultGrouping,
    diacriticsGrouping,
    digraphsDiacriticsGrouping,
    digraphsGrouping
} from "./characters";

import { CharacterTable } from "../classes/CharacterTable";
import { Hiragana } from "../classes/Hiragana";

// vowels
const a = new Hiragana("あ", "a");
const i = new Hiragana("い", "i");
const u = new Hiragana("う", "u");
const e = new Hiragana("え", "e");
const o = new Hiragana("お", "o");

export const sokuon: Hiragana = new Hiragana("っ", "sokuon");

export const hiraganaVowels: Hiragana[] = [a, i, u, e, o];

// consonants
export const hiraganaConsonants: Hiragana[] = [
    // k consonants
    new Hiragana("か", "ka", a),
    new Hiragana("き", "ki", i),
    new Hiragana("く", "ku", u),
    new Hiragana("け", "ke", e),
    new Hiragana("こ", "ko", o),
    // s consonants
    new Hiragana("さ", "sa", a),
    new Hiragana("し", "shi", i),
    new Hiragana("す", "su", u),
    new Hiragana("せ", "se", e),
    new Hiragana("そ", "so", o),
    // t consonants
    new Hiragana("た", "ta", a),
    new Hiragana("ち", "chi", i),
    new Hiragana("つ", "tsu", u),
    new Hiragana("て", "te", e),
    new Hiragana("と", "to", o),
    // n consonants
    new Hiragana("な", "na", a),
    new Hiragana("に", "ni", i),
    new Hiragana("ぬ", "nu", u),
    new Hiragana("ね", "ne", e),
    new Hiragana("の", "no", o),
    // h consonants
    new Hiragana("は", "ha", a),
    new Hiragana("ひ", "hi", i),
    new Hiragana("ふ", "fu", u),
    new Hiragana("へ", "he", e),
    new Hiragana("ほ", "ho", o),
    // m consonants
    new Hiragana("ま", "ma", a),
    new Hiragana("み", "mi", i),
    new Hiragana("む", "mu", u),
    new Hiragana("め", "me", e),
    new Hiragana("も", "mo", o),
    // y consonants
    new Hiragana("や", "ya", a),
    new Hiragana("ゆ", "yu", u),
    new Hiragana("よ", "yo", o),
    // r consonants
    new Hiragana("ら", "ra", a),
    new Hiragana("り", "ri", i),
    new Hiragana("る", "ru", u),
    new Hiragana("れ", "re", e),
    new Hiragana("ろ", "ro", o),
    // w consonants
    new Hiragana("わ", "wa", a),
    new Hiragana("を", "wo", o),
    // n
    new Hiragana("ん", "n")
];

export const hiraganaDakuten: Hiragana[] = [
    new Hiragana("が", "ga", a),
    new Hiragana("ぎ", "gi", i),
    new Hiragana("ぐ", "gu", u),
    new Hiragana("げ", "ge", e),
    new Hiragana("ご", "go", o),
    new Hiragana("ざ", "za", a),
    new Hiragana("じ", "ji", i),
    new Hiragana("ず", "zu", u),
    new Hiragana("ぜ", "ze", e),
    new Hiragana("ぞ", "zo", o),
    new Hiragana("だ", "da", a),
    new Hiragana("ぢ", "dji", i),
    new Hiragana("づ", "dzu", u),
    new Hiragana("で", "de", e),
    new Hiragana("ど", "do", o),
    new Hiragana("ば", "ba", a),
    new Hiragana("び", "bi", i),
    new Hiragana("ぶ", "bu", u),
    new Hiragana("べ", "be", e),
    new Hiragana("ぼ", "bo", o)
];

// (han)dakuten
export const hiraganaHandakuten: Hiragana[] = [
    new Hiragana("ぱ", "pa", a),
    new Hiragana("ぴ", "pi", i),
    new Hiragana("ぷ", "pu", u),
    new Hiragana("ぺ", "pe", e),
    new Hiragana("ぽ", "po", o)
];

// yōon
export const hiraganaYoon: Hiragana[] = [
    new Hiragana("きゃ", "kya", a),
    new Hiragana("きゅ", "kyu", u),
    new Hiragana("きょ", "kyo", o),

    new Hiragana("しゃ", "sha", a),
    new Hiragana("しゅ", "shu", u),
    new Hiragana("しょ", "sho", o),

    new Hiragana("ちゃ", "cha", a),
    new Hiragana("ちゅ", "chu", u),
    new Hiragana("ちょ", "cho", o),

    new Hiragana("にゃ", "nya", a),
    new Hiragana("にゅ", "nyu", u),
    new Hiragana("にょ", "nyo", o),

    new Hiragana("ひゃ", "hya", a),
    new Hiragana("ひゅ", "hyu", u),
    new Hiragana("ひょ", "hyo", o),

    new Hiragana("みゃ", "mya", a),
    new Hiragana("みゅ", "myu", u),
    new Hiragana("みょ", "myo", o),

    new Hiragana("りゃ", "rya", a),
    new Hiragana("りゅ", "ryu", u),
    new Hiragana("りょ", "ryo", o)
];

// yōon with (han)dakuten
export const hiraganaYoonHanDakuten: Hiragana[] = [
    new Hiragana("ぎゃ", "gya", a),
    new Hiragana("ぎゅ", "gyu", u),
    new Hiragana("ぎょ", "gyo", o),

    new Hiragana("じゃ", "ja", a),
    new Hiragana("じゅ", "ju", u),
    new Hiragana("じょ", "jo", o),

    new Hiragana("びゃ", "bya", a),
    new Hiragana("びゅ", "byu", u),
    new Hiragana("びょ", "byo", o),

    new Hiragana("ぴゃ", "pya", a),
    new Hiragana("ぴゅ", "pyu", u),
    new Hiragana("ぴょ", "pyo", o)
];

export const hiragana: RomanjiKeys = {} as RomanjiKeys;

// sokuon pause
hiragana.sokuon = sokuon;

// hiragana vowels
hiraganaVowels.forEach(vowel => {
    hiragana[vowel.romanji as keyof IRomanji] = vowel;
});

// hiragana consonants
hiraganaConsonants.forEach(consonants => {
    hiragana[consonants.romanji as keyof IRomanji] = consonants;
});

// dakuten
hiraganaDakuten.forEach(dakuten => {
    hiragana[dakuten.romanji as keyof IRomanji] = dakuten;
});

// (han)dakuten
hiraganaHandakuten.forEach(handakuten => {
    hiragana[handakuten.romanji as keyof IRomanji] = handakuten;
});

// yōon
hiraganaYoon.forEach(yoon => {
    hiragana[yoon.romanji as keyof IRomanji] = yoon;
});

// yōon with (han)dakuten
hiraganaYoonHanDakuten.forEach(yoonhandakuten => {
    hiragana[yoonhandakuten.romanji as keyof IRomanji] = yoonhandakuten;
});

export const hiraganaCharacterTables: CharacterTable[] = [
    new CharacterTable(
        "Monographs",
        "(gojūon)",
        "hiraganamonographs",
        [].concat(hiraganaVowels, hiraganaConsonants),
        defaultGrouping
    ),
    new CharacterTable(
        "Diacritics",
        "(gojūon with (han)dakuten)",
        "hiraganadiacritics",
        [].concat(hiraganaDakuten, hiraganaHandakuten),
        diacriticsGrouping
    ),
    new CharacterTable(
        "Digraphs",
        "(yōon)",
        "hiraganadigraphs",
        hiraganaYoon,
        digraphsGrouping
    ),
    new CharacterTable(
        "Digraphs with diacritics",
        "(yōon with (han)dakuten)",
        "hiraganadigraphdiacritics",
        hiraganaYoonHanDakuten,
        digraphsDiacriticsGrouping
    )
];
