"use strict";

const mc = module.exports; 


const direct = (merge, from, to) => {
    const fromChars = from.split('');
    const toChars = to.split('');
    
    const fromLen = from.length;
    const toLen = to.length;
    for (let i = 0; i < fromLen && i < toLen; ++i) {
        const c = fromChars[i];
        toChars[i] = merge(c, c.toUpperCase(), c.toLowerCase(), toChars[i]);
    }
    return toChars.join('');
};

/**
    Exact character to character case mapping.
    
    @param from Word with target case.
    @param to Targeted word.
*/
mc.direct = direct.bind(null, (c, upper, lower, to) => {
    if (upper !== lower) {
        if (c === upper)
            return to.toUpperCase();
        else if (c === lower)
            return to.toLowerCase();
    }
    return to;
});

/**
    Character to character case mapping, but only make letters uppercase.
    
    @param from Word with target case.
    @param to Targeted word.
*/
mc.upper = direct.bind(null, (c, upper, lower, to) =>
    upper !== lower && c === upper ? to.toUpperCase() : to);

/**
    Character to character case mapping, but only make letters lowercase.
    
    @param from Word with target case.
    @param to Targeted word.
*/
mc.lower = direct.bind(null, (c, upper, lower, to) =>
    upper !== lower && c === lower ? to.toLowerCase() : to);
