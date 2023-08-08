/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-08 08:46:28                                                  *
 * @LastModifiedDate: 2023-08-08 09:59:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 nums 。一个子数组 [numsl, numsl+1, ..., numsr-1, numsr] 的 和的绝对值 为 abs(numsl + numsl+1 + ... + numsr-1 + numsr) 。

// 请你找出 nums 中 和的绝对值 最大的任意子数组（可能为空），并返回该 最大值 。

// abs(x) 定义如下：

// 如果 x 是负整数，那么 abs(x) = -x 。
// 如果 x 是非负整数，那么 abs(x) = x 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  // 动态规划，包含当前元素的最大和值
  let pre = Math.abs(nums[0]);
  let res = pre;
  let preSum = nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    let curSum = preSum + nums[i];
    let cur = Math.abs(curSum);
    if (cur > Math.abs(nums[i])) {
      // 选择连接上一个数组
      res = Math.max(res, cur);
      pre = cur;
      preSum = curSum;
    } else {
      // 单独使用
      pre = Math.abs(nums[i]);
      preSum = nums[i];
      res = Math.max(res, pre);
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  let res = Math.abs(nums[0]);
  dp[0][0] = nums[0]; // 最大值
  dp[0][1] = nums[0]; // 最小值
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(nums[i], dp[i - 1][0] + nums[i]);
    dp[i][1] = Math.min(nums[i], dp[i - 1][1] + nums[i]);
    res = Math.max(res, Math.abs(dp[i][0]), Math.abs(dp[i][1]));
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  const n = nums.length;
  let dp0 = nums[0]; // 最大值
  let dp1 = nums[0]; // 最小值
  let res = Math.abs(nums[0]);
  for (let i = 1; i < n; i++) {
    dp0 = Math.max(nums[i], dp0 + nums[i]);
    dp1 = Math.min(nums[i], dp1 + nums[i]);
    res = Math.max(res, Math.abs(dp0), Math.abs(dp1));
  }
  return res;
};
