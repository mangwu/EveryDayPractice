/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-01 16:08:00                                                  *
 * @LastModifiedDate: 2023-09-01 16:47:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
// answer[i] % answer[j] == 0 ，或
// answer[j] % answer[i] == 0
// 如果存在多个有效解子集，返回其中任何一个均可。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // 1 是一个特殊的元素，它放在任何集合中都会成立
  nums.sort((a, b) => b - a);
  // 动态规划
  const n = nums.length;
  const dp = nums.map((v) => [v]);
  let res = [nums[0]];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--)
      if (nums[j] % nums[i] === 0) {
        if (dp[j].length + 1 > dp[i].length) {
          dp[i] = [nums[i], ...dp[j]];
        }
      }
    if (res.length < dp[i].length) res = dp[i];
  }
  return res;
};

// 1,2,3

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // 1 是一个特殊的元素，它放在任何集合中都会成立
  nums.sort((a, b) => b - a);
  // 动态规划
  const n = nums.length;
  const dp = nums.map((v) => [v]);
  let res = [nums[0]];
  for (let i = 1; i < n; i++) {
    let curLen = 1;
    let lastIdx = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] % nums[i] === 0) {
        if (dp[j].length + 1 > curLen) {
          curLen = dp[j].length + 1;
          lastIdx = j;
        }
      }
    }
    if (lastIdx !== -1) dp[i].push(...dp[lastIdx]);
    if (res.length < dp[i].length) res = dp[i];
  }
  return res;
};
