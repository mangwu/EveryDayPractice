/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-24 17:25:16                                                  *
 * @LastModifiedDate: 2022-04-24 19:56:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 连通的1的个数
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  // bfs 使用原始数组作为visited
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        ans++;
        let queue = [[i, j]];
        grid[i][j] = "0";
        while (queue.length > 0) {
          let nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              const x = q[0] + dir[0];
              const y = q[1] + dir[1];
              if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == "1") {
                nxt.push([x, y]);
                grid[x][y] = "0";
              }
            }
          }
          queue = nxt;
        }
      }
    }
  }
  return ans;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  const visited = [];
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      visited[i * n + j] ||
      grid[i][j] == "0"
    ) {
      return;
    }
    visited[i * n + j] = true;
    for (const dir of DIRS) {
      const x = dir[0] + i;
      const y = dir[1] + j;
      dfs(x, y);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1" && !visited[i * n + j]) {
        ans++;
        dfs(i, j);
      }
    }
  }
  return ans;
};

[
  ["1", "0", "1", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "1", "1"],
];
