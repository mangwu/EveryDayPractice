/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-29 08:59:17                                                  *
 * @LastModifiedDate: 2024-08-29 09:36:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 的二维矩阵 grid 。你需要判断每一个格子 grid[i][j] 是否满足：

// 如果它下面的格子存在，那么它需要等于它下面的格子，也就是 grid[i][j] == grid[i + 1][j] 。
// 如果它右边的格子存在，那么它需要不等于它右边的格子，也就是 grid[i][j] != grid[i][j + 1] 。
// 如果 所有 格子都满足以上条件，那么返回 true ，否则返回 false 。

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let preColNum = null;
  for (let i = 0; i < n; i++) {
    preRowNum = grid[0][i];
    if (preRowNum === preColNum) return false;
    for (let j = 1; j < m; j++) {
      if (grid[j][i] !== preRowNum) return false;
    }
    preColNum = preRowNum;
  }
  return true;
};
