/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-16 10:43:00                                                  *
 * @LastModifiedDate: 2022-10-16 11:30:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和两个整数 minK 以及 maxK 。

// nums 的定界子数组是满足下述条件的一个子数组：

// 子数组中的 最小值 等于 minK 。
// 子数组中的 最大值 等于 maxK 。
// 返回定界子数组的数目。

// 子数组是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  const n = nums.length;
  let minIdx = [];
  let maxIdx = [];
  let ans = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      minIdx = [];
      maxIdx = [];
      start = i + 1;
      continue;
    }
    if (nums[i] == minK) {
      minIdx.push(i);
    }
    if (nums[i] == maxK) {
      maxIdx.push(i);
    }
    if (minIdx.length > 0 && maxIdx.length > 0) {
      ans +=
        Math.min(minIdx[minIdx.length - 1], maxIdx[maxIdx.length - 1]) -
        start +
        1;
    }
  }
  return ans;
};
