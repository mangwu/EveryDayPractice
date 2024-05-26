// 给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

// 矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

// 请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  const matrixOR = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  matrixOR[0][0] = matrix[0][0];
  const arr = [matrix[0][0]];
  for (let i = 1; i < n; i++) {
    matrixOR[0][i] = matrix[0][i] ^ matrixOR[0][i - 1];
    arr.push(matrixOR[0][i]);
  }
  for (let j = 1; j < m; j++) {
    matrixOR[j][0] = matrix[j][0] ^ matrixOR[j - 1][0];
    arr.push(matrixOR[j][0]);
  }
  for (let j = 1; j < m; j++) {
    for (let i = 1; i < n; i++) {
      matrixOR[j][i] =
        matrix[j][i] ^
        matrixOR[j - 1][i] ^
        matrixOR[j][i - 1] ^
        matrixOR[j - 1][i - 1];
      arr.push(matrixOR[j][i]);
    }
  }
  arr.sort((a, b) => b - a);
  return arr[k - 1];
};
