/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 14:34:12                                                  *
 * @LastModifiedDate: 2022-04-18 14:48:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
// 设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 最大差值问题
  // 对于 j > i, 求prices[j] - prices[i]的最大值
  // 使用一个数组记录当前的最小值，然后再次遍历一遍数组求得最大差值即可
  let ans = 0;
  const dp = [];
  dp[0] = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < dp[i - 1]) {
      dp[i] = prices[i];
    } else {
      dp[i] = dp[i - 1];
    }
    ans = Math.max(prices[i] - dp[i], ans);
  }
  return ans;
};

// 因为当前的最小值只于前面的一个最小值有关，使用一个遍历记录前面的最小值即可
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;
  const len = prices.length;
  let min = prices[0];
  for (let i = 1; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    ans = Math.max(prices[i] - min);
  }
  return ans;
};
