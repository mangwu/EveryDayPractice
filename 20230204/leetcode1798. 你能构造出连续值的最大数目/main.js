/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-04 14:36:18                                                  *
 * @LastModifiedDate: 2023-02-04 15:13:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 coins ，它代表你拥有的 n 个硬币。第 i 个硬币的值为 coins[i] 。如果你从这些硬币中选出一部分硬币，它们的和为 x ，那么称，你可以 构造 出 x 。

// 请返回从 0 开始（包括 0 ），你最多能 构造 出多少个连续整数。

// 你可能有多个相同值的硬币。

/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  coins.sort((a, b) => a - b);
  let sum = 1;
  for (const coin of coins) {
    if (coin > sum) break;
    sum += coin;
  }
  return sum;
};
