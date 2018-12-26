import { IRomanji, RomanjiKeys } from "../interfaces/romanji";

import { CharacterTable } from "../classes/CharacterTable";
import { Katakana } from "../classes/Katakana";
import { defaultGrouping } from "./characters";

// vowels
const a = new Katakana("ア", "a");
const i = new Katakana("イ", "i");
const u = new Katakana("ウ", "u");
const e = new Katakana("エ", "e");
const o = new Katakana("オ", "o");

export const katakanaVowels: Katakana[] = [a, i, u, e, o];

// consonants
export const katakanaConsonants: Katakana[] = [
    // k consonants
    new Katakana("カ", "ka", a),
    new Katakana("キ", "ki", i),
    new Katakana("ク", "ku", u),
    new Katakana("ケ", "ke", e),
    new Katakana("コ", "ko", o),
    // s consonants
    new Katakana("サ", "sa", a),
    new Katakana("シ", "shi", i),
    new Katakana("ス", "su", u),
    new Katakana("セ", "se", e),
    new Katakana("ソ", "so", o),
    // t consonants
    new Katakana("タ", "ta", a),
    new Katakana("チ", "chi", i),
    new Katakana("ツ", "tsu", u),
    new Katakana("テ", "te", e),
    new Katakana("ト", "to", o),
    // n consonants
    new Katakana("ナ", "na", a),
    new Katakana("ニ", "ni", i),
    new Katakana("ヌ", "nu", u),
    new Katakana("ネ", "ne", e),
    new Katakana("ノ", "no", o),
    // h consonants
    new Katakana("ハ", "ha", a),
    new Katakana("ヒ", "hi", i),
    new Katakana("フ", "fu", u),
    new Katakana("ヘ", "he", e),
    new Katakana("ホ", "ho", o),
    // m consonants
    new Katakana("マ", "ma", a),
    new Katakana("ミ", "mi", i),
    new Katakana("ム", "mu", u),
    new Katakana("メ", "me", e),
    new Katakana("モ", "mo", o),
    // y consonants
    new Katakana("ヤ", "ya", a),
    new Katakana("ユ", "yu", u),
    new Katakana("ヨ", "yo", o),
    // r consonants
    new Katakana("ラ", "ra", a),
    new Katakana("リ", "ri", i),
    new Katakana("ル", "ru", u),
    new Katakana("レ", "re", e),
    new Katakana("ロ", "ro", o),
    // w consonants
    new Katakana("ワ", "wa", a),
    new Katakana("ヲ", "wo", o),
    // n consonants
    new Katakana("ン", "n")
];

export const katakanaDakuten: Katakana[] = [
    new Katakana("ガ", "ga", a),
    new Katakana("ギ", "gi", i),
    new Katakana("グ", "gu", u),
    new Katakana("ゲ", "ge", e),
    new Katakana("ゴ", "go", o),
    new Katakana("ザ", "za", a),
    new Katakana("ジ", "ji", i),
    new Katakana("ズ", "zu", u),
    new Katakana("ゼ", "ze", e),
    new Katakana("ゾ", "zo", o),
    new Katakana("ダ", "da", a),
    new Katakana("ヂ", "dji", i),
    new Katakana("ヅ", "dzu", u),
    new Katakana("デ", "de", e),
    new Katakana("ド", "do", o),
    new Katakana("バ", "ba", a),
    new Katakana("ビ", "bi", i),
    new Katakana("ブ", "bu", u),
    new Katakana("ベ", "be", e),
    new Katakana("ボ", "bo", o)
];

// (han)dakuten
export const katakanaHandakuten: Katakana[] = [
    new Katakana("パ", "pa", a),
    new Katakana("ピ", "pi", i),
    new Katakana("プ", "pu", u),
    new Katakana("ペ", "pe", e),
    new Katakana("ポ", "po", o)
];

