var chai = require("chai"),
    expect = chai.expect,
    validator = require('../lib/validator');

describe('A Validator', function() {
    it('will return no errors for valid numbers', function() {
        expect(validator(3)).to.be.empty;
    });

    it('will return error.nonpositive for not strictly positive numbers, like 0', function() {
        expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
    });

    it('will return error.nonpositive for not strictly positive numbers, like -2', function() {
        expect(validator(-2)).to.be.deep.equal(['error.nonpositive']);
    });
});