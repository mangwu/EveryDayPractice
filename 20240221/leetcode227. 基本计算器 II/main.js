/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-21 16:00:16                                                  *
 * @LastModifiedDate: 2024-02-21 17:42:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

// 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。
class Stack {
  #items = [];
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(val) {
    this.#items.push(val);
  }
  pop() {
    return this.#items.pop();
  }
  peek() {
    return this.#items[this.size() - 1];
  }
  itemOf(idx) {
    if (idx < 0 || idx >= this.size()) return undefined;
    return this.#items[idx];
  }
  [Symbol.iterator]() {
    const items = this.#items;
    return (function* () {
      for (const item of items) yield item;
    })();
  }
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 注意本题没有括号，所以需要考虑的优先级问题只有* /高于 + -
  // 去除空格,
  const strArr = s.split("").filter((v) => v !== " ");
  // 先遍历一遍计算所有的*和/
  const stack = new Stack();
  for (let i = 0; i < strArr.length; i++) {
    let ch = strArr[i];
    if (!isNaN(parseInt(ch))) {
      i++;
      ch = parseInt(ch);
      while (i < strArr.length && !isNaN(parseInt(strArr[i]))) {
        ch = ch * 10 + parseInt(strArr[i++]);
      }
      if (!stack.isEmpty() && (stack.peek() === "*" || stack.peek() === "/")) {
        const op = stack.pop();
        const num = stack.pop();
        if (op === "*") ch = num * ch;
        if (op === "/") ch = Math.floor(num / ch);
      }
      i--;
    }
    stack.push(ch);
  }
  let ans = stack.itemOf(0);
  for (let i = 2; i < stack.size(); i++) {
    const op = stack.itemOf(i - 1);
    const num = stack.itemOf(i);
    if (op === "+") ans += num;
    if (op === "-") ans -= num;
  }
  return ans;
};
