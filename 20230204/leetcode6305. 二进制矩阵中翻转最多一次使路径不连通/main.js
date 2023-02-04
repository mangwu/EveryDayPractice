/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-04 22:48:10                                                  *
 * @LastModifiedDate: 2023-02-05 00:46:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 m x n 二进制 矩阵 grid 。你可以从一个格子 (row, col) 移动到格子 (row + 1, col) 或者 (row, col + 1) ，前提是前往的格子值为 1 。如果从 (0, 0) 到 (m - 1, n - 1) 没有任何路径，我们称该矩阵是 不连通 的。

// 你可以翻转 最多一个 格子的值（也可以不翻转）。你 不能翻转 格子 (0, 0) 和 (m - 1, n - 1) 。

// 如果可以使矩阵不连通，请你返回 true ，否则返回 false 。

// 注意 ，翻转一个格子的值，可以使它的值从 0 变 1 ，或从 1 变 0 。
const DIRS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // 0是必定不连通的
  if (grid[m - 1][n - 1] === 0) return true;
  // 进行路径选择
  const path = [[0, 0]];
  const visited = [];
  let cur = 0;
  let paths = [];
  // const 
  visited[0] = true;
  let ans = true;
  const dfs = (x, y) => {
    if (x === m - 1 && y === n - 1) {
      // 找到一条路径,进行比对,找到是否有一个点能阻断所有路径
      if(paths.length == 0) {
        paths.push(JSON.parse(JSON.stringify(path)));
      }
    }
    for (const dir of DIRS) {
      const i = dir[0] + x;
      const j = dir[1] + y;
      if (i >= 0 && i < m && j >= 0 && j < n && !visited[i * n + j]) {
        visited[i * n + j] = true;
        path.push([i, j]);
        dfs(i, j);
        visited[i * n + j] = false;
        path.pop();
      }
    }
  };
  return ans;
};
