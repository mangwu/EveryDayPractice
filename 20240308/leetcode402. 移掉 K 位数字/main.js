/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-08 10:44:53                                                  *
 * @LastModifiedDate: 2024-03-08 14:26:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const n = num.length;
  // 单调栈
  const stack = [];
  for (let i = 0; i < n; i++) {
    const cur = parseInt(num[i]);
    while (stack.length && stack[stack.length - 1] > cur && k) {
      stack.pop();
      k--;
    }
    stack.push(cur);
    if (k === 0) {
      stack.push(...num.slice(i + 1).split(""));
      break;
    }
  }
  while (stack.length && k) {
    stack.pop();
    k--;
  }
  while (stack.length && (stack[0] === 0 || stack[0] === "0")) {
    stack.shift();
  }
  return stack.length ? stack.join("") : "0";
};

// 78414895441484198641981894897613254151561
//    1      1   1
