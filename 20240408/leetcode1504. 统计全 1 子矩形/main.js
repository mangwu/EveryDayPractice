/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-08 11:03:20                                                  *
 * @LastModifiedDate: 2024-04-08 15:31:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 的二进制矩阵 mat ，请你返回有多少个 子矩形 的元素全部都是 1 。

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  // 快速判断某一行的i-j列的格子是否都为1
  // 快速判断某一列的k-l行的格子是否都为1
  // 使用前缀和
  const m = mat.length;
  const n = mat[0].length;
  const rowsPreffix = new Array(m).fill(0).map(() => new Array(n + 1).fill(0));
  const colsPreffix = new Array(n).fill(0).map(() => new Array(m + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsPreffix[i][j + 1] = rowsPreffix[i][j] + mat[i][j];
      colsPreffix[j][i + 1] = colsPreffix[j][i] + mat[i][j];
    }
  }
  const check = (row, col, start, end) => {
    if (row !== -1)
      return (
        rowsPreffix[row][end + 1] - rowsPreffix[row][start] === end - start + 1
      );
    if (col !== -1)
      return (
        colsPreffix[col][end + 1] - colsPreffix[col][start] === end - start + 1
      );
  };
  const binarySearch = (row, col, start) => {
    let left = start;
    let right = row !== -1 ? n - 1 : m - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (check(row, col, start, mid)) {
        // 可以构成连续的1
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  };
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        // 计算以mat[i][j]为左上角的子矩形的数量
        let right = binarySearch(i, -1, j);
        let bottom = binarySearch(-1, j, i);
        console.log([i, j], `right:${right}`, `bottom:${bottom}`);
        ans += right - j + 1;
        for (let k = i + 1; k <= bottom; k++) {
          right = Math.min(right, binarySearch(k, -1, j));
          ans += right - j + 1;
        }
      }
    }
  }
  return ans;
};
const input = [
  [0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 0],
];
console.log("输入：");
console.log(input);
console.log("输出：");
console.log(numSubmat(input));
