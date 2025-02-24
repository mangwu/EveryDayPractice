/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 17:33:06                                                  *
 * @LastModifiedDate: 2025-02-24 17:37:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let res = 0;
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m).fill(0).map((v) => new Array(n).fill(false));
  const bfs = (start) => {
    let queue = [start];
    while (queue.length) {
      const nxt = [];
      for (const [x, y] of queue) {
        for (const dir of dirs) {
          const i = x + dir[0];
          const j = y + dir[1];
          if (
            i >= 0 &&
            i < m &&
            j >= 0 &&
            j < n &&
            !visited[i][j] &&
            grid[i][j] === "1"
          ) {
            visited[i][j] = true;
            nxt.push([i, j]);
          }
        }
      }
      queue = nxt;
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        res++;
        bfs([i, j]);
      }
    }
  }
  return res;
};
