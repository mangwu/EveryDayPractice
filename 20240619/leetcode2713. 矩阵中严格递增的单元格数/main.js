/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-19 09:09:34                                                  *
 * @LastModifiedDate: 2024-06-19 11:07:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 1 开始、大小为 m x n 的整数矩阵 mat，你可以选择任一单元格作为 起始单元格 。

// 从起始单元格出发，你可以移动到 同一行或同一列 中的任何其他单元格，但前提是目标单元格的值 严格大于 当前单元格的值。

// 你可以多次重复这一过程，从一个单元格移动到另一个单元格，直到无法再进行任何移动。

// 请你找出从某个单元开始访问矩阵所能访问的 单元格的最大数量 。

// 返回一个表示可访问单元格最大数量的整数。

/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const rowsArr = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    const idxes = new Array(n)
      .fill(0)
      .map((_v, idx) => idx)
      .sort((a, b) => mat[i][a] - mat[i][b]);
    const hash = new Map();
    for (let j = 0; j < n; j++) {
      let start = j;
      while (j + 1 < n && mat[i][idxes[j + 1]] === mat[i][idxes[j]]) {
        j++;
      }
      for (; start <= j; start++) {
        // 设置对于索引idxes[start]而言的第一个大于mat[i][idxes[start]]的idxes索引
        hash.set(idxes[start], j + 1);
      }
    }
    rowsArr[i] = [idxes, hash];
  }
  const colsArr = new Array(n).fill(0);
  for (let j = 0; j < n; j++) {
    const idxes = new Array(m)
      .fill(0)
      .map((_v, idx) => idx)
      .sort((a, b) => mat[a][j] - mat[b][j]);
    const hash = new Map();
    for (let i = 0; i < m; i++) {
      let start = i;
      while (i + 1 < m && mat[idxes[i + 1]][j] === mat[idxes[i]][j]) {
        i++;
      }
      for (; start <= i; start++) {
        // 设置对于索引idxes[start]而言的第一个大于mat[idxes[start]][j]的idxes索引
        hash.set(idxes[start], i + 1);
      }
    }
    colsArr = [idxes, hash];
  }
  const cache = new Array(m).fill(-1).map((v) => new Array(n).fill(-1));
  const dfs = (i, j) => {
    // 从[i,j]开始寻找最大路径
    if (cache[i][j] !== -1) return cache[i][j];
    let res = 1;
    // row向的更大值
    const [idxes, hash] = rowsArr[i];
    let start = hash.get(j);
    
  };
};

// 1 2 3
// 4 9 6
// 3 4 8
