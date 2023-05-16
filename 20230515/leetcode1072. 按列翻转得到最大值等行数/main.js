/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-15 08:37:55                                                  *
 * @LastModifiedDate: 2023-05-15 08:58:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 m x n 矩阵 matrix 。

// 你可以从中选出任意数量的列并翻转其上的 每个 单元格。（即翻转后，单元格的值从 0 变成 1，或者从 1 变为 0 。）

// 返回 经过一些翻转后，行与行之间所有值都相等的最大行数 。

// [
//   [0, 0, 0],
//   [0, 0, 1],
//   [1, 1, 0],
// ];

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  // 计算每行变成全0或全1需要改变的列
  const m = matrix.length;
  const n = matrix[0].length;
  const hash = new Map();
  let res = 0;
  for (let i = 0; i < m; i++) {
    const ones = [];
    const zeros = [];
    for (let j = 0; j < n; j++) {
      if (matrix[i][j]) {
        ones.push(j);
      } else {
        zeros.push(j);
      }
    }
    const strOnes = ones.toString();
    const strZeros = zeros.toString();
    hash.set(strOnes, (hash.get(strOnes) | 0) + 1);
    hash.set(strZeros, (hash.get(strZeros) | 0) + 1);
    res = Math.max(hash.get(strOnes), hash.get(strZeros), res);
  }
  return res;
};
