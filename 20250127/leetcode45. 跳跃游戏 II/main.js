/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-27 22:49:07                                                  *
 * @LastModifiedDate: 2025-01-27 22:58:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0 && j + 1000 >= i; j--) {
      if (j + nums[j] >= i) dp[i] = Math.min(dp[i], dp[j] + 1);
    }
  }
  return dp[n - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0 && j + 1000 >= i; j--) {
      if (j + nums[j] >= i) dp[i] = Math.min(dp[i], dp[j] + 1);
    }
  }
  return dp[n - 1];
};

