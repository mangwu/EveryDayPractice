/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-10 15:55:39                                                  *
 * @LastModifiedDate: 2025-03-10 16:54:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们正在玩一个猜数游戏，游戏规则如下：

// 我从 1 到 n 之间选择一个数字。
// 你来猜我选了哪个数字。
// 如果你猜到正确的数字，就会 赢得游戏 。
// 如果你猜错了，那么我会告诉你，我选的数字比你的 更大或者更小 ，并且你需要继续猜数。
// 每当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金。如果你花光了钱，就会 输掉游戏 。
// 给你一个特定的数字 n ，返回能够 确保你获胜 的最小现金数，不管我选择那个数字 。

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  // 从 start - end的最小花费金额
  const cache = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(-1));
  const minMoney = (start, end) => {
    if (start >= end) return 0;
    let res = Infinity;
    if (cache[start][end] !== -1) return cache[start][end];
    for (let i = start; i <= end; i++) {
      res = Math.min(
        res,
        Math.max(i + minMoney(i + 1, end), i + minMoney(start, i - 1))
      );
    }
    cache[start][end] = res;
    return res;
  };
  return minMoney(1, n);
};

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  // 从 start - end的最小花费金额
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = n - 1; i >= 1; i--) {
    for (let j = i + 1; j <= n; j++) {
      dp[i][j] = j + dp[i][j - 1];
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], k + Math.max(dp[i][k - 1], dp[k + 1][j]));
      }
    }
  }
  return dp[1][n];
};
