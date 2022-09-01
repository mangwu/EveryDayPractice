/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-01 10:31:10                                                  *
 * @LastModifiedDate: 2022-09-01 10:38:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。

// 商店里正在进行促销活动，如果你要买第 i 件商品，
// 那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，
// 如果没有满足条件的 j ，你将没有任何折扣。

// 请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  // 下一个更小的元素 单调栈
  const stack = [];
  const n = prices.length;
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      ans[i] = prices[i] - stack[stack.length - 1];
    } else {
      ans[i] = prices[i];
    }
    stack.push(prices[i]);
  }
  return ans;
};
