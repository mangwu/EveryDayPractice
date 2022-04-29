/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 15:56:26                                                  *
 * @LastModifiedDate: 2022-04-29 17:32:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 两笔是关键
  // 如果是一笔，则计算每个元素与后面的最大元素差值，选择最大差值即可
  // 如果不限制交易，则计算每个爬坡的差值和即可
  // 如果限制两笔,则需要计算出每个爬坡后进行分离了
  const len = prices.length;
  const papo = [];
  let min = Infinity;
  // 只进行一次交易的情况
  let one_ans = 0;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] >= prices[i + 1]) {
      continue;
    }
    let start = i;
    while (prices[i] <= prices[i + 1] && i + 1 < len) {
      i++;
    }
    min = Math.min(prices[start], min);
    one_ans = Math.max(one_ans, prices[i] - min);
    papo.push([prices[start], prices[i]]);
  }
  const papoLen = papo.length;
  if (papoLen == 0) {
    return 0;
  }
  if (papoLen == 1) {
    return papoLen[0][1] - papoLen[0][0];
  }
  const left = new Array(papoLen - 1).fill(0);
  const right = new Array(papoLen - 1).fill(0);
  let left_min = Infinity;
  let left_max = 0;
  for (let i = 0; i < papoLen - 1; i++) {
    left_min = Math.min(left_min, papo[i][0]);
    left_max = Math.max(left_max, papo[i][1] - left_min);
    left[i] = left_max;
  }
  let right_max = -Infinity;
  let right_max_ans = 0;
  for (let i = papoLen - 1; i >= 1; i--) {
    right_max = Math.max(right_max, papo[i][1]);
    right_max_ans = Math.max(right_max_ans, right_max - papo[i][0]);
    right[i - 1] = right_max_ans;
  }
  let two_ans = 0;

  for (let i = 0; i < papoLen - 1; i++) {
    two_ans = Math.max(left[i] + right[i], two_ans);
  }
  return Math.max(two_ans, one_ans);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 优化 可以在获取爬坡的时候就获取left
  const len = prices.length;
  const left = [];
  const papo = [];
  // 计算left
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] >= prices[i + 1]) {
      continue;
    }
    let start = i;
    while (prices[i] <= prices[i + 1] && i + 1 < len) {
      i++;
    }
    min = Math.min(prices[start], min);
    max = Math.max(max, prices[i] - min);
    papo.push([prices[start], prices[i]]);
    left.push(max);
  }
  const papoLen = papo.length;
  if (papoLen == 0) {
    return 0;
  }
  if(papoLen == 1) {
    return papo[0][1] - papo[0][0]
  }
  // 计算right
  let right_max = -Infinity;
  let right_max_ans = 0;
  //
  let ans = left[papoLen - 1]
  for (let i = papoLen - 1; i >= 1; i--) {
    right_max = Math.max(right_max, papo[i][1]);
    right_max_ans = Math.max(right_max_ans, right_max - papo[i][0]);
    left[i - 1] += right_max_ans;
    ans = Math.max(ans, left[i - 1]);
  }
  return ans;
};
