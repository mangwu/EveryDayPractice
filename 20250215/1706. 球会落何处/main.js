/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 22:26:26                                                  *
 * @LastModifiedDate: 2025-02-15 22:38:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 用一个大小为 m x n 的二维网格 grid 表示一个箱子。你有 n 颗球。箱子的顶部和底部都是开着的。

// 箱子中的每个单元格都有一个对角线挡板，跨过单元格的两个角，可以将球导向左侧或者右侧。

// 将球导向右侧的挡板跨过左上角和右下角，在网格中用 1 表示。
// 将球导向左侧的挡板跨过右上角和左下角，在网格中用 -1 表示。
// 在箱子每一列的顶端各放一颗球。每颗球都可能卡在箱子里或从底部掉出来。如果球恰好卡在两块挡板之间的 "V" 形图案，或者被一块挡导向到箱子的任意一侧边上，就会卡住。

// 返回一个大小为 n 的数组 answer ，其中 answer[i] 是球放在顶部的第 i 列后从底部掉出来的那一列对应的下标，如果球卡在盒子里，则返回 -1 。

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  // grid[i][j] = 1 ：向右下角移动 ，如果grid[i][j+1] === 1，则移动到grid[i+1][j+1]
  // grid[i][j] = -1：向左小角移动，如果grid[i][j-1] === -1，则移动到grid[i+1][j-1]
  const m = grid.length;
  const n = grid[0].length;
  const dfs = (i, j) => {
    if (i === m) return [i, j];
    if (grid[i][j] === 1) {
      if (j + 1 < n && grid[i][j + 1] === 1) return dfs(i + 1, j + 1);
      return [i, j]; // 无法继续向下
    } else {
      if (j - 1 >= 0 && grid[i][j - 1] === -1) return dfs(i + 1, j - 1);
      return [i, j]; // 无法继续向下
    }
  };
  let res = new Array(n).fill(-1);
  for (let j = 0; j < n; j++) {
    const [x, y] = dfs(0, j);
    if (x === m) res[j] = y;
  }
  return res;
};
