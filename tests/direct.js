"use strict";
const mapCase = require('../index');
const assert = require('assert');

describe('direct', () => {
    it('Should noop when from string is empty', () => {
        assert.strictEqual('', mapCase.direct('', ''));
        assert.strictEqual('a', mapCase.direct('a', 'a'));
        assert.strictEqual('AbCd', mapCase.direct('', 'AbCd'));
    });

    it('Should transform letters to case for same length strings', () => {
        assert.strictEqual('BB', mapCase.direct('AA', 'bb'));
        assert.strictEqual('BbBbbBb', mapCase.direct('AaAaaAa', 'bbBBBBB'));
    });
    
    it('Should ignore non-letters in target string', () => {
        assert.strictEqual('1B', mapCase.direct('AA', '1b'));
        assert.strictEqual('BbBbbBb', mapCase.direct('AaAaaAa', 'bbBBBBB'));
    });
    
     it('Should ignore non-letters in from string', () => {
        assert.strictEqual('bB', mapCase.direct('1A', 'bb'));
        assert.strictEqual('bB', mapCase.direct('1A', 'Bb'));
    });
});
