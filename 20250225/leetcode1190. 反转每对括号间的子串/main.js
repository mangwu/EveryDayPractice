/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 10:48:49                                                  *
 * @LastModifiedDate: 2025-02-25 10:55:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个字符串 s（仅含有小写英文字母和括号）。

// 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

// 注意，您的结果中 不应 包含任何括号。

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const n = s.length;
  const pair = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      const pre = stack.pop();
      pair[pre] = i;
      pair[i] = pre;
    }
  }
  const res = [];
  let step = 1;
  let i = 0;
  while (i < n) {
    if (s[i] === "(" || s[i] === ")") {
      i = pair[i];
      step = -step;
    } else {
      res.push(s[i]);
    }
    i += step;
  }
  return res.join("");
};
