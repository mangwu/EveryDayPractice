/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-14 22:17:56                                                  *
 * @LastModifiedDate: 2024-07-14 22:39:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一座由 n x n 个街区组成的城市，每个街区都包含一座立方体建筑。给你一个下标从 0 开始的 n x n 整数矩阵 grid ，其中 grid[r][c] 表示坐落于 r 行 c 列的建筑物的 高度 。

// 城市的 天际线 是从远处观察城市时，所有建筑物形成的外部轮廓。从东、南、西、北四个主要方向观测到的 天际线 可能不同。

// 我们被允许为 任意数量的建筑物 的高度增加 任意增量（不同建筑物的增量可能不同） 。 高度为 0 的建筑物的高度也可以增加。然而，增加的建筑物高度 不能影响 从任何主要方向观察城市得到的 天际线 。

// 在 不改变 从任何主要方向观测到的城市 天际线 的前提下，返回建筑物可以增加的 最大高度增量总和 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  // 每个位置的最大增量是每个方向上天际线的值的最小值
  const m = grid.length;
  const n = grid[0].length;
  const vertical = new Array(n).fill(0);
  const horizon = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      horizon[i] = Math.max(horizon[i], grid[i][j]);
      vertical[j] = Math.max(vertical[j], grid[i][j]);
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans += Math.min(horizon[i], vertical[j]) - grid[i][j];
    }
  }
  return ans;
};
