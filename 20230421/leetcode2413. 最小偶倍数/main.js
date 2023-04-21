/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-21 08:47:17                                                  *
 * @LastModifiedDate: 2023-04-21 08:48:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，返回 2 和 n 的最小公倍数（正整数）。

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  if (n % 2 === 1) return n * 2;
  return n;
};
