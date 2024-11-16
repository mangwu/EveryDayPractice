/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-15 23:14:46                                                  *
 * @LastModifiedDate: 2024-11-15 23:20:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 的二进制矩阵 grid 。

// 如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。

// 你可以将 grid 中任意格子的值 翻转 ，也就是将格子里的值从 0 变成 1 ，或者从 1 变成 0 。

// 请你返回 最少 翻转次数，使得矩阵 要么 所有行是 回文的 ，要么所有列是 回文的 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // 所有行回文
  let rowRes = 0;
  for (const row of grid) {
    for (let i = 0; i < n / 2; i++) {
      if (row[i] !== row[n - i - 1]) rowRes++;
    }
  }
  // 所有列回文
  let columnRes = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m / 2; i++) {
      if (grid[i][j] !== grid[m - i - 1][j]) columnRes++;
    }
  }
  return Math.min(rowRes, columnRes);
};

