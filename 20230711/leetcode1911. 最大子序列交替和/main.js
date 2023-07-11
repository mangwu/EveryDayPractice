/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-11 09:01:35                                                  *
 * @LastModifiedDate: 2023-07-11 09:41:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个下标从 0 开始的数组的 交替和 定义为 偶数 下标处元素之 和 减去 奇数 下标处元素之 和 。

// 比方说，数组 [4,2,5,3] 的交替和为 (4 + 5) - (2 + 3) = 4 。
// 给你一个数组 nums ，请你返回 nums 中任意子序列的 最大交替和 （子序列的下标 重新 从 0 开始编号）。

// 一个数组的 子序列 是从原数组中删除一些元素后（也可能一个也不删除）剩余元素不改变顺序组成的数组。比方说，[2,7,4] 是 [4,2,3,7,2,1,4] 的一个子序列（加粗元素），但是 [2,4,2] 不是。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const n = nums.length;
  // 动态规划
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  // dp[i][0] 表示包含nums[i]的偶数个子序列的最大交替和
  // dp[i][1] 表示包含nums[i]的奇数个子序列的最大交替和
  dp[0][1] = nums[0];
  let res = nums[0];
  let maxEven = 0;
  let maxOdd = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = maxOdd - nums[i];
    dp[i][1] = maxEven + nums[i];
    maxOdd = Math.max(dp[i][1], maxOdd);
    maxEven = Math.max(dp[i][0], maxEven);
    res = Math.max(maxOdd, maxEven, res);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const n = nums.length;
  // 动态规划
  let res = nums[0];
  let maxEven = 0;
  let maxOdd = nums[0];
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 1; i < n; i++) {
    dp0= maxOdd - nums[i];
    dp1 = maxEven + nums[i];
    maxOdd = Math.max(dp1, maxOdd);
    maxEven = Math.max(dp0, maxEven);
    res = Math.max(maxOdd, maxEven, res);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const n = nums.length;
  // 动态规划
  let maxEven = 0;
  let maxOdd = nums[0];
  for (let i = 1; i < n; i++) {
    maxOdd = Math.max(maxEven + nums[i], maxOdd);
    maxEven = Math.max(maxOdd - nums[i], maxEven);
  }
  // 最终结果不可能是奇数
  return maxOdd;
};