/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-13 22:02:17                                                  *
 * @LastModifiedDate: 2022-03-13 22:10:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 即获取最大差值，保存前面的i个的最小值，
  // 然后对当前值进行比较，如果当前值大就计算差值否则替换最小值
  let min = prices[0];
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > min) {
      ans = Math.max(ans, prices[i] - min);
    } else {
      min = prices[i];
    }
  }
  return ans;
};
