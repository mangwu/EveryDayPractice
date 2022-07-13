/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-11 10:13:40                                                  *
 * @LastModifiedDate: 2022-07-13 13:35:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。
// 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 只能相邻一间或者两间偷
  // 使用一个数组记录不偷第一个房间和偷第一个最大金额
  const n = nums.length;
  if (n <= 3) {
    return Math.max.apply(null, nums);
  }
  const dp = new Array(n).fill(0);
  dp[0] = [nums[0], 0];
  dp[1] = [nums[0], nums[1]];
  dp[2] = [nums[0] + nums[2], Math.max(nums[1], nums[2])];
  let ans = Math.max.apply(null, dp[2]);
  for (let i = 3; i < n; i++) {
    if (i == n - 1) {
      // 最后一个房间 只能选取不偷第一个房间的最大值
      dp[i] = Math.max(dp[i - 2][1] + nums[i], dp[i - 3][1] + nums[i]);
      ans = Math.max(dp[i], ans);
    } else {
      let max1 = Math.max(dp[i - 2][0] + nums[i], dp[i - 3][0] + nums[i]);
      let max2 = Math.max(dp[i - 2][1] + nums[i], dp[i - 3][1] + nums[i]);
      dp[i] = [max1, max2];
      ans = Math.max(ans, max1, max2);
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n <= 3) {
    return Math.max.apply(null, nums);
  }
  return Math.max(robRange(0, n - 1, nums), robRange(1, n, nums));
};

var robRange = function (start, end, nums) {
  const dp = new Array(end - start).fill(0);
  dp[0] = nums[start];
  dp[1] = Math.max(nums[start], nums[start + 1]);
  for (let i = 2; i < end - start; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i + start]);
  }
  return dp[end - start - 1];
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
  const n = nums.length;
  if (n <= 3) {
    return Math.max.apply(null, nums);
  }
  return Math.max(robRange(0, n - 1, nums), robRange(1, n, nums));
};

var robRange = function (start, end, nums) {
  let first = nums[start];
  let second = Math.max(nums[start], nums[start + 1]);
  for (let i = 2; i < end - start; i++) {
		let temp = second;
		second = Math.max(second, first + nums[i + start])
    first = temp
  }
  return second;
};