/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-06 17:59:02                                                  *
 * @LastModifiedDate: 2025-04-06 19:51:58                                      *
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
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // [pre, len]
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(1));
  let resIdx = 0;
  let resMax = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && dp[i][1] < dp[j][1] + 1) {
        dp[i][1] = dp[j][1] + 1;
        dp[i][0] = j;
        if (resMax < dp[i][1]) {
          resMax = dp[i][1];
          resIdx = i;
        }
      }
    }
  }
  const res = [nums[resIdx]];
  while (resMax > 1) {
    resIdx = dp[resIdx][0];
    res.push(nums[resIdx]);
    resMax--;
  }
  return res;
};
