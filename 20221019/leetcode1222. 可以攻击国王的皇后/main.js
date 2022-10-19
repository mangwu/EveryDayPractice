/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-19 10:05:52                                                  *
 * @LastModifiedDate: 2022-10-19 10:17:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。

// 给定一个由整数坐标组成的数组 queens ，表示黑皇后的位置；
// 以及一对坐标 king ，表示白国王的位置，返回所有可以攻击国王的皇后的坐标(任意顺序)。

const DIRS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  // 遍历queens，记录位置
  const hash = new Map();
  for (const queen of queens) {
    hash.has(queen[0])
      ? hash.get(queen[0]).add(queen[1])
      : hash.set(queen[0], new Set([queen[1]]));
  }
  const ans = [];
  for (const dir of DIRS) {
    let x = king[0];
    let y = king[1];
    while (x >= 0 && y >= 0 && x < 8 && y < 8) {
      x += dir[0];
      y += dir[1];
      if (hash.has(x) && hash.get(x).has(y)) {
        ans.push([x, y]);
        break;
      }
    }
  }
  return ans;
};
