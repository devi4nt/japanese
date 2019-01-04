import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";

export const commonAdjectives: Phrase[] = [
    new Phrase([hiragana.o, hiragana.o, hiragana.ki, hiragana.i], "ooki", [
        "big"
    ]),
    new Phrase([hiragana.chi, hiragana.i, hiragana.sa, hiragana.i], "chiisai", [
        "small"
    ]),
    new Phrase([hiragana.ta, hiragana.ka, hiragana.i], "takai", ["expensive"]),
    new Phrase([hiragana.ya, hiragana.su, hiragana.i], "yasui", ["cheap"]),
    new Phrase([hiragana.na, hiragana.ga, hiragana.i], "nagai", ["long"]),
    new Phrase([hiragana.mi, hiragana.ji, hiragana.ka, hiragana.i], "mijikai", [
        "short"
    ]),
    new Phrase([hiragana.a, hiragana.tsu, hiragana.i], "atsui", ["hot"]),
    new Phrase([hiragana.sa, hiragana.mu, hiragana.i], "samui", [
        "cold (air-temperature)"
    ]),
    new Phrase(
        [hiragana.a, hiragana.ta, hiragana.ta, hiragana.ka, hiragana.i],
        "atatakai",
        ["warm"]
    ),
    new Phrase(
        [hiragana.su, hiragana.zu, hiragana.shi, hiragana.i],
        "suzushii",
        ["cool (air-temperature)"]
    ),
    new Phrase([hiragana.o, hiragana.i, hiragana.shi, hiragana.i], "oishii", [
        "delicious"
    ]),
    new Phrase([hiragana.ma, hiragana.zu, hiragana.i], "mazui", [
        "bad-tasting"
    ]),
    new Phrase(
        [hiragana.o, hiragana.mo, hiragana.shi, hiragana.ro, hiragana.i],
        "omoshiroi",
        ["interesting"]
    ),
    new Phrase(
        [hiragana.tsu, hiragana.ma, hiragana.ra, hiragana.na, hiragana.i],
        "tsumaranai",
        ["boring"]
    ),
    new Phrase([hiragana.o, hiragana.ka, hiragana.shi, hiragana.i], "okashii", [
        "funny"
    ]),
    new Phrase(
        [hiragana.ta, hiragana.no, hiragana.shi, hiragana.i],
        "tanoshii",
        ["fun"]
    ),
    new Phrase(
        [
            hiragana.a,
            hiragana.ta,
            hiragana.ta,
            hiragana.ra,
            hiragana.shi,
            hiragana.i
        ],
        "atatarashii",
        ["new"]
    ),
    new Phrase([hiragana.fu, hiragana.ru, hiragana.i], "furui", ["old"]),
    new Phrase([hiragana.i, hiragana.i], "ii", ["good"]),
    new Phrase([hiragana.yo, hiragana.i], "yoi", ["good"]),
    new Phrase([hiragana.wa, hiragana.ru, hiragana.i], "warui", ["bad"]),
    new Phrase([hiragana.a, hiragana.tsu, hiragana.i], "atsui", [
        "hot (things you can touch)"
    ]),
    new Phrase(
        [hiragana.tsu, hiragana.me, hiragana.ta, hiragana.i],
        "tsumetai",
        ["cold (except air temperature)"]
    ),
    new Phrase([hiragana.ta, hiragana.ka, hiragana.i], "takai", ["tall"]),
    new Phrase([hiragana.hi, hiragana.ku, hiragana.i], "hikui", ["short"]),
    new Phrase([hiragana.o, hiragana.mo, hiragana.i], "omoi", ["heavy"]),
    new Phrase([hiragana.ka, hiragana.ru, hiragana.i], "karui", [
        "light (weight)"
    ]),
    new Phrase([hiragana.hi, hiragana.ro, hiragana.i], "hiroi", [
        "spacious/big"
    ]),
    new Phrase([hiragana.se, hiragana.ma, hiragana.i], "semai", [
        "narrow/small"
    ]),
    new Phrase([hiragana.ha, hiragana.ya, hiragana.i], "hayai", ["fast/early"]),
    new Phrase([hiragana.a, hiragana.so, hiragana.i], "osoi", ["slow/late"]),
    new Phrase([hiragana.chi, hiragana.ka, hiragana.i], "chikai", ["near"]),
    new Phrase([hiragana.to, hiragana.o, hiragana.i], "tooi", ["far"]),
    new Phrase([hiragana.fu, hiragana.to, hiragana.i], "futoi", ["fat"]),
    new Phrase([hiragana.ho, hiragana.so, hiragana.i], "hosoi", ["slim"]),
    new Phrase([hiragana.o, hiragana.ka, hiragana.ru, hiragana.i], "akarui", [
        "bright"
    ]),
    new Phrase([hiragana.ku, hiragana.ra, hiragana.i], "kurai", ["dark"]),
    new Phrase([hiragana.o, hiragana.tsu, hiragana.i], "atsui", ["thick"]),
    new Phrase([hiragana.u, hiragana.su, hiragana.i], "usui", ["thin"]),
    new Phrase(
        [hiragana.ya, hiragana.sa, hiragana.shi, hiragana.i],
        "yasashii",
        ["sweet (personality)"]
    ),
    new Phrase([hiragana.ko, hiragana.wa, hiragana.i], "kowai", ["scary"]),
    new Phrase(
        [hiragana.ka, hiragana.n, hiragana.ta, hiragana.n, hiragana.na],
        "kantan na",
        ["easy"]
    ),
    new Phrase(
        [hiragana.mu, hiragana.zu, hiragana.ka, hiragana.shi, hiragana.i],
        "muzukashii",
        ["difficult"]
    ),
    new Phrase(
        [hiragana.ki, hiragana.re, hiragana.i, hiragana.na],
        "kirei na",
        ["clean/beautiful"]
    ),
    new Phrase([hiragana.ki, hiragana.ta, hiragana.na, hiragana.i], "kitanai", [
        "dirty"
    ]),
    new Phrase(
        [hiragana.i, hiragana.so, hiragana.ga, hiragana.shi, hiragana.i],
        "isogashii",
        ["busy"]
    ),
    new Phrase([hiragana.hi, hiragana.ma, hiragana.na], "hima na", [
        "free (time)"
    ]),
    new Phrase(
        [hiragana.fu, hiragana.be, hiragana.n, hiragana.na],
        "fuben na",
        ["inconvenient"]
    ),
    new Phrase(
        [hiragana.be, hiragana.n, hiragana.ri, hiragana.na],
        "benri na",
        ["convenient"]
    ),
    new Phrase(
        [hiragana.shi, hiragana.n, hiragana.se, hiragana.tsu, hiragana.na],
        "shinsetsu na",
        ["kind"]
    ),
    new Phrase(
        [
            hiragana.fu,
            hiragana.shi,
            hiragana.n,
            hiragana.se,
            hiragana.tsu,
            hiragana.na
        ],
        "fushinsetsu na",
        ["unkind"]
    ),
    new Phrase(
        [hiragana.shi, hiragana.zu, hiragana.ka, hiragana.na],
        "shizuka na",
        ["quiet"]
    ),
    new Phrase([hiragana.u, hiragana.ru, hiragana.sa, hiragana.i], "urusai", [
        "noisy"
    ]),
    new Phrase(
        [hiragana.ni, hiragana.gi, hiragana.ya, hiragana.ka, hiragana.na],
        "nigiyaka na",
        ["lively"]
    ),
    new Phrase(
        [hiragana.su, hiragana.ki, hiragana.de, hiragana.su],
        "suki desu",
        ["to like"]
    ),
    new Phrase(
        [hiragana.ki, hiragana.ra, hiragana.i, hiragana.de, hiragana.su],
        "kirai desu",
        ["to dislike"]
    ),
    new Phrase(
        [hiragana.jo, hiragana.zu, hiragana.de, hiragana.su],
        "jōzu desu",
        ["to be good at (describing other people only)"]
    ),
    new Phrase(
        [hiragana.to, hiragana.ku, hiragana.i, hiragana.de, hiragana.su],
        "tokui desu",
        ["to be good at"]
    ),
    new Phrase(
        [hiragana.he, hiragana.ta, hiragana.de, hiragana.su],
        "heta desu",
        ["to be poor at"]
    )
];

export const commonAdjectivesTable = new PhraseTable(commonAdjectives);
