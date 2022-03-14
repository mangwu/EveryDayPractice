/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-14 10:59:16                                                  *
 * @LastModifiedDate: 2022-03-14 11:06:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) {
    return [[1]];
  }
  // 初始数组
  const ans = [[1], [1, 1]];
  if (numRows == 2) {
    return ans;
  }
  // 构造新数组
  for (let i = 2; i < numRows; i++) {
    // 需要构造一个i+1长的数组
    const row = [];
    for (let j = 0; j < i + 1; j++) {
      // 获上两个元素
      const left = ans[i - 1][j - 1] ? ans[i - 1][j - 1] : 0;
      const right = ans[i - 1][j] ? ans[i - 1][j] : 0;
      row[j] = left + right;
    }
    ans.push(row);
  }
  return ans;
};
