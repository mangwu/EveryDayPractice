/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-13 08:56:01                                                  *
 * @LastModifiedDate: 2023-02-13 09:43:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。

// 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。

//

// 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。

// 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。

// 请返回待替换子串的最小可能长度。

// 如果原字符串自身就是一个平衡字符串，则返回 0。

class Queue {
  constructor() {
    this.count = 0; // 队列长度
    this.lowestCount = 0; // 追踪第一个元素
    this.items = {};
  }
  enqueue(...eles) {
    // 入队
    for (const ele of eles) {
      this.items[this.count + this.lowestCount] = ele;
      this.count++;
    }
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  dequeue() {
    // 出队
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    this.count--;
    return res;
  }
  peek() {
    // 队首元素
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let str = `${this.peek()}`;
    for (let i = 1; i < this.count; i++) {
      str += `,${this.items[this.lowestCount + i]}`;
    }
    return str;
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  // 计算s中QWER的字符个数
  const obj = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  };
  for (const ch of s) {
    obj[ch]++;
  }
  if (obj.Q === obj.W && obj.W === obj.E && obj.E === obj.R) return 0;
  let averge = s.length / 4; // 每个字符平均需要的数量
  // 检查哪些字符超过了，需要进行截取
  const hash = new Map();
  const template = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  };
  if (obj.Q > averge) {
    hash.set("Q", obj.Q - averge);
  }
  if (obj.W > averge) {
    hash.set("W", obj.W - averge);
  }
  if (obj.E > averge) {
    hash.set("E", obj.E - averge);
  }
  if (obj.R > averge) {
    hash.set("R", obj.R - averge);
  }
  // 滑动窗口
  // const q = new Queue();
  let left = 0;
  let right = 0;
  const n = s.length;
  let res = Infinity;
  while (right < n) {
    while (!isSatisfyTheCondition(hash, template) && right < n) {
      template[s[right++]]++;
    }
    // 满足条件，将左边的移除
    res = Math.min(res, right - left);
    while (isSatisfyTheCondition(hash, template) && left < n) {
      template[s[left++]]--;
    }
    res = Math.min(res, right - left + 1);
  }
};

var isSatisfyTheCondition = function (hash, template) {
  for (const [key, value] of hash) {
    if (template[key] < value) return false;
  }
  return true;
};
