/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-26 22:35:54                                                  *
 * @LastModifiedDate: 2022-11-26 22:56:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 m x n 二进制矩阵 grid 。

// 我们按照如下过程，定义一个下标从 0 开始的 m x n 差值矩阵 diff ：

// 令第 i 行一的数目为 onesRowi 。
// 令第 j 列一的数目为 onesColj 。
// 令第 i 行零的数目为 zerosRowi 。
// 令第 j 列零的数目为 zerosColj 。
// diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
// 请你返回差值矩阵 diff 。

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const rows = [];
  const cols = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    let cur = 0;
    for (let j = 0; j < n; j++) {
      cur += grid[i][j];
      cols[j] += grid[i][j];
    }
    rows[i] = cur;
  }
  const ans = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = rows[i] + cols[j] - (n - rows[i]) - (m - cols[j]);
    }
  }
  return ans;
};
