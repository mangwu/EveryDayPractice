/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-08 16:19:38                                                  *
 * @LastModifiedDate: 2022-08-08 17:04:16                                      *
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
  coins.sort((a, b) => b - a);
  const amountRes = new Array(amount).fill(0);
  const dfs = (rest) => {
    if (rest < 0) {
      return -1;
    }
    if (rest == 0) {
      return 0;
    }
    if (amountRes[rest - 1] !== 0) {
      return amountRes[rest - 1];
    }
    let min = Infinity;
    for (const coin of coins) {
      let res = dfs(rest - coin);
      if (res >= 0 && res < min) {
        min = 1 + res;
      }
    }
    amountRes[rest - 1] = min == Infinity ? -1 : min;
    return amountRes[rest - 1];
  };
  dfs(amount);
  return amountRes[amount - 1];
};
