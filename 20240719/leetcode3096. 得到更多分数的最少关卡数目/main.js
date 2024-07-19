/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-19 09:05:00                                                  *
 * @LastModifiedDate: 2024-07-19 09:19:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的二进制数组 possible 。

// Alice 和 Bob 正在玩一个有 n 个关卡的游戏，游戏中有一些关卡是 困难 模式，其他的关卡是 简单 模式。如果 possible[i] == 0 ，那么第 i 个关卡是 困难 模式。一个玩家通过一个简单模式的关卡可以获得 1 分，通过困难模式的关卡将失去 1 分。

// 游戏的一开始，Alice 将从第 0 级开始 按顺序 完成一些关卡，然后 Bob 会完成剩下的所有关卡。

// 假设两名玩家都采取最优策略，目的是 最大化 自己的得分，Alice 想知道自己 最少 需要完成多少个关卡，才能获得比 Bob 更多的分数。

// 请你返回 Alice 获得比 Bob 更多的分数所需要完成的 最少 关卡数目，如果 无法 达成，那么返回 -1 。

// 注意，每个玩家都至少需要完成 1 个关卡。

/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function (possible) {
  const sum = possible.reduce((pre, cur) => pre + (cur === 1 ? 1 : -1), 0);
  let aScore = 0;
  const n = possible.length;
  for (let i = 0; i < n - 1; i++) {
    aScore += possible[i] === 1 ? 1 : -1;
    if (aScore > sum - aScore) return i + 1;
  }
  return -1;
};
