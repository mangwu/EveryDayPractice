/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-07 21:28:19                                                  *
 * @LastModifiedDate: 2022-04-07 22:22:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个仅包含 0 和 1 、
// 大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  if (m == 0) {
    return 0;
  }
  const n = matrix[0].length;
  let ans = 0;
  const recArea = (x, y) => {
    // 横向对比
    let crosswise = 0;
    let startJ = y;
    while (startJ < n && matrix[x][startJ] == "1") {
      crosswise++;
      startJ++;
    }
    // 纵向对比
    let lengthways = 0;
    let startI = x;
    while (startI < m && matrix[startI][y] == "1") {
      lengthways++;
      startI++;
    }
    let res = Math.max(lengthways, crosswise);
    let minRow = Infinity;
    console.log(lengthways, crosswise, x, y);

    for (let i = x + 1; i < x + crosswise; i++) {
      let curRow = 0;
      for (let j = y; j < y + Math.min(crosswise, minRow); j++) {
        if (matrix[i][j] == "1") {
          curRow++;
        } else {
          break;
        }
      }
      res = Math.max(res, (i - x + 1) * curRow);
      minRow = Math.min(curRow, minRow);
    }
    return res;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == "1") {
        ans = Math.max(ans,recArea(i, j));
      }
    }
  }
  return ans;
};
