/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-12 13:47:55                                                  *
 * @LastModifiedDate: 2022-08-12 15:08:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
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
  if (m == 0) {
    return [];
  }
  const n = matrix[0].length;
  let idx = 0;
  const ans = [];
  let x = 0;
  let y = 0;
  const visited = [];
  while (ans.length < m * n) {
    ans.push(matrix[x][y]);
    visited[x * n + y] = true;
    x += DIRS[idx][0];
    y += DIRS[idx][1];
    if (x < 0 || y < 0 || x >= m || y >= n || visited[x * n + y]) {
      x -= DIRS[idx][0];
      y -= DIRS[idx][1];
      idx++;
      idx = idx % 4;
      x += DIRS[idx][0];
      y += DIRS[idx][1];
    }
  }
  return ans;
};

// 1 2 3
// 4 5 6
// 7 8 9

// => 1 2 3 6 9 2 7 4 5

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 按层模拟，最外层以顺时针进入，然后是下一层，相当于一个"回"字
  const m = matrix.length;
  if (m == 0) {
    return [];
  } 
  const n = matrix[0].length;
  const ans = [];
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1;
  // 每次结束，left，top都加1，right，bottom都减1，但是它们大小关系确定
  while (left <= right && top <= bottom) {
    // top横向
    for (let column = left; column <= right; column++) {
      ans.push(matrix[top][column]);
    }
    // right竖向
    for (let row = top + 1; row <= bottom; row++) {
      ans.push(matrix[row][right]);
    }
    // 判断是否bottom行
    if (left < right && top < bottom) {
      // 能构成一个至少两行两列的层
      for (let column = right - 1; column >= left; column--) {
        ans.push(matrix[bottom][column]);
      }
      for (let row = bottom - 1; row > top; row--) {
        ans.push(matrix[row][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return ans;
};
