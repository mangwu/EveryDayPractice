/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-26 17:49:59                                                  *
 * @LastModifiedDate: 2023-02-26 20:09:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 的矩阵 grid ，每个元素都为 非负 整数，其中 grid[row][col] 表示可以访问格子 (row, col) 的 最早 时间。也就是说当你访问格子 (row, col) 时，最少已经经过的时间为 grid[row][col] 。

// 你从 最左上角 出发，出发时刻为 0 ，你必须一直移动到上下左右相邻四个格子中的 任意 一个格子（即不能停留在格子上）。每次移动都需要花费 1 单位时间。

// 请你返回 最早 到达右下角格子的时间，如果你无法到达右下角的格子，请你返回 -1 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  // bfs
  // 只要初始位置有相邻的0和1就能到达终点
  let queue = [[0, 0]];
  const m = grid.length;
  const n = grid[0].length;
  let time = 0;
  // 可以重复访问格子
  while (queue.length) {}
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  // 只要初始位置有相邻的0和1就能到达终点
  const m = grid.length;
  const n = grid[0].length;
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
  // 动态规划
  const dp = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let top = i > 0 ? dp[i - 1][j] : Infinity;
      let left = j > 0 ? dp[i][j - 1] : Infinity;
      let cur = Math.min(top, left);
      if (grid[i][j] - 1 > cur) {
        dp[i][j] = grid[i][j] + ((grid[i][j] - cur - 1) % 2);
      } else {
        dp[i][j] = cur + 1;
      }
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};

[
  [0, 1, 4, 5],
  [5, 2, 3, 6],
  [6, 3, 8, 7],
];

// 上述解答错误
// dp的值不应该仅由上左两个绝对，要有上下左右4个值决定
// 例如 
// 0 1 9 2   
// 1 0 0 1
// 1 0 0 0
// => 2所在位置的最小到达时间不仅取决于左边的值还取决于下面的
//    最终结果应该是

