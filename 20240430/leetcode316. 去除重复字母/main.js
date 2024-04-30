/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-30 11:10:18                                                  *
 * @LastModifiedDate: 2024-04-30 15:22:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的
// 字典序
// 最小（要求不能打乱其他字符的相对位置）。

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueueFront(val) {
    this.items[this.lowest--] = val;
  }
  enqueueBack(val) {
    this.items[this.highest++] = val;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 记录每个字符的索引位置
  const alpha = new Array(26).fill(0).map(() => new Dqueue());
  const aCode = "a".charCodeAt();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    alpha[s[i].charCodeAt() - aCode].enqueueBack(i);
  }
  let len = alpha.reduce((pre, cur) => pre + (!cur.isEmpty() ? 1 : 0), 0);
  let ans = "";
  const check = (i) => {
    const select = alpha[i].peekFront();
    for (let j = 0; j < 26; j++) {
      const cur = alpha[j];
      if (j !== i && !cur.isEmpty()) {
        if (cur.peekBack() < select) return false;
      }
    }
    for (let j = 0; j < 26; j++) {
      const cur = alpha[j];
      if (j !== i && !cur.isEmpty()) {
        while (!cur.isEmpty() && cur.peekFront() <= select) cur.dequeueFront();
      }
    }
    return true;
  };
  while (len) {
    // 选择其中一个字典序最大，且后续都有索引的
    for (let i = 0; i < 26; i++) {
      if (!alpha[i].isEmpty()) {
        // 可以选择String.charCodeAt(i)
        if (check(i)) {
          ans += String.fromCharCode(i + aCode);
          alpha[i] = new Dqueue();
          break;
        }
      }
    }
    len--;
  }
  return ans;
};
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 贪心：因为每个字符只能保存一个，所以最终构成的字符串越向
  // abcdefghijklmnopqrstuvwxyz  靠拢越好
  // 如果s[i] > s[i+1]，例如s[i]是b，s[i+1]是a就需要去除s[i]，保留s[i+1]
  // 我们称满足s[i] > s[i+1]的最小下标i所代表的字符s[i]为【关键字符】
  // 贪心的删除所有关键字符，可以使用单调栈弹出关键字符
  // 但是在使用单调栈弹出关键字符的同时，需要考虑以下两点：
  // 1. 如果字符s[i]已经存在于栈中，就不能加入字符s[i]（使用visited记录）
  // 2. 在弹出关键字符时，如果这个关键字符剩下的字符数量为0，就不能弹出栈顶字符
  const alpha = new Array(26).fill(0); // 统计各个字符数量
  const aCode = "a".charCodeAt();
  const stack = [];
  for (const ch of s) alpha[ch.charCodeAt() - aCode]++;
  const visited = new Array(26).fill(false);
  for (const ch of s) {
    const chCode = ch.charCodeAt() - aCode;
    if (visited[chCode]) {
      alpha[chCode]--;
      continue;
    } else {
      visited[chCode] = true;
      while (stack.length && stack[stack.length - 1] >= ch) {
        const top = stack.pop();
        const topCode = top.charCodeAt() - aCode;
        visited[topCode] = false;
        // 需要判断出栈元素是否仅剩这一个
        if (alpha[topCode] === 0) {
          visited[topCode] = true;
          stack.push(top);
          break;
        }
      }
      stack.push(ch);
      alpha[chCode]--;
    }
  }
  return stack.join("");
};
