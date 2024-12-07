/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-06 17:53:39                                                  *
 * @LastModifiedDate: 2024-12-06 18:04:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 8 x 8 的棋盘，只有一个 白色的车，用字符 'R' 表示。棋盘上还可能存在白色的象 'B' 以及黑色的卒 'p'。空方块用字符 '.' 表示。

// 车可以按水平或竖直方向（上，下，左，右）移动任意个方格直到它遇到另一个棋子或棋盘的边界。如果它能够在一次移动中移动到棋子的方格，则能够 吃掉 棋子。

// 注意：车不能穿过其它棋子，比如象和卒。这意味着如果有其它棋子挡住了路径，车就不能够吃掉棋子。

// 返回白车 攻击 范围内 兵的数量。
const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let res = 0;
  outer: for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        for (const dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;
          while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (board[x][y] === "B") break;
            if (board[x][y] === "p") {
              res++;
              break;
            }
            x += dir[0];
            y += dir[1];
          }
        }
        break outer;
      }
    }
  }
  return res;
};
