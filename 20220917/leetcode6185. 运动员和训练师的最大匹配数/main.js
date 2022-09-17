/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-17 23:14:43                                                  *
 * @LastModifiedDate: 2022-09-17 23:19:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 players ，
// 其中 players[i] 表示第 i 名运动员的 能力 值，
// 同时给你一个下标从 0 开始的整数数组 trainers ，
// 其中 trainers[j] 表示第 j 名训练师的 训练能力值 。

// 如果第 i 名运动员的能力值 小于等于 第 j 名训练师的能力值，
// 那么第 i 名运动员可以 匹配 第 j 名训练师。
// 除此以外，每名运动员至多可以匹配一位训练师，每位训练师最多可以匹配一位运动员。

// 请你返回满足上述要求 players 和 trainers 的 最大 匹配数。

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  trainers.sort((a, b) => a - b);
  players.sort((a, b) => a - b);
  const n = trainers.length;
  const m = players.length;
  let ans = 0;
  let i = n - 1;
  let j = m - 1;
  while (i >= 0 && j >= 0) {
    if (trainers[i] >= players[j]) {
      i--;
      j--;
      ans++;
      continue;
    } else {
      j--;
    }
  }
  return ans;
};
