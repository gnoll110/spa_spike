/*jshint -W030 */
var should = require('chai').should(),
    benv = require('benv'),
    _ = require('underscore'),
    puzzle = require('../js/puzzle');

describe('Puzzle', function() {

    var puzzle = new Puzzle();

    it('#init', function() {
        should.exist(puzzle.init);
    });

});