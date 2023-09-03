/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-02 22:44:15                                                  *
 * @LastModifiedDate: 2023-09-02 22:50:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和两个正整数 m 和 k 。

// 请你返回 nums 中长度为 k 的 几乎唯一 子数组的 最大和 ，如果不存在几乎唯一子数组，请你返回 0 。

// 如果 nums 的一个子数组有至少 m 个互不相同的元素，我们称它是 几乎唯一 子数组。

// 子数组指的是一个数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
  const hash = new Map();
  // 滑动窗口
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    hash.set(nums[i], (hash.get(nums[i]) | 0) + 1);
    sum += nums[i];
  }
  let maxSum = 0;
  if (hash.size >= m) maxSum = sum;
  for (let i = k; i < n; i++) {
    sum += nums[i];
    sum -= nums[i - k];
    hash.set(nums[i], (hash.get(nums[i]) | 0) + 1);
    const num = hash.get(nums[i - k]);
    if (num === 1) hash.delete(nums[i - k]);
    else hash.set(nums[i - k], num - 1);
    if (hash.size >= m) maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
