import { IRomanji, RomanjiKeys } from "../interfaces/romanji";

import { CharacterTable } from "../classes/CharacterTable";
import { Hiragana } from "../classes/Hiragana";
import { defaultGrouping } from "./characters";

// vowels
const a = new Hiragana("あ", "a");
const i = new Hiragana("い", "i");
const u = new Hiragana("う", "u");
const e = new Hiragana("え", "e");
const o = new Hiragana("お", "o");

// k consonants
const ka = new Hiragana("か", "ka", a);
const ki = new Hiragana("き", "ki", i);
const ku = new Hiragana("く", "ku", u);
const ke = new Hiragana("け", "ke", e);
const ko = new Hiragana("こ", "ko", o);

// s consonants
const sa = new Hiragana("さ", "sa", a);
const shi = new Hiragana("し", "shi", i);
const su = new Hiragana("す", "su", u);
const se = new Hiragana("せ", "se", e);
const so = new Hiragana("そ", "so", o);

// t consonants
const ta = new Hiragana("た", "ta", a);
const chi = new Hiragana("ち", "chi", i);
const tsu = new Hiragana("つ", "tsu", u);
const te = new Hiragana("て", "te", e);
const to = new Hiragana("と", "to", o);

// n consonants
const na = new Hiragana("な", "na", a);
const ni = new Hiragana("に", "ni", i);
const nu = new Hiragana("ぬ", "nu", u);
const ne = new Hiragana("ね", "ne", e);
const no = new Hiragana("の", "no", o);

// h consonants
const ha = new Hiragana("は", "ha", a);
const hi = new Hiragana("ひ", "hi", i);
const fu = new Hiragana("ふ", "fu", u);
const he = new Hiragana("へ", "he", e);
const ho = new Hiragana("ほ", "ho", o);

// m consonants
const ma = new Hiragana("ま", "ma", a);
const mi = new Hiragana("み", "mi", i);
const mu = new Hiragana("む", "mu", u);
const me = new Hiragana("め", "me", e);
const mo = new Hiragana("も", "mo", o);

// y consonants
const ya = new Hiragana("や", "ya", a);
const yu = new Hiragana("ゆ", "yu", u);
const yo = new Hiragana("よ", "yo", o);

// r consonants
const ra = new Hiragana("ら", "ra", a);
const ri = new Hiragana("り", "ri", i);
const ru = new Hiragana("る", "ru", u);
const re = new Hiragana("れ", "re", e);
const ro = new Hiragana("ろ", "ro", o);

// w consonants
const wa = new Hiragana("わ", "wa", a);
const wo = new Hiragana("を", "wo", o);

// n consonants
const n = new Hiragana("ん", "n");

export const sokuon: Hiragana = new Hiragana("っ", "sokuon");

export const hiraganaVowels: Hiragana[] = [a, i, u, e, o];

// consonants
export const hiraganaConsonants: Hiragana[] = [
    // k consonants
    ka,
    ki,
    ku,
    ke,
    ko,
    // s consonants
    sa,
    shi,
    su,
    se,
    so,
    // t consonants
    ta,
    chi,
    tsu,
    te,
    to,
    // n consonants
    na,
    ni,
    nu,
    ne,
    no,
    // h consonants
    ha,
    hi,
    fu,
    he,
    ho,
    // m consonants
    ma,
    mi,
    mu,
    me,
    mo,
    // y consonants
    ya,
    yu,
    yo,
    // r consonants
    ra,
    ri,
    ru,
    re,
    ro,
    // w consonants
    wa,
    wo,
    // n consonants
    n
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
        [
            { identifier: "g", filter: /^g/ },
            { identifier: "z", filter: /^z/ },
            { identifier: "d", filter: /^d/ },
            { identifier: "b", filter: /^b/ },
            { identifier: "p", filter: /^p/ }
        ]
    ),
    new CharacterTable("Digraphs", "(yōon)", "hiraganadigraphs", hiraganaYoon, [
        { identifier: "ya", filter: /a$/ },
        { identifier: "yu", filter: /u$/ },
        { identifier: "yo", filter: /o$/ }
    ]),
    new CharacterTable(
        "Digraphs with diacritics",
        "(yōon with (han)dakuten)",
        "hiraganadigraphdiacritics",
        hiraganaYoonHanDakuten,
        [
            { identifier: "ya", filter: /a$/ },
            { identifier: "yu", filter: /u$/ },
            { identifier: "yo", filter: /o$/ }
        ]
    )
];
