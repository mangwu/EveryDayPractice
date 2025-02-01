/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-28 23:17:46                                                  *
 * @LastModifiedDate: 2025-01-28 23:57:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = [1];
  while (rowIndex) {
    const nextRes = [1];
    for (let i = 1; i < res.length; i++) {
      nextRes.push(res[i] + res[i - 1]);
    }
    nextRes.push(1);
    rowIndex--;
    res = nextRes;
  }
  return res;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
  }
  return row;
};
// 1 -> 0
// 1 1 -> 1
// 1 2 1 -> 2
// 1 3 3 1 -> 3
// 1 4 6 4 1 ->   4
// 1 5 10 10 5 1
// 1 6 15 20 15 6 10

// 2 = 1 + 1
// 3 = 1 + 2
// 6 = 1 + 2 + 3
// 10 = 1 + 3 + 6
// 15 = 1 + 4 + 10
