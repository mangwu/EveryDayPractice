/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-25 18:25:01                                                  *
 * @LastModifiedDate: 2024-08-25 20:16:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  if (k === 1) return true;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % k !== 0) return false;
  const subSum = sum / k;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (k === n) {
    if (nums[0] === nums[n - 1]) return true;
    return false;
  }
  if (nums[n - 1] > subSum) return false;
  const max = (1 << n) - 1;
  const dp = new Array(max + 1).fill(false);
  const dfs = (mask, preSum) => {
    if (mask === max) return true;
    if (dp[mask]) return false; // 已被检查过的情况
    dp[mask] = true;
    for (let i = 0; i < n; i++) {
      if (nums[i] + preSum > subSum) break; // 递增数组，不符合情况
      if (((mask >> i) & 1) === 0) {
        // 未被选择过
        if (dfs(mask | (1 << i), (preSum + nums[i]) % subSum)) return true;
      }
    }
    return false;
  };
  return dfs(0, 0);
};
