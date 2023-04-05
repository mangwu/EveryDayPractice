/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-05 22:01:07                                                  *
 * @LastModifiedDate: 2023-04-05 22:31:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 a 和 b ，返回 a 和 b 的 公 因子的数目。

// 如果 x 可以同时整除 a 和 b ，则认为 x 是 a 和 b 的一个 公因子 。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let res = 1;
  const min = Math.min(a, b);
  for (let i = 2; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      res++;
    }
  }
  return res;
};
