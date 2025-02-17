/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-17 11:08:53                                                  *
 * @LastModifiedDate: 2025-02-17 11:11:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const ch of s) {
    if (ch === ")") {
      if (stack.pop() !== "(") return false;
    } else if (ch === "]") {
      if (stack.pop() !== "[") return false;
    } else if (ch === "}") {
      if (stack.pop() !== "{") return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
};
