"use strict";
const mapCase = require('../index');
const assert = require('assert');

describe('direct', () => {
    it('Should noop when from string is empty', () => {
        assert.strictEqual('', mapCase.map('', ''));
        assert.strictEqual('a', mapCase.map('a', 'a'));
        assert.strictEqual('AbCd', mapCase.map('', 'AbCd'));
    });

    it('Should transform letters to case for same length strings', () => {
        assert.strictEqual('BB', mapCase.map('AA', 'bb'));
        assert.strictEqual('BbBbbBb', mapCase.map('AaAaaAa', 'bbBBBBB'));
    });
    
    it('Should ignore non-letters in target string', () => {
        assert.strictEqual('1B', mapCase.map('AA', '1b'));
    });
    
    it('Should ignore non-letters in from string', () => {
        assert.strictEqual('bB', mapCase.map('1A', 'bb'));
        assert.strictEqual('BB', mapCase.map('1A', 'Bb'));
    });
    
    it('Should only transform letters within size of from string', () => {
        assert.strictEqual('BbBbb', mapCase.map('AaA', 'bbbbb'));
    });
    
    it('Should stop early if targe string is too short', () => {
        assert.strictEqual('', mapCase.map('AaA', ''));
        assert.strictEqual('A', mapCase.map('AaA', 'a'));
        assert.strictEqual('Aa', mapCase.map('AaA', 'aa'));
    });
});
