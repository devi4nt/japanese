import { Kanji } from "../classes/Kanji";
import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";

export const commonVerbs: Phrase[] = [
    new Phrase(
        [new Kanji("行", [hiragana.i]), hiragana.ki, hiragana.ma, hiragana.su],
        "ikimasu",
        ["to go"]
    ),
    new Phrase(
        [new Kanji("食", [hiragana.ta]), hiragana.be, hiragana.ma, hiragana.su],
        "tabemasu",
        ["to eat"]
    ),
    new Phrase(
        [new Kanji("飲", [hiragana.no]), hiragana.mi, hiragana.ma, hiragana.su],
        "nomimasu",
        ["to drink"]
    ),
    new Phrase(
        [new Kanji("買", [hiragana.ka]), hiragana.i, hiragana.ma, hiragana.su],
        "kaimasu",
        ["to buy"]
    ),
    new Phrase(
        [new Kanji("見", [hiragana.mi]), hiragana.ma, hiragana.su],
        "mimasu",
        ["to see"]
    ),
    new Phrase(
        [new Kanji("聞", [hiragana.ki]), hiragana.ki, hiragana.ma, hiragana.su],
        "kikimasu",
        ["to listen"]
    ),
    new Phrase(
        [new Kanji("見", [hiragana.mi]), hiragana.se, hiragana.ma, hiragana.su],
        "misemasu",
        ["to show"]
    ),
    new Phrase(
        [new Kanji("書", [hiragana.ka]), hiragana.ki, hiragana.ma, hiragana.su],
        "kakimasu",
        ["to write", "paint"]
    ),
    new Phrase(
        [
            new Kanji("送", [hiragana.o, hiragana.ku]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "okurimasu",
        ["to send"]
    ),
    new Phrase(
        [
            new Kanji("作", [hiragana.tsu, hiragana.ku]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "tsukurimasu",
        ["to make", "produce", "cook"]
    ),
    new Phrase(
        [
            new Kanji("使", [hiragana.tsu, hiragana.ka]),
            hiragana.i,
            hiragana.ma,
            hiragana.su
        ],
        "tsukaimasu",
        ["to use"]
    ),
    new Phrase(
        [new Kanji("会", [hiragana.a]), hiragana.i, hiragana.ma, hiragana.su],
        "aimasu",
        ["to meet"]
    ),
    new Phrase(
        [new Kanji("来", [hiragana.ki]), hiragana.ma, hiragana.su],
        "kimasu",
        ["to come"]
    ),
    new Phrase(
        [
            new Kanji("帰", [hiragana.ka, hiragana.e]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "kaerimasu",
        ["to return (home)"]
    ),
    new Phrase(
        [new Kanji("有", [hiragana.a]), hiragana.ri, hiragana.ma, hiragana.su],
        "arimasu",
        ["to exist (inanimate object)"]
    ),
    new Phrase(
        [new Kanji("居", [hiragana.i]), hiragana.ma, hiragana.su],
        "imasu",
        ["to exist (animate object)"]
    ),
    new Phrase(
        [
            new Kanji("話", [hiragana.ha, hiragana.na]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "hanashimasu",
        ["to speak"]
    ),
    new Phrase(
        [
            new Kanji("訳", [hiragana.ya, hiragana.ku]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "yakushimasu",
        ["to translate"]
    ),
    new Phrase(
        [new Kanji("寝", [hiragana.ne]), hiragana.ma, hiragana.su],
        "nemasu",
        ["to sleep", "lie down"]
    ),
    new Phrase(
        [new Kanji("起", [hiragana.o]), hiragana.ki, hiragana.ma, hiragana.su],
        "okimasu",
        ["to get up", "wake up"]
    ),
    new Phrase(
        [
            new Kanji("壊", [hiragana.ko, hiragana.wa]),
            hiragana.re,
            hiragana.ma,
            hiragana.su
        ],
        "kowaremasu",
        ["to be broken"]
    ),
    new Phrase(
        [
            new Kanji("直", [hiragana.na, hiragana.o]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "naoshimasu",
        ["to repair"]
    ),
    new Phrase(
        [new Kanji("上", [hiragana.a]), hiragana.ge, hiragana.ma, hiragana.su],
        "agemasu",
        ["to give (present)", "to raise"]
    ),
    new Phrase(
        [
            new Kanji("貰", [hiragana.mo, hiragana.ra]),
            hiragana.i,
            hiragana.ma,
            hiragana.su
        ],
        "moraimasu",
        ["to receive"]
    ),
    new Phrase(
        [new Kanji("借", [hiragana.ka]), hiragana.ri, hiragana.ma, hiragana.su],
        "karimasu",
        ["to borrow"]
    ),
    new Phrase(
        [
            new Kanji("上", [hiragana.a]),
            hiragana.ga,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "agarimasu",
        ["to go up", "rise"]
    ),
    new Phrase(
        [
            new Kanji("下", [hiragana.sa]),
            hiragana.ga,
            hiragana.re,
            hiragana.ma,
            hiragana.su
        ],
        "sagarimasu",
        [" to go down", "drop"]
    ),
    new Phrase(
        [new Kanji("増", [hiragana.fu]), hiragana.e, hiragana.ma, hiragana.su],
        "fuemasu",
        ["to increase"]
    ),
    new Phrase(
        [new Kanji("減", [hiragana.he]), hiragana.ri, hiragana.ma, hiragana.su],
        "herimasu",
        ["to decrease"]
    ),
    new Phrase(
        [
            new Kanji("習", [hiragana.na, hiragana.ra]),
            hiragana.i,
            hiragana.ma,
            hiragana.su
        ],
        "naraimasu",
        ["to learn"]
    ),
    new Phrase(
        [
            new Kanji("覚", [hiragana.o, hiragana.bo]),
            hiragana.e,
            hiragana.ma,
            hiragana.su
        ],
        "oboemasu",
        ["to memorise", "learn", "master"]
    ),
    new Phrase(
        [
            new Kanji("教", [hiragana.o, hiragana.shi]),
            hiragana.e,
            hiragana.ma,
            hiragana.su
        ],
        "oshiemasu",
        ["to teach", "inform"]
    ),
    new Phrase(
        [
            new Kanji("調", [hiragana.shi, hiragana.ra]),
            hiragana.be,
            hiragana.ma,
            hiragana.su
        ],
        "shirabemasu",
        ["to check", "investigate"]
    ),
    new Phrase(
        [
            new Kanji("忘", [hiragana.wa, hiragana.su]),
            hiragana.re,
            hiragana.ma,
            hiragana.su
        ],
        "wasuremasu",
        ["to forget"]
    ),
    new Phrase(
        [
            new Kanji("始", [hiragana.ja, hiragana.ji]),
            hiragana.ma,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "hajimarimasu",
        ["to begin", "start", "open"]
    ),
    new Phrase(
        [
            new Kanji("終", [hiragana.o]),
            hiragana.wa,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "owarimasu",
        ["to finish", "end"]
    ),
    new Phrase(
        [new Kanji("開", [hiragana.a]), hiragana.ke, hiragana.ma, hiragana.su],
        "akemasu",
        ["to open"]
    ),
    new Phrase(
        [
            new Kanji("締", [hiragana.shi]),
            hiragana.me,
            hiragana.ma,
            hiragana.su
        ],
        "shimemasu",
        ["to close"]
    ),
    new Phrase(
        [
            new Kanji("勝", [hiragana.ka]),
            hiragana.chi,
            hiragana.ma,
            hiragana.su
        ],
        "kachimasu",
        ["to win"]
    ),
    new Phrase(
        [new Kanji("負", [hiragana.ma]), hiragana.ke, hiragana.ma, hiragana.su],
        "makemasu",
        ["to lose (a game)"]
    ),
    new Phrase(
        [
            new Kanji("曲", [hiragana.ma]),
            hiragana.ga,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "magarimasu",
        ["to turn", "curve"]
    ),
    new Phrase(
        [
            new Kanji("止", [hiragana.to]),
            hiragana.ma,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "tomarimasu",
        ["to stop", "stay (the night)", "lodge"]
    ),
    new Phrase(
        [new Kanji("乗", [hiragana.no]), hiragana.ri, hiragana.ma, hiragana.su],
        "norimasu",
        ["to get on", "ride"]
    ),
    new Phrase(
        [new Kanji("降", [hiragana.o]), hiragana.ri, hiragana.ma, hiragana.su],
        "orimasu",
        ["to get off"]
    ),
    new Phrase(
        [
            new Kanji("座", [hiragana.su, hiragana.wa]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "suwarimasu",
        ["to sit down"]
    ),
    new Phrase(
        [
            new Kanji("洗", [hiragana.a, hiragana.ra]),
            hiragana.i,
            hiragana.ma,
            hiragana.su
        ],
        "araimasu",
        ["to wash"]
    ),
    new Phrase(
        [new Kanji("焼", [hiragana.ya]), hiragana.ki, hiragana.ma, hiragana.su],
        "yakimasu",
        ["to grill", "bake", "roast", "toast"]
    ),
    new Phrase(
        [
            new Kanji("遊", [hiragana.a, hiragana.so]),
            hiragana.bi,
            hiragana.ma,
            hiragana.su
        ],
        "asobimasu",
        ["to play"]
    ),
    new Phrase(
        [new Kanji("切", [hiragana.ki]), hiragana.ri, hiragana.ma, hiragana.su],
        "kirimasu",
        ["to cut"]
    ),
    new Phrase(
        [new Kanji("脱", [hiragana.nu]), hiragana.gi, hiragana.ma, hiragana.su],
        "nugimasu",
        ["to take off (shoes", "clothes)"]
    ),
    new Phrase(
        [new Kanji("来", [hiragana.ki]), hiragana.ma, hiragana.su],
        "kimasu",
        ["to come"]
    ),
    new Phrase(
        [new Kanji("取", [hiragana.to]), hiragana.ri, hiragana.ma, hiragana.su],
        "torimasu",
        ["to take", "get", "take (picture)"]
    ),
    new Phrase([hiragana.shi, hiragana.ma, hiragana.su], "shimasu", [
        "to do",
        "play (something)"
    ]),
    new Phrase(
        [
            new Kanji("送", [hiragana.o, hiragana.ku]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "okurimasu",
        ["to send"]
    ),
    new Phrase(
        [new Kanji("読", [hiragana.yo]), hiragana.mi, hiragana.ma, hiragana.su],
        "yomimasu",
        ["to read"]
    ),
    new Phrase(
        [new Kanji("会", [hiragana.a, hiragana.i]), hiragana.ma, hiragana.su],
        "aimasu",
        ["to meet"]
    ),
    new Phrase(
        [
            new Kanji("返", [hiragana.ka, hiragana.e]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "kaeshimasu",
        ["to return (something)"]
    ),
    new Phrase(
        [
            new Kanji("消", [hiragana.ke]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "keshimasu",
        ["to erase", "to turn off (power)"]
    ),
    new Phrase(
        [
            new Kanji("登", [hiragana.no, hiragana.bo]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "noborimasu",
        ["to climb"]
    ),
    new Phrase(
        [
            new Kanji("勉強", [
                hiragana.be,
                hiragana.n,
                hiragana.kyo,
                hiragana.u
            ]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "benkyou shimasu",
        ["to study"]
    ),
    new Phrase(
        [
            new Kanji("締", [hiragana.shi]),
            hiragana.me,
            hiragana.ma,
            hiragana.su
        ],
        "shimemasu",
        ["to tie"]
    ),
    new Phrase(
        [new Kanji("着", [hiragana.ki]), hiragana.ma, hiragana.su],
        "kimasu",
        ["to wear"]
    ),
    new Phrase(
        [
            new Kanji("待", [hiragana.ma]),
            hiragana.chi,
            hiragana.ma,
            hiragana.su
        ],
        "machimasu",
        ["to wait"]
    ),
    new Phrase(
        [
            new Kanji("分", [hiragana.wa]),
            hiragana.ka,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "wakarimasu",
        ["to understand"]
    ),
    new Phrase(
        [
            new Kanji("泳", [hiragana.o, hiragana.yo]),
            hiragana.gi,
            hiragana.ma,
            hiragana.su
        ],
        "oyogimasu",
        ["to swim"]
    ),
    new Phrase(
        [
            new Kanji("出", [hiragana.de]),
            hiragana.ka,
            hiragana.ke,
            hiragana.ma,
            hiragana.su
        ],
        "dekakemasu",
        ["to leave"]
    ),
    new Phrase(
        [
            new Kanji("急", [hiragana.i, hiragana.so]),
            hiragana.gi,
            hiragana.ma,
            hiragana.su
        ],
        "isogimasu",
        ["to hurry"]
    ),
    new Phrase(
        [
            new Kanji("立", [hiragana.ta]),
            hiragana.chi,
            hiragana.ma,
            hiragana.su
        ],
        "tachimasu",
        ["to stand up"]
    ),
    new Phrase(
        [
            new Kanji("使", [hiragana.tsu, hiragana.ka]),
            hiragana.i,
            hiragana.ma,
            hiragana.su
        ],
        "tsukaimasu",
        ["to use"]
    ),
    new Phrase(
        [new Kanji("降", [hiragana.o]), hiragana.ri, hiragana.ma, hiragana.su],
        "orimasu",
        ["to get off"]
    ),
    new Phrase(
        [
            new Kanji("終", [hiragana.o]),
            hiragana.wa,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "owarimasu",
        ["to end"]
    ),
    new Phrase(
        [new Kanji("飽", [hiragana.a]), hiragana.ki, hiragana.ma, hiragana.su],
        "akimasu",
        ["to lose interest in"]
    ),
    new Phrase(
        [new Kanji("浴", [hiragana.a]), hiragana.bi, hiragana.ma, hiragana.su],
        "abimasu",
        ["to take a shower"]
    ),
    new Phrase(
        [new Kanji("言", [hiragana.i]), hiragana.i, hiragana.ma, hiragana.su],
        "iimasu",
        ["to say", "tell"]
    ),
    new Phrase(
        [new Kanji("入", [hiragana.i]), hiragana.re, hiragana.ma, hiragana.su],
        "iremasu",
        [" to insert", "put in"]
    ),
    new Phrase(
        [new Kanji("借", [hiragana.ka]), hiragana.ri, hiragana.ma, hiragana.su],
        "karimasu",
        ["to borrow"]
    ),
    new Phrase(
        [new Kanji("消", [hiragana.ki]), hiragana.e, hiragana.ma, hiragana.su],
        "kiemasu",
        ["to go out", "vanish"]
    ),
    new Phrase(
        [new Kanji("切", [hiragana.ki]), hiragana.ri, hiragana.ma, hiragana.su],
        "kirimasu",
        ["to cut"]
    ),
    new Phrase(
        [new Kanji("着", [hiragana.ki]), hiragana.ri, hiragana.ma, hiragana.su],
        "kirimasu",
        ["to wear", "put on"]
    ),
    new Phrase(
        [
            new Kanji("答", [hiragana.ko, hiragana.ta]),
            hiragana.e,
            hiragana.ma,
            hiragana.su
        ],
        "kotaemasu",
        ["to answer"]
    ),
    new Phrase(
        [
            new Kanji("困", [hiragana.ko, hiragana.ma]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "komarimasu",
        ["to be in trouble"]
    ),
    new Phrase(
        [
            new Kanji("死", [hiragana.shi]),
            hiragana.ni,
            hiragana.ma,
            hiragana.su
        ],
        "shinimasu",
        ["to die"]
    ),
    new Phrase(
        [
            new Kanji("知", [hiragana.shi]),
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "shirimasu",
        ["to know"]
    ),
    new Phrase(
        [
            new Kanji("閉", [hiragana.shi]),
            hiragana.me,
            hiragana.ma,
            hiragana.su
        ],
        "shimemasu",
        ["to close", "shut"]
    ),
    new Phrase(
        [new Kanji("吸", [hiragana.su]), hiragana.i, hiragana.ma, hiragana.su],
        "suimasu",
        ["to breathe", "smoke"]
    ),
    new Phrase(
        [new Kanji("住", [hiragana.su]), hiragana.mi, hiragana.ma, hiragana.su],
        "sumimasu",
        ["to live", "reside somewhere"]
    ),
    new Phrase(
        [
            new Kanji("出", [hiragana.da]),
            hiragana.shi,
            hiragana.ma,
            hiragana.su
        ],
        "dashimasu",
        ["to take out", "hand in"]
    ),
    new Phrase(
        [
            new Kanji("頼", [hiragana.ta, hiragana.no]),
            hiragana.mi,
            hiragana.ma,
            hiragana.su
        ],
        "tanomimasu",
        ["to ask", "request"]
    ),
    new Phrase(
        [
            new Kanji("違", [hiragana.chi, hiragana.ga]),
            hiragana.i,
            hiragana.ma,
            hiragana.su
        ],
        "chigaimasu",
        ["to be different"]
    ),
    new Phrase(
        [
            new Kanji("疲", [hiragana.tsu, hiragana.ka]),
            hiragana.re,
            hiragana.ma,
            hiragana.su
        ],
        "tsukaremasu",
        ["to get tired"]
    ),
    new Phrase(
        [
            new Kanji("着", [hiragana.tsu]),
            hiragana.ki,
            hiragana.ma,
            hiragana.su
        ],
        "tsukimasu",
        ["to arrive"]
    ),
    new Phrase(
        [
            new Kanji("点", [hiragana.tsu]),
            hiragana.ke,
            hiragana.ma,
            hiragana.su
        ],
        "tsukemasu",
        ["to turn on"]
    ),
    new Phrase(
        [
            new Kanji("勤", [hiragana.tsu, hiragana.to]),
            hiragana.me,
            hiragana.ma,
            hiragana.su
        ],
        "tsutomemasu",
        ["to work for someone"]
    ),
    new Phrase(
        [
            new Kanji("出来", [hiragana.de, hiragana.ki]),
            hiragana.ma,
            hiragana.su
        ],
        "dekimasu",
        ["can do"]
    ),
    new Phrase(
        [new Kanji("飛", [hiragana.to]), hiragana.bi, hiragana.ma, hiragana.su],
        "tobimasu",
        ["to fly"]
    ),
    new Phrase(
        [new Kanji("履", [hiragana.ha]), hiragana.ki, hiragana.ma, hiragana.su],
        "hakimasu",
        ["to put on shoes"]
    ),
    new Phrase(
        [
            new Kanji("働", [hiragana.ha, hiragana.ta, hiragana.ra]),
            hiragana.ki,
            hiragana.ma,
            hiragana.su
        ],
        "hatarakimasu",
        ["to work"]
    ),
    new Phrase(
        [new Kanji("引", [hiragana.hi]), hiragana.ki, hiragana.ma, hiragana.su],
        "hikimasu",
        ["to pull"]
    ),
    new Phrase(
        [
            new Kanji("曲", [hiragana.ma]),
            hiragana.ga,
            hiragana.ri,
            hiragana.ma,
            hiragana.su
        ],
        "magarimasu",
        ["to turn"]
    ),
    new Phrase(
        [new Kanji("呼", [hiragana.yo]), hiragana.bi, hiragana.ma, hiragana.su],
        "yobimasu",
        ["to call"]
    )
];

export const commonVerbsTable = new PhraseTable(commonVerbs);
