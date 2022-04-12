/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-12 16:30:21                                                  *
 * @LastModifiedDate: 2022-04-12 16:57:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if(amount == 0) {
    return 0
  }
  let newCoins = new Set();
  // 遍历一遍coins去除比amount大的金额
  for (const coin of coins) {
    if (coin < amount) {
      newCoins.add(coin);
    } else if (coin == amount) {
      return 1;
    }
  }
  const size = newCoins.size;
  if (size == 0) {
    return -1;
  }
  // 保存构成当前数额的最小硬币个数，-1表示构成不了
  const dp = new Array(amount + 1).fill(-1);
  for (let i = 1; i <= amount; i++) {
    if (newCoins.has(i)) {
      dp[i] = 1;
      continue;
    }
    let curMin = Infinity;
    for (let j = i - 1; j >= i / 2; j--) {
      if (dp[j] !== -1 && dp[i - j] !== -1) {
        curMin = Math.min(curMin, dp[j] + dp[i - j]);
      }
    }
    dp[i] = curMin !== Infinity ? curMin : -1;
  }
  return dp[amount];
};
