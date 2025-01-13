/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-13 13:30:17                                                  *
 * @LastModifiedDate: 2025-01-13 14:16:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的整数数组 nums 。
// 如果以下描述为真，那么 nums 在下标 i 处有一个 合法的分割 ：

// 前 i + 1 个元素的和 大于等于 剩下的 n - i - 1 个元素的和。
// 下标 i 的右边 至少有一个 元素，也就是说下标 i 满足 0 <= i < n - 1 。
// 请你返回 nums 中的 合法分割 方案数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let sum = nums.reduce((a, b) => a + b);
  let res = 0;
  const n = nums.length;
  let leftSum = 0;
  for (let i = 0; i < n - 1; i++) {
    leftSum += nums[i];
    sum -= nums[i];
    if (leftSum >= sum) res++;
  }
  return res;
};
