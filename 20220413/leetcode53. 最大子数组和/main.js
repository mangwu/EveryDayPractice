/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-13 13:43:35                                                  *
 * @LastModifiedDate: 2022-04-13 14:32:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划
  let max = -Infinity;
  let curMax = 0;
  for (let i = 0; i < nums.length; i++) {
    curMax += nums[i];
    max = Math.max(curMax, max);

    if (curMax < 0) {
      // 重新开始计算
      curMax = 0;
    }
  }
  return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 如果使用f(i)表示已第i个元素结尾的连续子数组最大和，那么本题答案就是Math.max({f(i)}(0<=i<len))
  // 求f(i)的值有两种情况：
  // ①自身独立组成一个子数组(当前面的f(i-1)是负数时就会出现这种情况)
  // ②和前面一个元素的最大子数组和组成
  // 所以f(i) = max(f(i-1) + nums[i],nums[i])
  const len = nums.length;
  const dp = new Array(len).fill(0);
  let max = nums[0];
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 因为状态转化方程只使用到了前面的一个dp值，所以不需要保存所有的dp值，使用一个变量保存上一个值即可
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 如果使用f(i)表示已第i个元素结尾的连续子数组最大和，那么本题答案就是Math.max({f(i)}(0<=i<len))
  // 求f(i)的值有两种情况：
  // ①自身独立组成一个子数组(当前面的f(i-1)是负数时就会出现这种情况)
  // ②和前面一个元素的最大子数组和组成
  // 所以f(i) = max(f(i-1) + nums[i],nums[i])
  const len = nums.length;
  let max = nums[0];
  let pre = nums[0];
  for (let i = 1; i < len; i++) {
    let curMax = Math.max(pre + nums[i], nums[i]);
    max = Math.max(max, curMax);
    pre = curMax;
  }
  return max;
};
