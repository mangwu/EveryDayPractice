/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-23 19:30:27                                                  *
 * @LastModifiedDate: 2025-02-23 19:38:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。

// 网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。

// 返回机器人能够到达右下角的不同路径数量。

// 测试用例保证答案小于等于 2 * 109。

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (obstacleGrid[i][j] === 0) {
        const top = i > 0 ? dp[i - 1][j] : 0;
        const left = j > 0 ? dp[i][j - 1] : 0;
        dp[i][j] = top + left;
      }
    }
  }
  return dp[m - 1][n - 1];
};
