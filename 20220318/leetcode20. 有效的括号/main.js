/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-18 18:55:07                                                  *
 * @LastModifiedDate: 2022-03-18 19:07:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 使用栈，当遍历完时，栈应该为空
  const stack = [];
  const hash = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
  // console.log(hash);
  for (const ch of s) {
    let top = stack[stack.length - 1];
    top = hash.get(top);
    if (top == ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
    // console.log(stack);
  }
  return stack.length == 0;
};
isValid("({}){()[({})]}");
