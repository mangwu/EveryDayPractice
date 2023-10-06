/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-06 21:11:37                                                  *
 * @LastModifiedDate: 2023-10-06 21:13:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 单调栈
  const n = prices.length;
  const stack = [];
  const next = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && prices[stack[stack.length - 1]] < prices[i]) {
      stack.pop();
    }
    if (stack.length) {
      next[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    if (prices[i] >= prices[i + 1]) {
      continue;
    } else {
      // 抛出
      if (next[i] !== -1) {
        let add = prices[next[i]] - prices[i];
        
        ans -= prices[i];
        ans += prices[next[i]];
        i = next[i] - 1;
      }
    }
  }
  return ans;
};
