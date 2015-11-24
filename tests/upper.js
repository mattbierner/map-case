"use strict";
const mapCase = require('../index');
const assert = require('assert');

describe('upper', () => {
    it('Should noop when from string is empty', () => {
        assert.strictEqual('', mapCase.upper('', ''));
        assert.strictEqual('a', mapCase.upper('a', 'a'));
        assert.strictEqual('AbCd', mapCase.upper('', 'AbCd'));
    });

    it('Should make strings uppercase', () => {
        assert.strictEqual('BB', mapCase.upper('AA', 'bb'));
        assert.strictEqual('BbBbB', mapCase.upper('AaAaA', 'bbbbb'));
        assert.strictEqual('BBBBB', mapCase.upper('AaAaA', 'bBbBb'));
        assert.strictEqual('BBBBB', mapCase.upper('AaAaA', 'BBBBB'));
    });

});
