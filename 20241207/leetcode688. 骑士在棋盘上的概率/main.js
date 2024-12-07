/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-07 22:58:11                                                  *
 * @LastModifiedDate: 2024-12-08 01:38:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。

// 象棋骑士有8种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。
const dirs = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  if (k === 0) return 1;
  const dp = new Array(n)
    .fill(0)
    .map((v) => new Array(n).fill(0).map((v) => new Array(k + 1).fill(0)));
  for (let m = 0; m <= k; m++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (m === 0) {
          dp[i][j][m] = 1;
        } else {
          for (const dir of dirs) {
            const x = i + dir[0];
            const y = j + dir[1];
            if (x >= 0 && x < n && y >= 0 && y < n)
              dp[i][j][m] += dp[x][y][m - 1] / 8.0;
          }
        }
      }
    }
  }
  console.log(dp);
  return dp[row][column][k];
};

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  if (k === 0) return 1;
  const dp = new Array(n)
    .fill(0)
    .map((v) => new Array(n).fill(0).map((v) => new Array(k + 1).fill(0)));
  for (let kk = 0; kk <= k; kk++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (kk === 0) {
          dp[i][j][kk] = 1;
        } else {
          for (const dir of dirs) {
            const x = i + dir[0];
            const y = j + dir[1];
            if (x >= 0 && x < n && y >= 0 && y < n) {
              dp[i][j][kk] = dp[i][j][kk] + dp[x][y][kk - 1] / 8;
            }
          }
        }
      }
    }
  }

  return dp[row][column][k];
};
