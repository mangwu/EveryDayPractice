/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-06 09:06:28                                                  *
 * @LastModifiedDate: 2023-01-06 09:13:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 num ，请你统计并返回 小于或等于 num 且各位数字之和为 偶数 的正整数的数目。

// 正整数的 各位数字之和 是其所有位上的对应数字相加的结果。

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let res = 0;
  for (let i = 2; i <= num; i++) {
    if (getBitSum(i) % 2 == 0) {
      res++;
    }
  }
  return res;
};

/**
 * @description 数位之和
 * @param {number} num
 */
var getBitSum = function (num) {
  const str = num.toString();
  let res = 0;
  for (const ch of str) {
    res += parseInt(ch);
  }
  return res;
};
