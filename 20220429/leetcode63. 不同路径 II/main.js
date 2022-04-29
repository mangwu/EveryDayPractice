/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 11:02:48                                                  *
 * @LastModifiedDate: 2022-04-29 11:22:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 网格中的障碍物和空位置分别用 1 和 0 来表示。
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  // start和end是否有障碍物
  if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) {
    return 0;
  }
  const dp = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      if (obstacleGrid[i][j] == 0) {
        let x = i - 1;
        let y = j - 1;
        let left = 0;
        let top = 0;
        if (x >= 0) {
          top = dp[x][j];
        }
        if (y >= 0) {
          left = dp[i][y];
        }
        dp[i][j] = top + left;
      }
    }
  }
  return dp[m - 1][n - 1];
};
