/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-15 10:53:55                                                  *
 * @LastModifiedDate: 2024-08-15 11:15:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 正整数 组成、大小为 m x n 的矩阵 grid。你可以从矩阵中的任一单元格移动到另一个位于正下方或正右侧的任意单元格（不必相邻）。从值为 c1 的单元格移动到值为 c2 的单元格的得分为 c2 - c1 。

// 你可以从 任一 单元格开始，并且必须至少移动一次。

// 返回你能得到的 最大 总得分。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  // 动态规划
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(-1).map((v) => new Array(n).fill(0));
  let res = 0;
  let maxOneStep = -Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let top = i > 0 ? dp[i - 1][j] + grid[i][j] - grid[i - 1][j] : 0;
      let left = j > 0 ? dp[i][j - 1] + grid[i][j] - grid[i][j - 1] : 0;
      maxOneStep = Math.max(
        maxOneStep,
        i > 0 ? grid[i][j] - grid[i - 1][j] : -Infinity,
        j > 0 ? grid[i][j] - grid[i][j - 1] : -Infinity
      );
      dp[i][j] = Math.max(dp[i][j], top, left);
      res = Math.max(res, dp[i][j]);
    }
  }
  return res === 0 ? maxOneStep : res;
};
