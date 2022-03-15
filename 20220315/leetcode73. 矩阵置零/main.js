/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-15 19:12:22                                                  *
 * @LastModifiedDate: 2022-03-15 19:26:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 记录每个0的索引位置，在索引位置进行横向和竖向遍历修改即可
  const zeroIdx = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroIdx.push([i, j]);
      }
    }
  }
  while (zeroIdx.length > 0) {
    const top = zeroIdx.pop();
    const x = top[0];
    const y = top[1];
    // 横向
    for (let i = 0; i < n; i++) {
      matrix[x][i] = 0;
    }
    // 竖向
    for (let j = 0; j < m; j++) {
      matrix[j][y] = 0;
    }
  }
};

// 上述方法会重复置相同行或者列的0，空间复杂度最大为O(m*n)
// 使用标记法表示该行或者列是否需要置0，减少一些重复置0法，空间复杂度为O(m + n)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 标记法
  const m = matrix.length;
  const n = matrix[0].length;
  const row = new Array(m).fill(false);
  const column = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }
  // 遍历置0
  for (let i = 0; i < m; i++) {
    // 如果为真
    if (row[i]) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    // 如果为真
    if (column[i]) {
      for (let j = 0; j < m; j++) {
        matrix[j][i] = 0;
      }
    }
  }
};
