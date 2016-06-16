const expect = require('chai').expect;
const Account = require('../lib/account');
const Bank = require('../lib/bank');

describe('Bank', () => {
  describe('constructor', () => {
    it('should construct a new Bank object', () => {
      const b1 = new Bank('BoA');
      expect(b1).to.be.instanceof(Bank);
      expect(b1.name).to.equal('BoA');
      expect(b1.accounts).to.be.length(0);
    });
  });

  describe('#addAccount', () => {
    it('should add an account to the bank', () => {
      const b1 = new Bank('BoA');
      const a1 = new Account('Sara');
      b1.addAccount(a1);
      expect(b1.accounts).to.have.length(1);
    });
  });

  describe('#getValue', () => {
    it('should get the value of the bank', () => {
      const b1 = new Bank('BoA');
      const a1 = new Account('Sara');
      const a2 = new Account('Sara');
      b1.addAccount(a1);
      b1.addAccount(a2);

      a1.deposit(50);
      a2.deposit(25);

      expect(b1.getValue()).to.equal(75);
    });
  });
});
