/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-18 21:32:43                                                  *
 * @LastModifiedDate: 2023-06-18 22:17:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 二维矩阵 grid 由 0 （土地）和 1 （水）组成。岛是由最大的4个方向连通的 0 组成的群，封闭岛是一个 完全 由1包围（左、上、右、下）的岛。

// 请返回 封闭岛屿 的数目。

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
var closedIsland = function (grid) {
  // 联通的0
  const visited = [];
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 0 && !visited[i * n + j]) {
        // bfs遍历
        let isIsland = true;
        let queue = [[i, j]];
        visited[i * n + j] = true;
        while (queue.length) {
          const nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              const x = q[0] + dir[0];
              const y = q[1] + dir[1];
              if (x >= 0 && x < m && y >= 0 && y < n && !visited[x * n + y]) {
                if (x === 0 || y === 0 || x === m - 1 || y === n - 1) {
                  if (grid[x][y] === 0) {
                    nxt.push([x, y]);
                    visited[x * n + y] = true;
                    isIsland = false;
                    continue;
                  }
                } else if (grid[x][y] === 0) {
                  visited[x * n + y] = true;
                  nxt.push([x, y]);
                }
              }
            }
          }
          queue = nxt;
        }
        if (isIsland) res++;
      }
    }
  }
  return res;
};
