/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-26 17:01:03                                                  *
 * @LastModifiedDate: 2022-04-26 17:17:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = 0;
  matrix;
  const ans = [matrix[0][0]];
  matrix[0][0] = true;
  let flag = true;
  let d = null;
  while (flag) {
    flag = false;
    if (d) {
      const x = d[0] + i;
      const y = d[1] + j;
      if (x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] !== true) {
        ans.push(matrix[x][y]);
        matrix[x][y] = true;
        i = x;
        j = y;
        flag = true;
        continue;
      }
    }
    for (const dir of DIRS) {
      const x = dir[0] + i;
      const y = dir[1] + j;
      if (x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] !== true) {
        ans.push(matrix[x][y]);
        d = dir;
        matrix[x][y] = true;
        i = x;
        j = y;
        flag = true;
        break;
      }
    }
  }
  return ans;
};

[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
