/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-26 15:17:29                                                  *
 * @LastModifiedDate: 2022-05-26 15:23:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果数组是单调递增或单调递减的，那么它是 单调 的。

// 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。
// 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。

// 当给定的数组 nums 是单调数组时返回 true，否则返回 false。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let n = nums.length;
  if (n <= 2) {
    return true;
  }
  // 是否递增
  let isIncreasing = nums[0] <= nums[n - 1];
  for (let i = 1; i < n; i++) {
    if (isIncreasing) {
      // 递增
      if (nums[i] < nums[i - 1]) {
        return false;
      }
    } else {
      // 递减
      if (nums[i] > nums[i - 1]) {
        return false;
      }
    }
  }
  return true;
};
