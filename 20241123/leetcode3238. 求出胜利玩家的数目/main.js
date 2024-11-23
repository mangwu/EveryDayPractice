/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-23 22:46:26                                                  *
 * @LastModifiedDate: 2024-11-23 23:15:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，表示在一个游戏中的玩家数目。同时给你一个二维整数数组 pick ，其中 pick[i] = [xi, yi] 表示玩家 xi 获得了一个颜色为 yi 的球。

// 如果玩家 i 获得的球中任何一种颜色球的数目 严格大于 i 个，那么我们说玩家 i 是胜利玩家。换句话说：

// 如果玩家 0 获得了任何的球，那么玩家 0 是胜利玩家。
// 如果玩家 1 获得了至少 2 个相同颜色的球，那么玩家 1 是胜利玩家。
// ...
// 如果玩家 i 获得了至少 i + 1 个相同颜色的球，那么玩家 i 是胜利玩家。
// 请你返回游戏中 胜利玩家 的数目。

// 注意，可能有多个玩家是胜利玩家。

/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
  const arr = new Array(n).fill(0).map((v) => new Array(11).fill(0));
  for (const [x, y] of pick) {
    arr[x][y]++;
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (const num of arr[i]) {
      if (num > i) {
        res++;
        break;
      }
    }
  }
  return res;
};
