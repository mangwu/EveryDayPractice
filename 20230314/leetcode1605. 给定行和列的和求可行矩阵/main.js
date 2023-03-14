/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-14 08:52:01                                                  *
 * @LastModifiedDate: 2023-03-14 09:49:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个非负整数数组 rowSum 和 colSum ，其中 rowSum[i] 是二维矩阵中第 i 行元素的和， colSum[j] 是第 j 列元素的和。换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。

// 请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。

// 请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  const res = [];
  const prefix = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    let curRow = rowSum[i];
    const newRow = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      let curCol = colSum[j] - prefix[j];
      if (curRow) {
        if (curRow <= curCol) {
          prefix[j] += curRow;
          newRow[j] = curRow;
          break;
        } else {
          newRow[j] = curCol;
          curRow -= curCol;
          prefix[j] += curCol;
        }
      } else {
        break;
      }
    }
    res.push(newRow);
  }
  return res;
};

