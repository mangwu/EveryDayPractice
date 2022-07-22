/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-22 09:15:12                                                  *
 * @LastModifiedDate: 2022-07-22 09:28:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。
// 一旦你支付此费用，即可选择向上爬一个或者两个台阶。

// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

// 请你计算并返回达到楼梯顶部的最低花费。

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  if (n < 3) {
    return Math.min.apply(null, cost);
  }
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  if (n < 3) {
    return Math.min.apply(null, cost);
  }
  let first = 0;
  let second = 0;
  for (let i = 2; i <= n; i++) {
    let temp = second;
    second = Math.min(second + cost[i - 1], first + cost[i - 2]);
    first = temp;
  }
  return second;
};
