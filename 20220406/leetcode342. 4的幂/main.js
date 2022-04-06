/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-06 23:40:30                                                  *
 * @LastModifiedDate: 2022-04-06 23:42:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；
// 否则，返回 false 。

// 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 4 == 0) {
      n = n / 4;
    } else {
      return false;
    }
  }
  return true;
};
