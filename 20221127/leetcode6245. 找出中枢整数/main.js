/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-27 10:30:19                                                  *
 * @LastModifiedDate: 2022-11-27 10:33:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  let sum = ((1 + n) * n) / 2;
  let curSum = 0;
  for (let i = 1; i <= n; i++) {
    curSum += i;
    sum -= i - 1;
    if (sum === curSum) {
      return i;
    }
  }
  return -1;
};

// (1 + n)
