/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-27 14:23:42                                                  *
 * @LastModifiedDate: 2022-04-27 18:03:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function (matrix) {
  const n = matrix.length;
  let halfN = n >> 1;
  for (let i = 0; i < halfN; i++) {
    for (let j = 0; j < n - i * 2 - 1; j++) {
      [
        matrix[i][i + j],
        matrix[i + j][n - i - 1],
        matrix[n - i - 1][n - i - 1 - j],
        matrix[n - i - 1 - j][i],
      ] = [
        matrix[n - i - 1 - j][i],
        matrix[i][i + j],
        matrix[i + j][n - i - 1],
        matrix[n - i - 1][n - i - 1 - j],
      ];
    }
  }
};
[
  [5, 1, 9, 11, 2],
  [2, 4, 8, 10, 7],
  [13, 3, 6, 7, 8],
  [15, 14, 12, 16, 17],
  [19, 6, 21, 26, 23],
];
rotate([
  [5, 1, 9, 11, 2],
  [2, 4, 8, 10, 7],
  [13, 3, 6, 7, 8],
  [15, 14, 12, 16, 17],
  [19, 6, 21, 26, 23],
]);
