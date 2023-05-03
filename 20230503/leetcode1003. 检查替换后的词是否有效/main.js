/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-03 22:54:49                                                  *
 * @LastModifiedDate: 2023-05-03 23:02:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，请你判断它是否 有效 。
// 字符串 s 有效 需要满足：假设开始有一个空字符串 t = "" ，你可以执行 任意次
// 下述操作将 t 转换为 s ：

// 将字符串 "abc" 插入到 t 中的任意位置。形式上，t 变为 tleft + "abc" + tright，
// 其中 t == tleft + tright 。注意，tleft 和 tright 可能为 空 。
// 如果字符串 s 有效，则返回 true；否则，返回 false。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 栈
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "c") {
      const len = stack.length;
      if (len >= 2 && stack[len - 1] === "b" && stack[len - 2] === "a") {
        stack.pop();
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
