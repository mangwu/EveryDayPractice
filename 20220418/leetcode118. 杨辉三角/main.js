/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 15:24:21                                                  *
 * @LastModifiedDate: 2022-04-18 15:30:09                                      *
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
  let ans = [[1]];
  for (let i = 1; i < numRows; i++) {
    const newArr = [];
    for (let j = 0; j <= i; j++) {
      let left = j - 1 >= 0 ? ans[i - 1][j - 1] : 0;
      let right = j < i ? ans[i - 1][j] : 0;
      newArr.push(left + right);
    }
    ans[i] = newArr;
  }
  return ans;
};
