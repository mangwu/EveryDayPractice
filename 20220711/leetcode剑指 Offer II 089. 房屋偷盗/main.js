/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-12 15:48:44                                                  *
 * @LastModifiedDate: 2022-07-12 15:56:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n <= 2) {
    return Math.max.apply(null, nums);
  }
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = nums[0] + nums[2];
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
  }
  return Math.max(dp[n - 1], dp[n - 2]);
};
