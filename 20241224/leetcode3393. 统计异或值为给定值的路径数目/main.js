/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-24 22:56:38                                                  *
 * @LastModifiedDate: 2024-12-24 23:35:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 的二维整数数组 grid 和一个整数 k 。

// 你的任务是统计满足以下 条件 且从左上格子 (0, 0) 出发到达右下格子 (m - 1, n - 1) 的路径数目：

// 每一步你可以向右或者向下走，也就是如果格子存在的话，可以从格子 (i, j) 走到格子 (i, j + 1) 或者格子 (i + 1, j) 。
// 路径上经过的所有数字 XOR 异或值必须 等于 k 。
// 请你返回满足上述条件的路径总数。

// 由于答案可能很大，请你将答案对 109 + 7 取余 后返回。

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countPathsWithXorValue = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const mod = 10 ** 9 + 7;
  const cache = new Array(m)
    .fill(0)
    .map((v) => new Array(n).fill(0).map((v) => new Array(16).fill(-1)));
  const dfs = (i, j, cur) => {
    if (i >= m || j >= n) return 0;
    const xorNum = cur ^ grid[i][j];
    if (i === m - 1 && j === n - 1) {
      if (xorNum === k) return 1;
      return 0;
    }
    if (cache[i][j][cur] !== -1) return cache[i][j][cur];
    let res = dfs(i + 1, j, xorNum);
    res %= mod;
    res += dfs(i, j + 1, xorNum);
    res %= mod;
    cache[i][j][cur] = res;
    return res;
  };
  const res = dfs(0, 0, 0);
  return res;
};

const random = require("../../publicFunc/random/random");
countPathsWithXorValue(
  new Array(300).fill(0).map((v) => random.randomArr(300, 0, 16)),
  12
);
