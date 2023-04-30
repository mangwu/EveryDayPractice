/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-30 10:41:30                                                  *
 * @LastModifiedDate: 2023-04-30 10:47:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的整数数组 player1 和 player2 ，分别表示玩家 1 和玩家 2 击中的瓶数。

// 保龄球比赛由 n 轮组成，每轮的瓶数恰好为 10 。

// 假设玩家在第 i 轮中击中 xi 个瓶子。玩家第 i 轮的价值为：

// 如果玩家在前两轮中击中了 10 个瓶子，则为 2xi 。
// 否则，为 xi 。
// 玩家的得分是其 n 轮价值的总和。

// 返回

// 如果玩家 1 的得分高于玩家 2 的得分，则为 1 ；
// 如果玩家 2 的得分高于玩家 1 的得分，则为 2 ；
// 如果平局，则为 0 。

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const n = player1.length;
  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < n; i++) {
    let cur1 = 1;
    let cur2 = 1;
    if (i > 0) {
      if (i > 1) {
        cur1 = player1[i - 1] === 10 || player1[i - 2] === 10 ? 2 : 1;
        cur2 = player2[i - 1] === 10 || player2[i - 2] === 10 ? 2 : 1;
      } else {
        cur1 = player1[i - 1] === 10 ? 2 : 1;
        cur2 = player2[i - 1] === 10 ? 2 : 1;
      }
    }
    res1 += player1[i] * cur1;
    res2 += player2[i] * cur2;
  }
  return res1 > res2 ? 1 : res1 < res2 ? 2 : 0;
};
