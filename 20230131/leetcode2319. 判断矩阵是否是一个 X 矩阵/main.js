/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-31 08:50:44                                                  *
 * @LastModifiedDate: 2023-01-31 09:07:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个正方形矩阵满足下述 全部 条件，则称之为一个 X 矩阵 ：

// 矩阵对角线上的所有元素都 不是 0
// 矩阵中所有其他元素都是 0
// 给你一个大小为 n x n 的二维整数数组 grid ，表示一个正方形矩阵。如果 grid 是一个 X 矩阵 ，返回 true ；
// 否则，返回 false 。
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        if (grid[i][j] === 0) return false;
      } else if (grid[i][j] !== 0) return false;
    }
  }
  return true;
};
