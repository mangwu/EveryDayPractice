/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-30 10:49:11                                                  *
 * @LastModifiedDate: 2023-04-30 11:04:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 arr 和一个 m x n 的整数 矩阵 mat 。arr 和 mat 都包含范围 [1，m * n] 内的 所有 整数。

// 从下标 0 开始遍历 arr 中的每个下标 i ，并将包含整数 arr[i] 的 mat 单元格涂色。

// 请你找出 arr 中在 mat 的某一行或某一列上都被涂色且下标最小的元素，并返回其下标 i 。

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const m = mat.length;
  const n = mat[0].length;
  const len = arr.length;
  // 记录状态
  let mHash = new Array(m).fill(0);
  let nHash = new Array(n).fill(0);
  // 记录值位置
  const pos = new Array(len + 1).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      pos[mat[i][j]] = [i, j];
    }
  }
  for (let i = 0; i < len; i++) {
    const curPos = pos[arr[i]];
    mHash[curPos[0]]++;
    nHash[curPos[1]]++;
    if (mHash[curPos[0]] === n || nHash[curPos[1]] === m) {
      return i;
    }
  }
};
// 4 3 5
// 1 2 6