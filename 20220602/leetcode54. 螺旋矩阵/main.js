/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-02 11:25:55                                                  *
 * @LastModifiedDate: 2022-06-02 13:50:10                                      *
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
  const ans = [matrix[0][0]];
  matrix[0][0] = "x";
  let idx = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  let start = [0, 0];
  while (ans.length < m * n) {
    let x = start[0] + DIRS[idx][0];
    let y = start[1] + DIRS[idx][1];
    while (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] != "x") {
      ans.push(matrix[x][y]);
      matrix[x][y] = "x";
      x += DIRS[idx][0];
      y += DIRS[idx][1];
    }
    // x,和y进入边界，退一步
    x -= DIRS[idx][0];
    y -= DIRS[idx][1];
    start = [x, y];
    idx = (idx + 1) % 4;
  }
  return ans;
};
spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = [];
  let idx = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  let start = [0, 0];
  while (ans.length < m * n) {
    let x = start[0];
    let y = start[1];
    do {
      ans.push(matrix[x][y]);
      matrix[x][y] = "x";
      x += DIRS[idx][0];
      y += DIRS[idx][1];
    } while (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] != "x");
    // x,和y进入边界，退一步
    x -= DIRS[idx][0];
    y -= DIRS[idx][1];
    start = [x, y];
    idx = (idx + 1) % 4;
  }
  return ans;
};
