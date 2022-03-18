/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-18 18:14:46                                                  *
 * @LastModifiedDate: 2022-03-18 18:34:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你的任务是为一个很受欢迎的银行设计一款程序，以自动化执行所有传入的交易（转账，存款和取款）。
// 银行共有 n 个账户，编号从 1 到 n 。每个账号的初始余额存储在一个下标从 0 开始的整数数组 balance 中，
// 其中第 (i + 1) 个账户的初始余额是 balance[i] 。

// 请你执行所有 有效的 交易。如果满足下面全部条件，则交易 有效 ：

// 指定的账户数量在 1 和 n 之间，且
// 取款或者转账需要的钱的总数 小于或者等于 账户余额。
// 实现 Bank 类：

// Bank(long[] balance) 使用下标从 0 开始的整数数组 balance 初始化该对象。
// boolean transfer(int account1, int account2, long money) 从编号为 account1 的账户向编号为 account2 的账户转帐 money 美元。
// 如果交易成功，返回 true ，否则，返回 false 。
// boolean deposit(int account, long money) 向编号为 account 的账户存款 money 美元。
// 如果交易成功，返回 true ；否则，返回 false 。
// boolean withdraw(int account, long money) 从编号为 account 的账户取款 money 美元。
// 如果交易成功，返回 true ；否则，返回 false 。

/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.balance = balance;
  this.size = balance.length;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  // 取ac1 的钱到ac2(不考虑值相同账号情况)
  if (
    account1 <= this.size &&
    account1 >= 1 &&
    account2 <= this.size &&
    account2 >= 1 &&
    this.balance[account1 - 1] >= money
  ) {
    // 符合条件
    this.balance[account1 - 1] -= money;
    this.balance[account2 - 1] += money;
    return true;
  } else {
    return false;
  }
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  // 存款
  if (account <= this.size && account >= 1) {
    this.balance[account - 1] += money;
    return true;
  }
  return false;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  // 取款
  if (
    account <= this.size &&
    account >= 1 &&
    this.balance[account - 1] >= money
  ) {
    this.balance[account - 1] -= money;
    return true;
  }
  return false;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
