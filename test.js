var assert = require('assert');

describe('My Feature', function(){
    it('works',function(){
        assert.equal('A', 'A');
    });
    it('fails gracefully', function(){
        assert.equal('A', 'A');
    });
});

describe('My Other Feature', function () {
    it('might work', function () {});
});