const uuid = require('uuid');

function Account(name, balance){
  this.name = name;
  this.number = uuid.v1();
  this.balance = balance;
  this.deposits = [];
  this.withdraws = [];
}

module.exports = Account;
