/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-18 10:34:42                                                  *
 * @LastModifiedDate: 2022-09-18 10:35:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  if (n % 2 == 0) {
    return n;
  }
  return 2 * n;
};
