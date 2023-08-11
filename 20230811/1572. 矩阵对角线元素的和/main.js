/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-11 10:36:24                                                  *
 * @LastModifiedDate: 2023-08-11 10:44:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。

// 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  let res = 0;
  for (let i = 0, j = 0, k = n - 1; i < n && j < n && k >= 0; i++, j++, k--) {
    res += mat[i][j];
    res += mat[i][k];
  }
  if (n % 2 === 1) {
    const half = Math.floor(n / 2);
    res -= mat[half][half];
  }
  return res;
};
