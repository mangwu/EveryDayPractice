/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-16 10:30:32                                                  *
 * @LastModifiedDate: 2023-04-16 10:33:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 的二进制矩阵 mat ，请你找出包含最多 1 的行的下标（从 0 开始）以及这一行中 1 的数目。

// 如果有多行包含最多的 1 ，只需要选择 行下标最小 的那一行。

// 返回一个由行下标和该行中 1 的数量组成的数组。

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  let res = [0, 0];
  for (let i = 0; i < m; i++) {
    let ones = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        ones++;
      }
    }
    if (ones > res[1]) {
      res[0] = i;
      res[1] = ones;
    }
  }
  return res;
};
