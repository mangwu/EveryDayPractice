/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 09:09:01                                                  *
 * @LastModifiedDate: 2025-02-25 09:17:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

// 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replaceAll(" ", "");
  const n = s.length;
  const stack = [];
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  for (let i = 0; i < n; i++) {
    if (isNumber(s[i])) {
      let cur = parseInt(s[i]);
      let j = i + 1;
      while (j < n && isNumber(s[j])) {
        cur = cur * 10 + parseInt(s[j++]);
      }
      i = j - 1;
      if (
        stack.length &&
        (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
      ) {
        const op = stack.pop();
        const pre = stack.pop();
        stack.push(op === "*" ? pre * cur : Math.floor(pre / cur));
      } else stack.push(cur);
    } else {
      stack.push(s[i]);
    }
  }
  const stack2 = [];
  for (const item of stack) {
    if (
      stack2.length &&
      (stack2[stack2.length - 1] === "+" || stack2[stack2.length - 1] === "-")
    ) {
      const op = stack2.pop();
      const pre = stack2.pop();
      stack2.push(op === "+" ? item + pre : pre - item);
    } else {
      stack2.push(item);
    }
  }
  return stack2[0];
};
