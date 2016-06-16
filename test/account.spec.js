const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('should construct a new Account object', () => {
      const a1 = new Account('Sara');
      expect(a1).to.be.instanceof(Account);
      expect(a1.number).to.be.length(36);
      expect(a1.name).to.equal('Sara');
      expect(a1.balance).to.equal(0);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });

  describe('#deposit', () => {
    it('should deposits money into account', () => {
      const a1 = new Account('Sara');
      const bal = a1.deposit(50);
      expect(bal).to.equal(50);
      expect(a1.balance).to.equal(50);
      expect(a1.deposits).to.be.length(1);
    });
  });

  describe('#withdraw', () => {
    it('should successfully withdraws from account', () => {
      const a1 = new Account('Sara');
      a1.deposit(50);
      const bal = a1.withdraw(25);
      expect(bal).to.equal(25);
      expect(a1.balance).to.equal(25);
      expect(a1.withdraws).to.be.length(1);
    });
    it('should not successfully withdraws from account', () => {
      const a1 = new Account('Sara');
      a1.deposit(50);
      const bal = a1.withdraw(100);
      expect(bal).to.equal(50);
      expect(a1.balance).to.equal(50);
      expect(a1.withdraws).to.be.length(0);
    });
  });
});
