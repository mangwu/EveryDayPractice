/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 10:31:24                                                  *
 * @LastModifiedDate: 2022-08-14 10:36:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 n x n 的整数矩阵 grid 。

// 生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：

// maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
// 换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。

// 返回生成的矩阵。

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let n = grid.length;
  let ans = new Array(n - 2).fill(0).map((v) => new Array(n - 2).fill(0));
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let max = Math.max(
        grid[i][j],
        grid[i + 1][j],
        grid[i - 1][j],
        grid[i][j + 1],
        grid[i][j - 1],
        grid[i + 1][j + 1],
        grid[i - 1][j - 1],
        grid[i + 1][j - 1],
        grid[i - 1][j + 1]
      );
      ans[i - 1][j - 1] = max;
    }
  }
  return ans;
};
