/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-15 08:52:04                                                  *
 * @LastModifiedDate: 2022-02-15 09:30:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

// 幸运数是指矩阵中满足同时下列两个条件的元素：

// 在同一行的所有元素中最小
// 在同一列的所有元素中最大

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length;
  // const n = matrix[0].length;
  const ans = [];
  for (let i = 0; i < m; i++) {
    const min = Math.min.apply(null, matrix[i]);
    // 所在位置
    const idx = matrix[i].indexOf(min);
    // 通过所在位置查找最大值
    let max = min;
    for (let j = 0; j < m; j++) {
      if (matrix[j][idx] > max) {
        max = matrix[j][idx];
      }
    }
    if (max == min) {
      ans.push(max);
    }
  }
  return ans;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  // 预处理，遍历得出每行的最小值数组和每列的最大值数组
  // 再遍历一遍矩阵，但所在位置的行和列都等于预处理得到的数组位置所在位置值时，则是幸运数字
  const m = matrix.length;
  const n = matrix[0].length;
  const minRow = [];
  for (const row of matrix) {
    minRow.push(Math.min.apply(null, row));
  }
  const maxCol = [];
  for (let i = 0; i < n; i++) {
    let max = Number.MIN_VALUE;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, matrix[j][i]);
    }
    maxCol[i] = max;
  }
  const ans = []
  for (let i = 0; i< m; i++) {
    for (let j = 0;j < n; j++) {
      if (minRow[i] == matrix[i][j] && maxCol[j] == matrix[i][j]) {
        ans.push(matrix[i][j])
      }
    }
  }
};
