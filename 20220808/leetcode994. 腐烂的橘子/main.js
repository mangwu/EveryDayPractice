/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-08 17:17:21                                                  *
 * @LastModifiedDate: 2022-08-08 17:30:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
//
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // 全部橘子
  let oranges = 0;
  const m = grid.length;
  const n = grid[0].length;
  // 报错腐烂橘子
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
        oranges++;
      } else if (grid[i][j] == 1) {
        // 新鲜橘子
        oranges++;
      }
    }
  }
  if (queue.length == oranges) {
    // 所有橘子都腐烂了
    return 0;
  }
  if (queue.length == 0) {
    // 没有一个腐烂的橘子，不可能让其它橘子腐烂
    return -1;
  }
  // 腐烂的橘子个数
  let rottingOranges = 0;
  let ans = 0;
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      rottingOranges++;
      for (const dir of DIRS) {
        const x = dir[0] + q[0];
        const y = dir[1] + q[1];
        if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == 1) {
          nxt.push([x, y]);
          // 腐烂橘子
          grid[x][y] = 2;
        }
      }
    }
    ans++;
    queue = nxt;
  }
  return rottingOranges == oranges ? ans : -1;
};

[
  [2, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 1],
  [0, 1, 2, 1, 1, 0],
  [1, 0, 0, 0, 1, 1],
];
