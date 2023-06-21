/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-21 08:41:14                                                  *
 * @LastModifiedDate: 2023-06-21 09:33:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在 n*m 大小的棋盘中，有黑白两种棋子，黑棋记作字母 "X", 白棋记作字母 "O"，
// 空余位置记作 "."。当落下的棋子与其他相同颜色的棋子在行、列或对角线完全包围
// （中间不存在空白位置）另一种颜色的棋子，则可以翻转这些棋子的颜色。
// 「力扣挑战赛」黑白翻转棋项目中，将提供给选手一个未形成可翻转棋子的棋盘残局，
// 其状态记作 chessboard。若下一步可放置一枚黑棋，请问选手最多能翻转多少枚白棋。

const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]; // 八个方向

/**
 * @param {string[]} chessboard
 * @return {number}
 */
var flipChess = function (chessboard) {
  // 暴力解法
  let res = 0;
  const m = chessboard.length;
  const n = chessboard[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (chessboard[i][j] === ".") {
        const copy = chessboard.map((v) => v.split(""));
        let queue = [[i, j]];
        copy[i][j] = "X";

        let curRes = 0;
        while (queue.length) {
          let nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              let curNxt = [];
              let isLegal = false;
              let x = q[0] + dir[0];
              let y = q[1] + dir[1];
              while (x >= 0 && x < m && y >= 0 && y < n) {
                if (copy[x][y] === "O") {
                  curNxt.push([x, y]);
                } else if (copy[x][y] === "X") {
                  isLegal = true;
                  break;
                } else {
                  isLegal = false;
                  break;
                }
                x += dir[0];
                y += dir[1];
              }
              if (isLegal) {
                // 能够翻转
                for (const item of curNxt) {
                  nxt.push(item);
                  copy[item[0]][item[1]] = "X";
                }
                curRes += curNxt.length;
              }
            }
          }
          queue = nxt;
        }
        res = Math.max(res, curRes);
      }
    }
  }
  return res;
};

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
console.log(
  flipChess([
    ".......X....",
    "....XOOO....",
    "....O.X.....",
    "X...O..X....",
    ".OOOOOX.....",
    "..O.........",
    "....OOX.....",
  ])
);
