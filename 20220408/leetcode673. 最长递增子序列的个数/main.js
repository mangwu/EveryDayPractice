/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-08 10:37:31                                                  *
 * @LastModifiedDate: 2022-04-08 11:10:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  // 动态规划
  // 记录最长严格递增子序列
  // 返回状态数组中重复值的最大个数
  const len = nums.length;
  if (len == 1) {
    return 1;
  }
  // 第一个元素保存最长子序列，第二个元素保存最长子序列个数
  const dp = new Array(len).fill(1).map((_v) => new Array(2).fill(1));
  let ans = 1;
  let max = 1;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    let curMax = 1;
    let curAns = 1;
    while (j >= 0) {
      if (nums[j] < nums[i]) {
        // 如果当前的序列可以构成一条新的子序列
        if (dp[j][0] + 1 > curMax) {
          curMax = dp[j][0] + 1;
          curAns = dp[j][1];
        } else if (dp[j][0] + 1 == curMax) {
          curAns += dp[j][1];
        }
      }
      j--;
    }
    dp[i][0] = curMax;
    dp[i][1] = curAns;
    if (curMax > max) {
      ans = curAns;
    } else if (curMax == max) {
      ans += curAns;
    }
  }
  return ans;
};
