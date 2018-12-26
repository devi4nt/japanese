import { Phrase } from "../classes/Phrase";
import { PhraseTable } from "../classes/PhraseTable";
import { hiragana } from "./hiragana";

// phrases
const yes = new Phrase([hiragana.ha, hiragana.i], undefined, [
    "yes",
    "right",
    "ok"
]);
const no = new Phrase([hiragana.i, hiragana.i, hiragana.e], undefined, ["no"]);

const excuseMe = new Phrase(
    [hiragana.su, hiragana.me, hiragana.ma, hiragana.se, hiragana.n],
    undefined,
    ["excuse me"]
);

const sorry = new Phrase(
    [
        hiragana.go,
        hiragana.me,
        hiragana.n,
        hiragana.na,
        hiragana.sa,
        hiragana.i
    ],
    "gomen'nasai",
    ["sorry"]
);

const please = new Phrase(
    [
        hiragana.o,
        hiragana.ne,
        hiragana.ga,
        hiragana.shi,
        hiragana.ma,
        hiragana.su
    ],
    undefined,
    ["please"]
);

const goAhead = new Phrase([hiragana.do, hiragana.zo], undefined, [
    "go ahead",
    "after you"
]);

const thanks = new Phrase([hiragana.do, hiragana.mo], undefined, ["thanks"]);

const thankYou = new Phrase(
    [hiragana.a, hiragana.ri, hiragana.ga, hiragana.to, hiragana.u],
    "arigatō",
    ["thank you"]
);

const thankYouVeryMuch = new Phrase(
    [
        hiragana.do,
        hiragana.mo,
        hiragana.a,
        hiragana.ri,
        hiragana.ga,
        hiragana.to,
        hiragana.u
    ],
    "domo arigatō",
    ["thank you very much"]
);

export const phrases: Phrase[] = [
    yes,
    no,
    excuseMe,
    sorry,
    please,
    goAhead,
    thanks,
    thankYou,
    thankYouVeryMuch
];

export const phrasesTable = new PhraseTable(phrases);
