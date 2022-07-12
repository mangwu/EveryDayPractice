/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-12 09:04:07                                                  *
 * @LastModifiedDate: 2022-07-12 10:34:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。

// 另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，
// 其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。

// 对 indices[i] 所指向的每个位置，应同时执行下述增量操作：

// ri 行上的所有单元格，加 1 。
// ci 列上的所有单元格，加 1 。
// 给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  // 暴力模拟枚举
  const data = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  for (const id of indices) {
    let row = id[0];
    let column = id[1];
    for (let i = 0; i < m; i++) {
      data[i][column]++;
    }
    for (let i = 0; i < n; i++) {
      data[row][i]++;
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (data[i][j] % 2 == 1) {
        ans++;
      }
    }
  }
  return ans;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const rows = new Array(m).fill(0); // m行，记录每行被添加的1的个数
  const columns = new Array(n).fill(0); // n列，记录没列被添加的1的个数
  for (const id of indices) {
    rows[id[0]]++;
    columns[id[1]]++;
  }
  let ans = 0;
  // 遍历rows和columns得到结果
  for (const row of rows) {
    for (const column of columns) {
      if ((row + column) % 2 == 1) {
        ans++;
      }
    }
  }
  return ans;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const rows = new Array(m).fill(0); // m行，记录每行被添加的1的个数
  const columns = new Array(n).fill(0); // n列，记录没列被添加的1的个数
  for (const id of indices) {
    rows[id[0]]++;
    columns[id[1]]++;
  }
  // 每行每列的值相加就是一个位置的值
  // 所以(x,y)位置的数为奇数需要保证x和y一个奇数，一个偶数
  // 计算每行奇数/偶数的个数和每列奇数/偶数的个数，
  // 每行的奇数个数乘每列偶数的个数，每行偶数的个数乘每列奇数的个数之和就是答案
  let oddrows = 0;
  let oddcolumns = 0;
  for (const r of rows) {
    if (r % 2 == 1) {
      oddrows++;
    }
  }
  for (const c of columns) {
    if (c % 2 == 1) {
      oddcolumns++;
    }
  }
  return oddrows * (n - oddcolumns) + oddcolumns * (m - oddrows);
};
