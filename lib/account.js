/* eslint-disable func-names */

const uuid = require('uuid');

function Account(name) {
  this.name = name;
  this.number = uuid.v1();
  this.balance = 0;
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.deposit = function (amt) {
  this.balance += amt;
  this.deposits.push(amt);
  return this.balance;
};

Account.prototype.withdraw = function (amt) {
  if (amt > this.balance) return this.balance;

  this.balance -= amt;
  this.withdraws.push(amt);
  return this.balance;
};

module.exports = Account;
