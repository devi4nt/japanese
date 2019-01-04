import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";
import { katakana } from "./katakana";

export const colours: Phrase[] = [
    new Phrase(
        [hiragana.a, hiragana.ka, hiragana.i],
        // 赤
        "akai",
        ["red"]
    ),
    new Phrase(
        [hiragana.a, hiragana.o, hiragana.i],
        // 青
        "aoi",
        ["blue"]
    ),
    new Phrase(
        [hiragana.ki, hiragana.i, hiragana.ro],
        // 黄色
        "kiiro",
        ["yellow"]
    ),
    new Phrase([katakana.pi, katakana.n, katakana.ku], "pinku", ["Pink"]),
    new Phrase(
        [hiragana.mi, hiragana.do, hiragana.ri],
        // 緑
        "midori",
        ["Green"]
    ),
    new Phrase(
        [hiragana.mu, hiragana.ra, hiragana.sa, hiragana.ki],
        // 紫
        "murasaki",
        ["Purple"]
    ),
    new Phrase(
        [hiragana.shi, hiragana.ro],
        // 白
        "shiro",
        ["White"]
    ),
    new Phrase([katakana.o, katakana.re, katakana.n, katakana.ji], "orenji", [
        "Orange"
    ]),
    new Phrase(
        [hiragana.ku, hiragana.ro],
        // 黒
        "kuro",
        ["Black"]
    ),
    new Phrase(
        [hiragana.ha, hiragana.a, hiragana.i, hiragana.i, hiragana.ro],
        // 灰色
        "hai iro",
        ["Grey"]
    ),
    new Phrase(
        [hiragana.cha, hiragana.i, hiragana.ro],
        // 茶色
        "cha iro",
        ["Brown"]
    ),
    new Phrase(
        [hiragana.mi, hiragana.zu, hiragana.i, hiragana.ro],
        // 水色
        "mizuiro",
        ["Light Blue"]
    ),
    new Phrase(
        [hiragana.ki, hiragana.ni, hiragana.ro],
        // 金色
        "kiniro",
        ["Gold"]
    ),
    new Phrase(
        [hiragana.gi, hiragana.ni, hiragana.ro],
        // 銀色
        "giniro",
        ["Silver"]
    ),
    new Phrase(
        [
            katakana.bu,
            katakana.ro,
            katakana.n,
            katakana.zu,
            katakana.i,
            katakana.ro
        ],
        // ブロンズ色
        "buronzuiro",
        ["Bronze"]
    )
];

export const coloursTable = new PhraseTable(colours);
