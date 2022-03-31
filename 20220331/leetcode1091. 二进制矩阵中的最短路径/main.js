/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-31 09:14:03                                                  *
 * @LastModifiedDate: 2022-03-31 09:39:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

// 二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：

// 路径途经的所有单元格都的值都是 0 。
// 路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
// 畅通路径的长度 是该路径途经的单元格总数。

// BFS
const DIRS = [
  [1, 1],
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) {
    return -1;
  }
  if(n == 1) {
    return 1;
  }
  // bfs
  let ans = 1;
  let queue = [[0, 0]];
  grid[0][0] == 1;
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      for (const dir of DIRS) {
        const x = q[0] + dir[0];
        const y = q[1] + dir[1];
        if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] == 0) {
          nxt.push([x, y]);
          grid[x][y] = 1;
          if (x == n - 1 && y == n - 1) {
            return ans + 1;
          }
        }
      }
    }
    ans++;
    queue = nxt;
  }
  return -1;
};
