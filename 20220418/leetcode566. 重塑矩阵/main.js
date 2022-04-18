/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 14:49:33                                                  *
 * @LastModifiedDate: 2022-04-18 15:22:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 在 MATLAB 中，有一个非常有用的函数 reshape ，
// 它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // 行列思想
  const m = mat.length;
  const n = mat[0].length;
  const len = m * n;
  if (len !== r * c || (m == r && n == c)) {
    return mat;
  }
  const ans = new Array(r).fill(0).map((_) => new Array(c).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let lenmat = i * n + j;
      let x = Math.floor(lenmat / c);
      let y = lenmat % c;
      ans[x][y] = mat[i][j];
    }
  }
  return ans;
};
// 0 0 => 0
// 0 1 => 1
// 1 0  => 2
// 1 1 => 3
// 2 0 => 4
// 2 1 => 5
