/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-26 08:54:23                                                  *
 * @LastModifiedDate: 2023-05-26 11:27:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (n === 1 && grid[0][0] === 0) return 1;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
  let queue = [[0, 0]];
  let res = 1;
  grid[0][0] = 1;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      for (const dir of DIRS) {
        const x = q[0] + dir[0];
        const y = q[1] + dir[1];
        if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0) {
          nxt.push([x, y]);
          grid[x][y] = 1;
          if (x === n - 1 && y === n - 1) return res + 1;
        }
      }
    }
    res++;
    queue = nxt;
  }
  return -1;
};
