/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-06 23:32:15                                                  *
 * @LastModifiedDate: 2022-03-07 00:18:53                                      *
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
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // 多源bfs
  // 先遍历一遍获得腐烂橘子,并记录未腐烂橘子个数
  // 然后进行多源bfs遍历,记录遍历层数和腐烂传播的橘子个数
  let normalO = 0;
  const bad = [];
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        normalO++;
      }
      if (grid[i][j] == 2) {
        bad.push([i, j]);
      }
    }
  }
  // 如果没有新鲜橘子就返回0
  if (normalO == 0) {
    return 0;
  }
  // 如果没有腐烂橘子就返回不可能(-1)
  if (bad.length == 0) {
    return -1;
  }
  // 开始多源bfs遍历
  let queue = bad;
  let minute = 0;
  let num = 0;
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      for (const dir of DIRS) {
        const x = dir[0] + q[0];
        const y = dir[1] + q[1];
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == 1) {
          nxt.push([x, y]);
          // 变为腐烂橘子
          grid[x][y] = 2;
          // 记录一次变为腐烂橘子的正常橘子
          num++;
        }
      }
    }
    // 完成一次腐化过程
    minute++;
    queue = nxt;
  }
  // 最后要判断是否全部腐烂了
  return num == normalO ? minute : -1;
};
