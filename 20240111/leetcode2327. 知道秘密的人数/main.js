/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-11 16:47:28                                                  *
 * @LastModifiedDate: 2024-01-12 14:09:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在第 1 天，有一个人发现了一个秘密。

// 给你一个整数 delay ，表示每个人会在发现秘密后的 delay 天之后，每天 给一个新的人 分享 秘密。同时给你一个整数 forget ，表示每个人在发现秘密 forget 天之后会 忘记 这个秘密。一个人 不能 在忘记秘密那一天及之后的日子里分享秘密。

// 给你一个整数 n ，请你返回在第 n 天结束时，知道秘密的人数。由于答案可能会很大，请你将结果对 109 + 7 取余 后返回

class Q {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowest = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest];
  }
  enqueue(value) {
    if (value == null) return false;
    this.items[this.lowest + this.count++] = value;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const res = this.items[this.lowest++];
    this.count--;
    delete this.items[this.lowest - 1];
    return res;
  }
}
const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  // 如果forget只比delay大1，那么只能传递给一个人
  if (delay + 1 === forget) {
    // 检查n是否是在传递的那一天
    if (n - 1 > 0 && (n - 1) % delay === 0) return 2;
    return 1;
  }
  const q1 = new Q(); // 记录依次忘记的数量
  for (let i = 1; i <= forget; i++) {
    // 需要forget天才会有人开始忘记
    q1.enqueue(0);
  }
  q1.enqueue(1);
  const q2 = new Q(); // 记录依次开始分享的数量
  for (let i = 1; i <= delay; i++) {
    // 需要delay天才会有人开始传递秘密
    q2.enqueue(0);
  }
  q2.enqueue(1);
  let ans = 1; // 当前知道秘密的人数
  let cur = 0; // 当前能传递秘密的人数
  for (let i = 1; i <= n; i++) {
    // 当前天有多少人会忘记秘密
    const forgetNum = q1.dequeue();
    console.log(`----------第${i}天start----------`);
    console.log(`忘记秘密的人数：${forgetNum}`);
    ans -= forgetNum;
    cur -= forgetNum;
    // 当前天有多少人会开始传递秘密
    const startNum = q2.dequeue();
    console.log(`新增传递秘密的人数：${startNum}`);
    cur += startNum;
    console.log(`当前开始传递秘密的人数：${cur}`);
    // 当前可以传递的人进行秘密传递
    q1.enqueue(cur);
    q2.enqueue(cur);
    ans += cur;
    console.log(`当前知道秘密的人数：${ans}`);
    console.log(q1.items);
    console.log(q2.items);
    console.log(`----------第${i}天end----------`);
  }
  return ans;
};
// peopleAwareOfSecret(10, 3, 6);

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  // 如果forget只比delay大1，那么一次只能传递给一个人
  if (delay + 1 === forget) {
    // 检查n是否是在传递的那一天
    if (n - 1 > 0 && (n - 1) % delay === 0) return 2;
    return 1;
  }
  const q1 = new Q(); // 记录依次忘记的数量
  q1.enqueue([forget + 1, 1]); // 在forget+1这一天忘记
  const q2 = new Q(); // 记录依次开始分享的数量
  q2.enqueue([delay + 1, 1]); // 在delay+1这一天开始传递秘密
  let ans = 1; // 当前知道秘密的人数
  let cur = 0; // 当前能传递秘密的人数
  for (let i = 1; i <= n; i++) {
    // 当前天有多少人会忘记秘密
    let forgetNum = 0;
    if (q1.peek() && q1.peek()[0] === i) forgetNum = q1.dequeue()[1];
    ans = (ans + MOD - forgetNum) % MOD;
    cur = (cur + MOD - forgetNum) % MOD;
    // 当前开始传递秘密的人
    let startNum = 0;
    if (q2.peek()[0] && q2.peek()[0] === i) startNum = q2.dequeue()[1];
    cur = (cur + startNum) % MOD;
    ans = (ans + cur) % MOD;
    if (cur > 0) {
      q2.enqueue([i + delay, cur]); // 这些人在第i+delay天开始传递秘密
      q1.enqueue([i + forget, cur]); // 这些人在第i+forget天忘记秘密
    }
  }
  return ans;
};
peopleAwareOfSecret(10, 3, 6);
