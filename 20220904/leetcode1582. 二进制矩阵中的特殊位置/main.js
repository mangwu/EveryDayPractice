/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-04 21:18:22                                                  *
 * @LastModifiedDate: 2022-09-04 21:24:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 rows x cols 的矩阵 mat，其中 mat[i][j] 是 0 或 1，请返回 矩阵 mat 中特殊位置的数目 。

// 特殊位置 定义：如果 mat[i][j] == 1 并且第 i 行和第 j 列中的所有其他元素均为 0
// （行和列的下标均 从 0 开始 ），则位置 (i, j) 被称为特殊位置。

//
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  // 暴力解法
  const m = mat.length;
  const n = mat[0].length;
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] && isSpecailPos([i, j], mat)) {
        ans++;
      }
    }
  }
  return ans;
};

var isSpecailPos = function (pos, mat) {
  const m = mat.length;
  const n = mat[0].length;
  for (let i = 0; i < m; i++) {
    if (i !== pos[0]) {
      if (mat[i][pos[1]] == 1) {
        return false;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (i !== pos[1]) {
      if (mat[pos[0]][i] == 1) {
        return false;
      }
    }
  }
  return true;
};
