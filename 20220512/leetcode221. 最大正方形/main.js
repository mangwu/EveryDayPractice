/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-12 15:26:27                                                  *
 * @LastModifiedDate: 2022-05-12 16:24:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 右下角扩充
  const n = matrix.length;
  const m = matrix[0].length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == "1") {
        // 判断改节点是否值得寻找
        if (
          i > 0 &&
          matrix[i - 1][j] == "1" &&
          j > 0 &&
          matrix[i][j - 1] == "1" &&
          matrix[i - 1][j - 1] == "1"
        ) {
          // 左边上面，左上都是1，已经被查找过，不必查找
          continue;
        }
        // 边长,从2开始
        let sideLen = 1;
        // 能否扩展
        let flag = true;
        while (flag && i + sideLen < m && j + sideLen < n) {
          // 横着 比较
          for (let k = j; k < j + sideLen; k++) {
            if (matrix[i + sideLen][k] !== "1") {
              flag = false;
              break;
            }
          }
          // 竖着比较
          for (let k = i; k < i + sideLen; k++) {
            if (matrix[k][j + sideLen] !== "1") {
              flag = false;
              break;
            }
          }
          if (flag) {
            sideLen++;
          }
        }
        ans = Math.max(ans, sideLen * sideLen);
      }
    }
  }
  return ans;
};

[
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "0"],
  ["1", "0", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "0"],
];

[
  ["0", "0", "0", "1"],
  ["1", "1", "0", "1"],
  ["1", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["0", "1", "1", "1"],
];

// 300 * 300
// 上面的解答错误，过滤条件有错误，不能简单通过左上角的情况进行修改

// 动态规划
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 右下角扩充
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = new Array(n).fill(0).map((_v) => new Array(m).fill(0));
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == "1") {
        // 以改单元为右下角构成的正方体边长
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
      } else {
        dp[i][j] = 0;
      }
      ans = Math.max(ans, dp[i][j] * dp[i][j]);
    }
  }
  return ans;
};
