/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 16:25:01                                                  *
 * @LastModifiedDate: 2022-03-29 17:30:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  if (rowIndex == 0) {
    return [1];
  }
  if (rowIndex == 1) {
    return [1, 1];
  }
  const ans = new Array(rowIndex + 1).fill(0);
  ans[0] = 1;
  ans[rowIndex] = 1;
  const preRow = getRow(rowIndex - 1);
  for (let i = 1; i < rowIndex; i++) {
    ans[i] = preRow[i] + preRow[i - 1];
  }
  return ans;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 动态规划/迭代
  if (rowIndex == 0) {
    return [1];
  }
  if (rowIndex == 1) {
    return [1, 1];
  }
  let yang = [[1], [1, 1]];
  for (let i = 2; i < rowIndex + 1; i++) {
    const curRow = new Array(i + 1).fill(0);
    curRow[0] = 1;
    curRow[i] = 1;
    for (let j = 1; j < i; j++) {
      // 状态转化方程
      curRow[j] = yang[i - 1][j] + yang[i - 1][j - 1];
    }
    yang[i] = curRow;
  }
  return yang[rowIndex];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 递推优化,滚动数组(不需要记录每一个行)
  let pre = [];
  let cur = [];
  // 从第一个行开始递推
  for (let i = 0; i <= rowIndex; i++) {
    cur = new Array(i + 1).fill(0);
    cur[0] = cur[i] = 1;
    // 遍历上一个行
    for (let j = 1; j < i; j++) {
      cur[j] = pre[j - 1] + pre[j];
    }
    pre = cur;
  }
  return pre;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 递推优化,只用一个数组,在这个一个数组中计算中间值即可
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      // 第i项与上一行的第i - 1 项和第i项有关
      row[j] += row[j - 1];
    }
  }
  return row;
};

// 直接使用公式计算
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // row[i] = row[i - 1] * (row[rowIndex - i + 1 ])/i
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
  }
  return row;
};
