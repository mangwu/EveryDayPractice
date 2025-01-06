// 一个 ATM 机器，存有 5 种面值的钞票：20 ，50 ，100 ，200 和 500 美元。初始时，ATM 机是空的。用户可以用它存或者取任意数目的钱。

// 取款时，机器会优先取 较大 数额的钱。

// 比方说，你想取 $300 ，并且机器里有 2 张 $50 的钞票，1 张 $100 的钞票和1 张 $200 的钞票，那么机器会取出 $100 和 $200 的钞票。
// 但是，如果你想取 $600 ，机器里有 3 张 $200 的钞票和1 张 $500 的钞票，那么取款请求会被拒绝，因为机器会先取出 $500 的钞票，然后无法取出剩余的 $100 。注意，因为有 $500 钞票的存在，机器 不能 取 $200 的钞票。
// 请你实现 ATM 类：

// ATM() 初始化 ATM 对象。
// void deposit(int[] banknotesCount) 分别存入 $20 ，$50，$100，$200 和 $500 钞票的数目。
// int[] withdraw(int amount) 返回一个长度为 5 的数组，分别表示 $20 ，$50，$100 ，$200 和 $500 钞票的数目，并且更新 ATM 机里取款后钞票的剩余数量。如果无法取出指定数额的钱，请返回 [-1] （这种情况下 不 取出任何钞票）。

var ATM = function () {
  // 20 50 100 200 500
  this.money = new Array(5).fill(0);
  this.moneyNum = [20, 50, 100, 200, 500];
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
  for (let i = 0; i < 5; i++) {
    this.money[i] += banknotesCount[i];
  }
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {
  const res = new Array(5).fill(0);
  for (let i = 4; i >= 0; i--) {
    if (amount >= this.moneyNum[i]) {
      const num = Math.min(
        this.money[i],
        Math.floor(amount / this.moneyNum[i])
      );
      amount -= num * this.moneyNum[i];
      res[i] = num;
    }
  }
  if (amount !== 0) return [-1];
  for (let i = 0; i < 5; i++) {
    this.money[i] -= res[i];
  }
  return res;
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
