import { Hiragana } from '../classes/Hiragana';
import { Katakana } from '../classes/Katakana';

export interface IRomanji {
    // vowels
    a: string;
    i: string;
    u: string;
    e: string;
    o: string;
    // consonants
    ka: string;
    ki: string;
    ku: string;
    ke: string;
    ko: string;
    sa: string;
    shi: string;
    su: string;
    se: string;
    so: string;
    ta: string;
    chi: string;
    tsu: string;
    te: string;
    to: string;
    na: string;
    ni: string;
    nu: string;
    ne: string;
    no: string;
    ha: string;
    hi: string;
    fu: string;
    he: string;
    ho: string;
    ma: string;
    mi: string;
    mu: string;
    me: string;
    mo: string;
    ya: string;
    yu: string;
    yo: string;
    ra: string;
    ri: string;
    ru: string;
    re: string;
    ro: string;
    wa: string;
    wo: string;
    n: string;
    // dakuten
    ga: string;
    gi: string;
    gu: string;
    ge: string;
    go: string;
    za: string;
    ze: string;
    zo: string;
    da: string;
    ji: string; // 2 variations of this character, one romanji :(
    zu: string; // ...
    dji: string; // ...
    dzu: string; // ...
    de: string;
    do: string;
    ba: string;
    bi: string;
    bu: string;
    be: string;
    bo: string;
    // han-dokuon
    pa: string;
    pi: string;
    pu: string;
    pe: string;
    po: string;
    // yōon
    kya: string;
    kyu: string;
    kyo: string;
    sha: string;
    shu: string;
    sho: string;
    cha: string;
    chu: string;
    cho: string;
    nya: string;
    nyu: string;
    nyo: string;
    hya: string;
    hyu: string;
    hyo: string;
    mya: string;
    myu: string;
    myo: string;
    rya: string;
    ryu: string;
    ryo: string;
    // yōon with (han)dakuten
    gya: string;
    gyu: string;
    gyo: string;
    ja: string;
    ju: string;
    jo: string;
    bya: string;
    byu: string;
    byo: string;
    pya: string;
    pyu: string;
    pyo: string;
    // sokuon
    sokuon: string;
}

type IRomanjiKeys = keyof IRomanji;
export type RomanjiKeys = { [key in IRomanjiKeys]: Hiragana | Katakana };
