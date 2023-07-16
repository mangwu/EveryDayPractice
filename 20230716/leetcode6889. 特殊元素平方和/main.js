/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-16 10:30:23                                                  *
 * @LastModifiedDate: 2023-07-16 10:33:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 6889. 特殊元素平方和 显示英文描述
// 通过的用户数0
// 尝试过的用户数0
// 用户总通过次数0
// 用户总提交次数0
// 题目难度Easy
// 给你一个下标从 1 开始、长度为 n 的整数数组 nums 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      res += nums[i - 1] * nums[i - 1];
    }
  }
  return res;
};
