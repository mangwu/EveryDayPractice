/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-30 09:34:30                                                  *
 * @LastModifiedDate: 2022-09-30 10:33:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 标记法
  const cols = [];
  const rows = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for (const row of rows) {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  }
  for (const col of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }
};

// 标记变量 两个

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let flagRow = false;
  let flagCol = false;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      flagCol = true;
      break;
    }
  }
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] == 0) {
      flagRow = true;
      break;
    }
  }
  // 用第一行存储列是否被标记 用第一列存储行是否被标记
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // 遍历除了第一行和第一列的元素
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (flagCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
};

// 标记变量一个

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let flag = false;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      flag = true;
      break;
    }
  }
  // 用第一行第一列元素标记第一行是否为0
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] == 0) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (flag) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

[
  [1, 1, 1],
  [0, 1, 2],
];

// true

