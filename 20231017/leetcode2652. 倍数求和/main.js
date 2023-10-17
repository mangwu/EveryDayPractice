/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-17 08:52:45                                                  *
 * @LastModifiedDate: 2023-10-17 08:55:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，请你计算在 [1，n] 范围内能被 3、5、7 整除的所有整数之和。

// 返回一个整数，用于表示给定范围内所有满足约束条件的数字之和。

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) ans += i;
  }
  return ans;
};
