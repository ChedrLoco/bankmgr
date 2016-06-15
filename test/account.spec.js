const expect = require('chai').expect;

describe('Account', function(){
  describe('constructor', function(){
    it('constructs a new Account object', function(){
      const a1 = new Account('sara', 500);
      expect(a1).to.be.instanceof(Account);
    });
  });
});
