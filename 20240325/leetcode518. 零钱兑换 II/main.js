/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-25 10:35:14                                                  *
 * @LastModifiedDate: 2024-03-25 10:52:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

// 假设每一种面额的硬币有无限个。

// 题目数据保证结果符合 32 位带符号整数。

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const m = coins.length;
  const dp = new Array(amount + 1).fill(-1).map((v) => new Array(m).fill(-1));
  coins.sort((a, b) => b - a);
  const dfs = (left, idx) => {
    if (left < 0) return 0;
    if (left === 0) return 1;
    if (dp[left][idx] !== -1) return dp[left][idx];
    let ans = 0;
    for (let i = idx; i < m; i++) {
      ans += dfs(left - coins[i], i);
    }
    dp[left][idx] = ans;
    return dp[left][idx];
  };
  return dfs(amount, 0);
};

// 0 1 2 3 5
