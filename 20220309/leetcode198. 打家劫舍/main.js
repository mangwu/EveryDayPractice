/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-09 10:08:46                                                  *
 * @LastModifiedDate: 2022-03-09 13:30:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 可以隔几间偷，但不能邻间偷
  // 因为隔超过2间偷就会造成遗漏，如0 4 中间的2也是可以偷的
  // 所以都会隔着一间偷或者两间偷
  // 初始时可以选择偷第一间也可以选择偷第二间
  // 偷到第i间时，其已经偷得的最大金额为从第i - 2 间和 i - 3间偷得的最大值与第i间元素之和的大者
  const len = nums.length;
  if (len <= 2) {
    return Math.max.apply(null, nums);
  }
  const dp = new Array(len).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = nums[0] + nums[2];
  for (let i = 3; i < len; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3]);
  }
  return dp[len - 1] > dp[len - 2] ? dp[len - 1] : dp[len - 2];
};
