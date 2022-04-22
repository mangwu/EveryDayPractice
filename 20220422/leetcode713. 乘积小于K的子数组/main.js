/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-22 09:01:35                                                  *
 * @LastModifiedDate: 2022-04-22 09:44:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数数组 nums和整数 k 。

// 请找出该数组内乘积小于 k 的连续的子数组的个数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  // 滑动窗口题
  const len = nums.length;
  let left = 0;
  let right = 0;
  let mul = 1;
  let ans = 0;
  while (right < len) {
    while (right < len && mul < k) {
      mul *= nums[right];
      if (mul < k) {
        ans += right - left + 1;
      }
      right++;
    }
    let hasChange = false;
    while (mul >= k && left < right) {
      mul /= nums[left];
      hasChange = true;
      left++;
    }
    if (hasChange) {
      ans += right - left;
    }
  }
  return ans;
};
