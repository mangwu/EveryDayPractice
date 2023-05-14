/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-14 11:16:55                                                  *
 * @LastModifiedDate: 2023-05-14 11:32:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、大小为 m x n 的矩阵 grid ，矩阵由若干 正 整数组成。

// 你可以从矩阵第一列中的 任一 单元格出发，按以下方式遍历 grid ：

// 从单元格 (row, col) 可以移动到 (row - 1, col + 1)、(row, col + 1) 和 (row + 1, col + 1) 三个单元格中任一满足值 严格 大于当前单元格的单元格。
// 返回你在矩阵中能够 移动 的 最大 次数。

const DIRS = [
  [-1, 1],
  [0, 1],
  [1, 1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  // 只能从第一列开始出发
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const visited = [];
  for (let j = 0; j < m; j++) {
    if (!visited[j * n]) {
      visited[j * n] = true;
      res = Math.max(res, bfs(grid, [j, 0], visited));
    }
  }
  return res;
};
var bfs = function (grid, start, visited) {
  const m = grid.length;
  const n = grid[0].length;
  let queue = [start];
  let res = 0;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      for (const dir of DIRS) {
        const x = q[0] + dir[0];
        const y = q[1] + dir[1];
        if (
          x >= 0 &&
          x < m &&
          y >= 0 &&
          y < n &&
          grid[x][y] > grid[q[0]][q[1]] &&
          !visited[x * n + y]
        ) {
          visited[x * n + y] = true;
          nxt.push([x, y]);
        }
      }
    }
    if (nxt.length) {
      res++;
    }
    queue = nxt;
  }
  return res;
};
