/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-05 09:39:15                                                  *
 * @LastModifiedDate: 2024-07-05 09:49:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、大小为 m x n 的整数矩阵 matrix ，新建一个下标从 0 开始、名为 answer 的矩阵。使 answer 与 matrix 相等，接着将其中每个值为 -1 的元素替换为所在列的 最大 元素。

// 返回矩阵 answer 。

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    let maxV = 0;
    for (let j = 0; j < m; j++) {
      maxV = Math.max(maxV, matrix[j][i]);
    }
    for (let j = 0; j < m; j++) {
      if (matrix[j][i] === -1) matrix[j][i] = maxV;
    }
  }
  return matrix;
};
