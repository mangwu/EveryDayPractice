/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-27 11:25:01                                                  *
 * @LastModifiedDate: 2024-03-27 11:28:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
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
  const stack = [];
  for (const ch of s) {
    if (ch === ")") {
      // 进行反转
      const queue = [];
      while (stack.length && stack[stack.length - 1] !== "(") {
        queue.push(stack.pop());
      }
      stack.pop();
      for (const q of queue) {
        stack.push(q);
      }
    } else stack.push(ch);
  }
  return stack.join("");
};
