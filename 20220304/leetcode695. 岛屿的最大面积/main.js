/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-04 15:00:26                                                  *
 * @LastModifiedDate: 2022-03-04 16:20:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

const DIRS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // 使用dfs和bfs均可求解
  const lenx = grid.length;
  const leny = grid[0].length;
  const dfs = (x, y) => {
    if (grid[x][y] === 0) {
      return 0;
    }
    let sum = 1;
    grid[x][y] = 0;
    for (const dir of DIRS) {
      const i = x + dir[0];
      const j = y + dir[1];
      if (i >= 0 && i < lenx && j >= 0 && j < leny) {
        sum = sum + dfs(i, j);
      }
    }
    return sum;
  };
  let max = 0;
  for (let i = 0; i < lenx; i++) {
    for (let j = 0; j < leny; j++) {
      if (grid[i][j]) {
        max = Math.max(max, dfs(i, j));
      }
    }
  }
  // console.log(max);
  return max;
};
// 调试过程中犯了两个错误 => 1.leny计算错误 2.j < leny 写成 j <= leny
maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);

var maxAreaOfIsland2 = (grid) => {
  let ans = 0;
  for (let i = 0; i != grid.length; ++i) {
    for (let j = 0; j != grid[0].length; ++j) {
      ans = Math.max(ans, dfs2(grid, i, j));
    }
  }
  console.log(ans);
  return ans;
};

const dfs2 = (grid, cur_i, cur_j) => {
  if (
    cur_i < 0 ||
    cur_j < 0 ||
    cur_i == grid.length ||
    cur_j == grid[0].length ||
    grid[cur_i][cur_j] !== 1
  ) {
    return 0;
  }
  grid[cur_i][cur_j] = 0;
  let ans = 1;
  for (const dir of DIRS) {
    const next_i = cur_i + dir[0];
    const next_j = cur_j + dir[1];
    ans += dfs2(grid, next_i, next_j);
  }
  return ans;
};

maxAreaOfIsland2([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);
