/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-27 02:48:58                                                  *
 * @LastModifiedDate: 2022-03-27 03:49:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const stack1 = [];
  const stack2 = [];
  for (const ch of s) {
    if (ch !== "#") {
      stack1.push(ch);
    } else {
      stack1.pop();
    }
  }
  for (const ch of t) {
    if (ch !== "#") {
      stack2.push(ch);
    } else {
      stack2.pop();
    }
  }
  return stack1.toString() == stack2.toString();
};
