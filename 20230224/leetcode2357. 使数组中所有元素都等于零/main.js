/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-24 08:54:03                                                  *
 * @LastModifiedDate: 2023-02-24 09:00:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个非负整数数组 nums 。在一步操作中，你必须：

// 选出一个正整数 x ，x 需要小于或等于 nums 中 最小 的 非零 元素。
// nums 中的每个正整数都减去 x。
// 返回使 nums 中所有元素都等于 0 需要的 最少 操作数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  let pre = 0;
  for (const num of nums) {
    if (num === 0) continue;
    if (num !== pre) {
      res++;
      pre = num;
    }
  }
  return res;
};
