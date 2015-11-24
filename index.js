"use strict";

const mc = module.exports; 

const isLetter = x => x.match(/\w/);

/**
    Perform a direct, character to character case mapping.
    
    @param from Word with target case.
    @param to Targeted word.
*/
mc.direct = (from, to) => {
    const fromChars = from.split('');
    const toChars = to.split('');
    
    const fromLen = from.length;
    const toLen = to.length;
    for (let i = 0; i < fromLen && i < toLen; ++i) {
        const c = fromChars[i];
        const upper = c.toUpperCase();
        const lower = c.toLowerCase();
        if (upper === lower) 
            continue; // not a letter
        else if (c === c.toUpperCase())
            toChars[i] = toChars[i].toUpperCase();
        else if (c === c.toLowerCase())
            toChars[i] = toChars[i].toLowerCase();
    }
    return toChars.join('');
};
     