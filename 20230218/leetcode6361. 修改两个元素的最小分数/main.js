/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-18 22:37:26                                                  *
 * @LastModifiedDate: 2023-02-18 22:47:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。

// nums 的 最小 得分是满足 0 <= i < j < nums.length 的 |nums[i] - nums[j]| 的最小值。
// nums的 最大 得分是满足 0 <= i < j < nums.length 的 |nums[i] - nums[j]| 的最大值。
// nums 的分数是 最大 得分与 最小 得分的和。
// 我们的目标是最小化 nums 的分数。你 最多 可以修改 nums 中 2 个元素的值。

// 请你返回修改 nums 中 至多两个 元素的值后，可以得到的 最小分数 。

// |x| 表示 x 的绝对值。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
  nums.sort((a, b) => a - b);
  // 把最小的两个数往上面提，或者把最大的两个数往上面压住
  // 或者一个最小的提或者一个最大的压住
  const n = nums.length;
  let res1 = nums[n - 1] - nums[2];
  let res2 = nums[n - 3] - nums[0];
  let res3 = nums[n - 2] - nums[1];
  return Math.min(res1, res2, res3);
};

// 1 2 2 5 6 7
//
