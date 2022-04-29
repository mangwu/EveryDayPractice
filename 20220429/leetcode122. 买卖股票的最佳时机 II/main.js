/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 15:19:11                                                  *
 * @LastModifiedDate: 2022-04-29 15:54:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。
// 你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 单调栈，求得每个元素的下一个最大元素
  const len = prices.length;
  const stack = [];
  const nextGreater = new Array(len).fill(-1);
  for (let i = len - 1; i >= 0; i--) {
    let n = stack.length;
    // 比当前元素小的出栈
    while (n > 0 && prices[stack[n - 1]] < prices[i]) {
      stack.pop();
      n--;
    }
    if (n > 0) {
      nextGreater[i] = stack[n - 1];
    }
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] >= prices[i + 1]) {
      continue;
    } else {
      // 抛出
      if (nextGreater[i] !== -1) {
        ans -= prices[i];
        ans += prices[nextGreater[i]];
        i = nextGreater[i];
      }
    }
  }
  return ans;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let ans = 0;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] >= prices[i + 1]) {
      // 找到一个低峰
      continue;
    } else {
      let start = i;
      while (prices[i] < prices[i + 1] && i + 1 < len) {
        i++;
      }
      ans += prices[i] - prices[start];
    }
  }
  return ans;
};
