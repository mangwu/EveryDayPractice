/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-14 09:11:27                                                  *
 * @LastModifiedDate: 2022-06-14 09:38:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

const DIR = [
  [-1, 1],
  [1, -1],
];

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  // 选择向上遍历
  let idx = 0;
  let ans = [];
  // 遍历次数应该是 m + n - 1 从左右两边其中的一个元素开始遍历
  for (let i = 0; i < m + n - 1; i++) {
    let x;
    let y;
    // 向上遍历,选择左下边的开始元素
    if (idx == 0) {
      x = Math.min(i, m - 1);
      y = i < m ? 0 : (i - m + 1) % n;
    } else {
      // 向下遍历，选择右下边的开始元素
      x = i < n ? 0 : (i - n + 1) % m;
      y = Math.min(i, n - 1);
    }
    // 开始遍历
    while (x >= 0 && x < m && y >= 0 && y < n) {
      ans.push(mat[x][y]);
      x += DIR[idx][0];
      y += DIR[idx][1];
    }
    idx = idx == 0 ? 1 : 0;
  }
  return ans;
};

[
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10],
];
// => 1 2 4 7 5 3 4 6 8 9 7 10
// => [0,0] [0,1] []

// 0 1 2
// 3 4 5

[
  [1, 2, 3, 4, 5],
  [4, 5, 6, 7, 8],
  [7, 8, 9, 10, 11],
];
