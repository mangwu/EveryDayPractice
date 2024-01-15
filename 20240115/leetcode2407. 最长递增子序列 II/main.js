/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-15 14:18:03                                                  *
 * @LastModifiedDate: 2024-01-15 14:31:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k 。

// 找到 nums 中满足以下要求的最长子序列：

// 子序列 严格递增
// 子序列中相邻元素的差值 不超过 k 。
// 请你返回满足上述要求的 最长子序列 的长度。

// 子序列 是从一个数组中删除部分元素后，剩余元素不改变顺序得到的数组。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function (nums, k) {
  // 暴力解法
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let ans = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j] && nums[i] - nums[j] <= k) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// 暴力解法会超时

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function (nums, k) {
  // 暴力解法
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let ans = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j] && nums[i] - nums[j] <= k) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
