/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-04 08:52:08                                                  *
 * @LastModifiedDate: 2023-08-04 10:55:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在二维网格 grid 上，有 4 种类型的方格：

// 1 表示起始方格。且只有一个起始方格。
// 2 表示结束方格，且只有一个结束方格。
// 0 表示我们可以走过的空方格。
// -1 表示我们无法跨越的障碍。
// 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。

// 每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。
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
var uniquePathsIII = function (grid) {
  let start = null;
  let end = null;
  let num = 0;
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) start = [i, j];
      else if (grid[i][j] === 2) end = [i, j];
      else if (grid[i][j] === 0) num++;
    }
  }
  num += 2; // 包括起始和结束点
  const visited = [];
  visited[start[0] * m + start[1]] = true;
  const path = [start];
  let res = 0;
  // 每一个无障碍方格都要通过一次
  const dfs = (i, j) => {
    if (i === end[0] && j === end[1] && path.length === num) {
      res++;
      return;
    }
    for (const dir of DIRS) {
      const x = dir[0] + i;
      const y = dir[1] + j;
      if (
        x < n &&
        x >= 0 &&
        y < m &&
        y >= 0 &&
        grid[x][y] !== -1 &&
        !visited[x * m + y]
      ) {
        path.push([x, y]);
        visited[x * m + y] = true;
        dfs(x, y);
        path.pop();
        visited[x * m + y] = false;
      }
    }
  };
  dfs(start[0], start[1]);
  return res;
};

[
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
