/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 11:10:36                                                  *
 * @LastModifiedDate: 2022-06-01 11:16:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个大小为 n x n 的二进制矩阵 mat 和 target 。现 以 90 度顺时针轮转 矩阵 mat 中的元素 若干次 ，
// 如果能够使 mat 与 target 一致，返回 true ；否则，返回 false 。

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  if (isSame(mat, target)) {
    return true;
  }
  // 旋转3次，得到其余三个旋转后的矩阵
  for (let i = 0; i < 3; i++) {
    rotate(mat);
    if (isSame(mat, target)) {
      return true;
    }
  }
  return false;
};

/**
 * @description 判断两个矩阵是否相等
 * @param {number[][]} mat 矩阵
 * @param {number[][]} target 目标矩阵
 * @returns {boolean}
 */
const isSame = (mat, target) => {
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== target[i][j]) {
        return false;
      }
    }
  }
  return true;
};

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