// yōon
export const katakanaYoon: Katakana[] = [
    new Katakana("キャ", "kya", a),
    new Katakana("キュ", "kyu", u),
    new Katakana("キョ", "kyo", o),

    new Katakana("シャ", "sha", a),
    new Katakana("シュ", "shu", u),
    new Katakana("ショ", "sho", o),

    new Katakana("チャ", "cha", a),
    new Katakana("チュ", "chu", u),
    new Katakana("チョ", "cho", o),

    new Katakana("ニャ", "nya", a),
    new Katakana("ニュ", "nyu", u),
    new Katakana("ニョ", "nyo", o),

    new Katakana("ヒャ", "hya", a),
    new Katakana("ヒュ", "hyu", u),
    new Katakana("ヒョ", "hyo", o),

    new Katakana("ミャ", "mya", a),
    new Katakana("ミュ", "myu", u),
    new Katakana("ミョ", "myo", o),

    new Katakana("リャ", "rya", a),
    new Katakana("リュ", "ryu", u),
    new Katakana("リョ", "ryo", o)
];

// yōon with (han)dakuten
export const katakanaYoonHanDakuten: Katakana[] = [
    new Katakana("ギャ", "gya", a),
    new Katakana("ギュ", "gyu", u),
    new Katakana("ギョ", "gyo", o),

    new Katakana("ジャ", "ja", a),
    new Katakana("ジュ", "ju", u),
    new Katakana("ジョ", "jo", o),

    // new Katakana("ヂャ", "dya", a),
    // new Katakana("ヂュ", "dyu", u),
    // new Katakana("ヂョ", "dyo", o),

    new Katakana("ビャ", "bya", a),
    new Katakana("ビュ", "byu", u),
    new Katakana("ビョ", "byo", o),

    new Katakana("ピャ", "pya", a),
    new Katakana("ピュ", "pyu", u),
    new Katakana("ピョ", "pyo", o)
];

export const katakana: RomanjiKeys = {} as RomanjiKeys;

// katakana vowels
katakanaVowels.forEach(vowel => {
    katakana[vowel.romanji as keyof IRomanji] = vowel;
});

// katakana consonants
katakanaConsonants.forEach(consonants => {
    katakana[consonants.romanji as keyof IRomanji] = consonants;
});

// dakuten
katakanaDakuten.forEach(dakuten => {
    katakana[dakuten.romanji as keyof IRomanji] = dakuten;
});

// (han)dakuten
katakanaHandakuten.forEach(handakuten => {
    katakana[handakuten.romanji as keyof IRomanji] = handakuten;
});

// yōon
katakanaYoon.forEach(yoon => {
    katakana[yoon.romanji as keyof IRomanji] = yoon;
});

// yōon with (han)dakuten
katakanaYoonHanDakuten.forEach(yoonhandakuten => {
    katakana[yoonhandakuten.romanji as keyof IRomanji] = yoonhandakuten;
});

export const katakanaCharacterTables: CharacterTable[] = [
    new CharacterTable(
        "Monographs",
        "(gojūon)",
        "katakanamonographs",
        [].concat(katakanaVowels, katakanaConsonants),
        defaultGrouping
    ),
    new CharacterTable(
        "Diacritics",
        "(gojūon with (han)dakuten)",
        "katakanadiacritics",
        [].concat(katakanaDakuten, katakanaHandakuten),
        [
            { identifier: "g", filter: /^g/ },
            { identifier: "z", filter: /^z/ },
            { identifier: "d", filter: /^d/ },
            { identifier: "b", filter: /^b/ },
            { identifier: "p", filter: /^p/ }
        ]
    ),
    new CharacterTable("Digraphs", "(yōon)", "katakanadigraphs", katakanaYoon, [
        { identifier: "ya", filter: /a$/ },
        { identifier: "yu", filter: /u$/ },
        { identifier: "yo", filter: /o$/ }
    ]),
    new CharacterTable(
        "Digraphs with diacritics",
        "(yōon with (han)dakuten)",
        "katakanadigraphdiacritics",
        katakanaYoonHanDakuten,
        [
            { identifier: "ya", filter: /a$/ },
            { identifier: "yu", filter: /u$/ },
            { identifier: "yo", filter: /o$/ }
        ]
    )
];
