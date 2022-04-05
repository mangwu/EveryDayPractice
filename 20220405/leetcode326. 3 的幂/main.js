/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 03:01:39                                                  *
 * @LastModifiedDate: 2022-04-05 03:20:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

// 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let mi = 1;
  while (n > mi) {
    if (mi == n) {
      return true;
    }
    mi = mi * 3;
  }
  return false;
};
