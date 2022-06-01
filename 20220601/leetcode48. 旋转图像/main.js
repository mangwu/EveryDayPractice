/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 10:40:25                                                  *
 * @LastModifiedDate: 2022-06-01 11:07:45                                      *
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
  // 一次转移n-1个单元格内容，每次转移4次，总共进行 n / 2次转移
  // 每次转移的单元格子减少2个
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // n / 2次转移
    // 转移 n - i * 2 - 1个单元格，转移4次
    for (let j = i; j < n - i - 1; j++) {
      // 进行四次转移
      // console.log(
      //   matrix[i][j],
      //   matrix[j][n - i - 1],
      //   matrix[n - i - 1][n - j - 1],
      //   matrix[n - j - 1][i]
      // );
      [
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
        matrix[n - j - 1][i],
        matrix[i][j],
      ] = [
        matrix[i][j],
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
        matrix[n - j - 1][i],
      ];
    }
  }
};

//  1 2 3 4 5
//  6 7 8 9 1
//  2 3 4 5 6
//  7 8 9 1 2
//  3 4 5 6 7
