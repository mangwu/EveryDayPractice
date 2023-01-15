/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-15 10:57:19                                                  *
 * @LastModifiedDate: 2023-01-15 11:06:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，表示最初有一个 n x n 、下标从 0 开始的整数矩阵 mat ，矩阵中填满了 0 。

// 另给你一个二维整数数组 query 。针对每个查询 query[i] = [row1i, col1i, row2i, col2i] ，请你执行下述操作：

// 找出 左上角 为 (row1i, col1i) 且 右下角 为 (row2i, col2i) 的子矩阵，将子矩阵中的 每个元素 加 1 。也就是给所有满足 row1i <= x <= row2i 和 col1i <= y <= col2i 的 mat[x][y] 加 1 。
// 返回执行完所有操作后得到的矩阵 mat 。

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  // 矩阵差分数组
  const diff = new Array(n * n + 1).fill(0);
  const res = new Array(n).fill(0).map((_v) => new Array(n).fill(0));
  for (const querie of queries) {
    for (let i = querie[0]; i <= querie[2]; i++) {
      diff[i * n + querie[1]]++;
      diff[i * n + querie[3] + 1]--;
    }
  }
  res[0][0] = diff[0];
  for (let i = 1; i < n * n; i++) {
    diff[i] += diff[i - 1];
    let x = Math.floor(i / n);
    let y = i % n;
    res[x][y] = diff[i];
  }
  return res;
};
