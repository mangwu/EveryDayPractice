/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-21 10:42:54                                                  *
 * @LastModifiedDate: 2024-10-21 11:25:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，和一个整数 k 。

// 对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。

// nums 的 分数 是 nums 中最大元素和最小元素的差值。

// 在更改每个下标对应的值之后，返回 nums 的最小 分数 。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  const n = nums.length;
  if (n === 1) return 0;
  nums.sort((a, b) => a - b);
  let res = nums[n - 1] - nums[0];
  for (let i = 0; i < n - 1; i++) {
    // 以nums[i]为+k为结束
    res = Math.min(
      res,
      Math.max(nums[i] + k, nums[n - 1] - k) -
        Math.min(nums[0] + k, nums[i + 1] - k)
    );
  }
  return res;
};
