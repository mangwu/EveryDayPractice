/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-27 08:55:19                                                  *
 * @LastModifiedDate: 2022-10-27 08:58:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 已知函数 signFunc(x) 将会根据 x 的正负返回特定值：

// 如果 x 是正数，返回 1 。
// 如果 x 是负数，返回 -1 。
// 如果 x 是等于 0 ，返回 0 。
// 给你一个整数数组 nums 。令 product 为数组 nums 中所有元素值的乘积。

// 返回 signFunc(product) 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negative = 0;
  for (const num of nums) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      negative++;
    }
  }
  return negative % 2 == 0 ? 1 : -1;
};
