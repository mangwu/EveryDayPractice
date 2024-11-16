/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-16 23:02:11                                                  *
 * @LastModifiedDate: 2024-11-16 23:44:53                                      *
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

// 请你返回 最少 翻转次数，使得矩阵中 所有 行和列都是 回文的 ，且矩阵中 1 的数目可以被 4 整除 。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const halfM = Math.floor(m / 2);
  const halfN = Math.floor(n / 2);
  for (let i = 0; i < halfM; i++) {
    for (let j = 0; j < halfN; j++) {
      const oneNum =
        grid[i][j] +
        grid[i][n - j - 1] +
        grid[m - i - 1][j] +
        grid[m - i - 1][n - j - 1];
      res += Math.min(oneNum, 4 - oneNum);
    }
  }
  let oneNums = 0;
  let diff = 0;
  if (m % 2 === 1) {
    // grid[halfM] 是需要单独判断的回文行
    for (let i = 0; i < halfN; i++) {
      if (grid[halfM][i] !== grid[halfM][n - i - 1]) diff++;
      else if (grid[halfM][i] === 1) oneNums += 2;
    }
  }
  if (n % 2 === 1) {
    // grid[x][halfN]是需要单独判断的回文列
    for (let j = 0; j < halfM; j++) {
      if (grid[j][halfN] !== grid[m - j - 1][halfN]) diff++;
      else if (grid[j][halfN] === 1) oneNums += 2;
    }
  }
  if (oneNums % 4 === 0 || diff >= 1) res += diff;
  else res += oneNums % 4;
  // 中心需要判断
  if (m % 2 === 1 && n % 2 === 1 && grid[halfM][halfN] === 1) res++;
  return res;
};
