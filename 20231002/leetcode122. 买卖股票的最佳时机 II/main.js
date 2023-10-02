/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-02 23:11:23                                                  *
 * @LastModifiedDate: 2023-10-02 23:47:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

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
        ans -= prices[i];
        ans += prices[next[i]];
        i = next[i] - 1;
      }
    }
  }
  return ans;
};
