/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-26 08:43:25                                                  *
 * @LastModifiedDate: 2023-06-26 08:57:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，找出满足下述条件的 中枢整数 x ：

// 1 和 x 之间的所有元素之和等于 x 和 n 之间所有元素之和。
// 返回中枢整数 x 。如果不存在中枢整数，则返回 -1 。题目保证对于给定的输入，至多存在一个中枢整数。

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  const prefix = [0];
  let last = ((1 + n) * n) / 2;
  for (let i = 1; i <= n; i++) {
    const cur = prefix[prefix.length - 1] + i;
    if (cur === last - cur + i) return i;
    prefix.push(cur);
  }
  return -1;
};

// a*(1+a)/2 - x*(1+x)/2 + x = x*(1+x)/2
// a*(1+a) = 2x+2x^2 - 2x
// a*(1+a) = 2*x^2
// x = a*(1+a)/2 ^ 0.5

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let last = ((1 + n) * n) / 2;
  let x = Math.sqrt(last);
  if (x === Math.floor(x)) return x;
  return -1;
};
