/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 13:58:29                                                  *
 * @LastModifiedDate: 2022-03-29 15:56:04                                      *
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
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  // dfs
  const dfs = (i, j) => {
    grid[i][j] = 0;
    for (const dir of DIRS) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == "1") {
        dfs(x, y);
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        res++;
      }
    }
  }
  return res;
};

// 广度优先搜索
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        res++;
        // 开始广度优先搜索
        let queue = [[i, j]];
        grid[i][j] = 0;
        while (queue.length > 0) {
          const nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              const x = q[0] + dir[0];
              const y = q[1] + dir[1];
              if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == "1") {
                grid[x][y] = 0;
                nxt.push([x, y]);
              }
            }
          }
          queue = nxt;
        }
      }
    }
  }
  console.log(res);
  return res;
};
numIslands([
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "0",
    "1",
    "1",
  ],
  [
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
  ],
  [
    "1",
    "0",
    "1",
    "1",
    "1",
    "0",
    "0",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
]);
