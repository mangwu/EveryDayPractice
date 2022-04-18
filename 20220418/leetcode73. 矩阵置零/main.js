/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 20:23:10                                                  *
 * @LastModifiedDate: 2022-04-18 23:13:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 记录0的索引，遍历索引设置行和列为0
  const m = matrix.length;
  const n = matrix[0].length;
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        queue.push([i, j]);
      }
    }
  }
  for (const q of queue) {
    for (let i = 0; i < m; i++) {
      matrix[i][q[1]] = 0;
    }
    for (let j = 0; j < n; j++) {
      matrix[q[0]][j] = 0;
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 记录0的索引，遍历索引设置行和列为0
  const m = matrix.length;
  const n = matrix[0].length;
  const rows = new Array(m).fill(0);
  const colums = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        rows[i] = true;
        colums[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    if (rows[i]) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (colums[i]) {
      for (let j = 0; j < m; j++) {
        matrix[j][i] = 0;
      }
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 使用两个变量记录第一行和第一列是否需要修改为0
  let firstRow = false;
  let firstColunm = false;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      firstColunm = true;
    }
  }
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] == 0) {
      firstRow = true;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // 根据第一行和第一列情况修改
  for (let i = 1; i < m; i++) {
    // 行为0
    if (matrix[i][0] == 0) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    // 列为1
    if (matrix[0][i] == 0) {
      for (let j = 0; j < m; j++) {
        matrix[j][i] = 0;
      }
    }
  }
  if (firstRow) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (firstColunm) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
