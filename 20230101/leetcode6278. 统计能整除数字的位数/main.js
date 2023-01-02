/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-01 10:34:13                                                  *
 * @LastModifiedDate: 2023-01-01 10:35:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 num ，返回 num 中能整除 num 的数位的数目。

// 如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const str = num.toString();
  let res = 0;
  for (const ch of str) {
    if (num % parseInt(ch) === 0) {
      res++;
    }
  }
  return res;
};
