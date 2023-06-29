/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-29 08:55:09                                                  *
 * @LastModifiedDate: 2023-06-29 09:10:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 2 行 n 列的二进制数组：

// 矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 0 就是 1。
// 第 0 行的元素之和为 upper。
// 第 1 行的元素之和为 lower。
// 第 i 列（从 0 开始编号）的元素之和为 colsum[i]，colsum 是一个长度为 n 的整数数组。
// 你需要利用 upper，lower 和 colsum 来重构这个矩阵，并以二维整数数组的形式返回它。

// 如果有多个不同的答案，那么任意一个都可以通过本题。

// 如果不存在符合要求的答案，就请返回一个空的二维数组。

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
  if (upper + lower !== colsum.reduce((pre, cur) => pre + cur, 0)) return [];
  const n = colsum.length;
  const ans = new Array(2).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 0) {
      continue;
    } else if (colsum[i] === 2) {
      upper--;
      lower--;
      ans[0][i] = 1;
      ans[1][i] = 1;
    } else if (upper >= lower) {
      upper--;
      ans[0][i] = 1;
    } else {
      lower--;
      ans[1][i] = 1;
    }
  }
  if (upper === 0 && lower === 0) return ans;
  return [];
};

[
  [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
];
