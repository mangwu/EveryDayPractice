/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-13 08:51:16                                                  *
 * @LastModifiedDate: 2023-07-13 09:01:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  // 动态规划
  const n = matrix.length;
  const dp = new Array(n).fill(0).map((v) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const left = j - 1 >= 0 ? dp[i - 1][j - 1] : Infinity;
      const top = dp[i - 1][j];
      const right = j + 1 < n ? dp[i - 1][j + 1] : Infinity;
      dp[i][j] = Math.min(left, top, right) + matrix[i][j];
    }
  }
  return Math.min.apply(null, dp[n - 1]);
};
