/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-12 10:40:23                                                  *
 * @LastModifiedDate: 2022-07-12 10:43:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // 前缀和
  const n = nums.length;
  const ans = new Array(n).fill(0);
  ans[0] = nums[0];
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] + nums[i];
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // 原地修改
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};
