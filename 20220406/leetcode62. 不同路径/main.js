/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-06 23:54:59                                                  *
 * @LastModifiedDate: 2022-04-07 00:14:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 当前的位置的路径数，等于上面的一个位置和左边位置的路径和
  const dp = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let top = i - 1 >= 0 ? dp[i - 1][j] : 0;
      let left = j - 1 >= 0 ? dp[i][j - 1] : 0;
      dp[i][j] = top + left;
    }
  }
  return dp[m - 1][n - 1];
};
