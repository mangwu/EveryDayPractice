/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-19 10:35:46                                                  *
 * @LastModifiedDate: 2023-03-19 10:45:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 骑士在一张 n x n 的棋盘上巡视。在有效的巡视方案中，骑士会从棋盘的 左上角 出发，并且访问棋盘上的每个格子 恰好一次 。

// 给你一个 n x n 的整数矩阵 grid ，由范围 [0, n * n - 1] 内的不同整数组成，其中 grid[row][col] 表示单元格 (row, col) 是骑士访问的第 grid[row][col] 个单元格。骑士的行动是从下标 0 开始的。

// 如果 grid 表示了骑士的有效巡视方案，返回 true；否则返回 false。

// 注意，骑士行动时可以垂直移动两个格子且水平移动一个格子，或水平移动两个格子且垂直移动一个格子。下图展示了骑士从某个格子出发可能的八种行动路线。

const DIRS = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
];

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  let queue = [[0, 0]];
  const n = grid.length;
  const visited = [];
  visited[0] = true;
  let index = 1;
  while (index < n * n) {
    let cur = queue.pop();
    let flag = false;
    for (const dir of DIRS) {
      let x = cur[0] + dir[0];
      let y = cur[1] + dir[1];
      if (
        x >= 0 &&
        y >= 0 &&
        x < n &&
        y < n &&
        !visited[x * n + y] &&
        grid[x][y] === index
      ) {
        flag = true;
        visited[x * n + y] = true;
        queue.push([x, y]);
        break;
      }
    }
    if (!flag) {
      return false;
    }
    index++;
  }
  return true;
};
