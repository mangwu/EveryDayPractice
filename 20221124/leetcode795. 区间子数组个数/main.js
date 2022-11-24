/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-24 08:58:57                                                  *
 * @LastModifiedDate: 2022-11-24 10:01:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。

// 生成的测试用例保证结果符合 32-bit 整数范围。
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  // 在遇到一个不在范围内的元素，直接跳过即可
  const n = nums.length;
  let start = 0;
  let max = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    if (max > right || max < left) {
      start = i + 1;
      max = 0;
      continue;
    }
    ans += i - start + 1;
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  const n = nums.length;
  let start = 0;
  let hasConform = false;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] > right) {
      start = i + 1;
      hasConform = false;
      continue;
    }
    if (nums[i] <= right && nums[i] >= left) {
      hasConform = i;
    }
    if (hasConform !== false) {
      ans += hasConform - start + 1;
    }
  }
  return ans;
};

//  5 7
// 4 2 1 5 3 2 4 7 3 4 6 3 8 2
// 4 + 4 + 4 + 4 + 8 + 8 + 8 + 11 + 11

// 预期结果62
