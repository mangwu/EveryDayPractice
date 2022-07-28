/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-28 09:27:04                                                  *
 * @LastModifiedDate: 2022-07-28 09:45:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，
// 11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，
// 用来计算一个数字有多少种不同的翻译方法。

// 0 - 25

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString();
  const n = str.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 1; i < n; i++) {
    let number = parseInt(str[i - 1] + str[i]);
    if (number >= 10 && number <= 25) {
      dp[i + 1] = dp[i] + dp[i - 1];
    } else {
      dp[i + 1] = dp[i];
    }
  }
  return dp[n];
};

// 1 1
// 12 => dp[i-1] +

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString();
  const n = str.length;
  first = 1;
  second = 1;
  for (let i = 1; i < n; i++) {
    let number = parseInt(str[i - 1] + str[i]);
    let temp = second;
    if (number >= 10 && number <= 25) {
      second = first + second;
    }
    first = temp;
  }
  return second;
};
