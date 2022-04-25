/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-25 15:54:17                                                  *
 * @LastModifiedDate: 2022-04-25 16:02:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 动态规划
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let left = i > 0 ? dp[i - 1][j] : Infinity;
      let right = j > 0 ? dp[i][j - 1] : Infinity;
      dp[i][j] = Math.min(left + grid[i][j], right + grid[i][j]);
    }
  }
  return dp[m - 1][n - 1];
};
