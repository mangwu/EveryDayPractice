/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-23 21:56:53                                                  *
 * @LastModifiedDate: 2025-02-23 22:30:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

// 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 先计算*和/
  s = s.replaceAll(" ", "");
  const n = s.length;
  const stack = [];
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === "*" || ch === "/") {
      let j = i + 1;
      let cur = 0;
      while (j < n && isNumber(s[j])) {
        cur = cur * 10 + parseInt(s[j++]);
      }
      i = j - 1;
      const pre = stack.pop();
      stack.push(ch === "*" ? pre * cur : Math.floor(pre / cur));
    } else if (isNumber(ch)) {
      let j = i + 1;
      let cur = parseInt(ch);
      while (j < n && isNumber(s[j])) {
        cur = cur * 10 + parseInt(s[j++]);
      }
      i = j - 1;
      stack.push(cur);
    } else stack.push(ch);
  }
  const stack2 = [];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "+" || stack[i] === "-") {
      const pre = stack2.pop();
      const nxt = stack[++i];
      stack2.push(stack[i - 1] === "+" ? pre + nxt : pre - nxt);
    } else stack2.push(stack[i]);
  }
  return stack2[0];
};
