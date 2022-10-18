/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 10:14:34                                                  *
 * @LastModifiedDate: 2022-10-18 10:17:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // 非原地算法
  const m = matrix.length;
  const n = matrix[0].length;
  const ans = new Array(n).fill(0).map((v) => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][i] = matrix[i][j];
    }
  }
  return ans;
};
