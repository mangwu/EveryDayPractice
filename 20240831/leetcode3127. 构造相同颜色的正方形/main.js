/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-31 22:48:51                                                  *
 * @LastModifiedDate: 2024-08-31 23:18:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维 3 x 3 的矩阵 grid ，每个格子都是一个字符，要么是 'B' ，要么是 'W' 。字符 'W' 表示白色，字符 'B' 表示黑色。

// 你的任务是改变 至多一个 格子的颜色，使得矩阵中存在一个 2 x 2 颜色完全相同的正方形。

// 如果可以得到一个相同颜色的 2 x 2 正方形，那么返回 true ，否则返回 false 。

const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const color = grid[i][j];
      let same = 0;
      for (const dir of dirs) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === color) {
          same++;
        } else {
          same = 0;
        }
        if (same >= 2) return true;
      }
    }
  }
  return false;
};
