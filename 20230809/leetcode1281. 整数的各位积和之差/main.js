/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-09 08:51:41                                                  *
 * @LastModifiedDate: 2023-08-09 08:57:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const str = n.toString();
  let product = 1;
  let sum = 0;
  for (const ch of str) {
    const cur = parseInt(ch);
    product *= cur;
    sum += cur;
  }
  return product - sum;
};
