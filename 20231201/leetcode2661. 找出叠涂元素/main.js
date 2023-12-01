// 给你一个下标从 0 开始的整数数组 arr 和一个 m x n 的整数 矩阵 mat 。arr 和 mat 都包含范围 [1，m * n] 内的 所有 整数。

// 从下标 0 开始遍历 arr 中的每个下标 i ，并将包含整数 arr[i] 的 mat 单元格涂色。

// 请你找出 arr 中在 mat 的某一行或某一列上都被涂色且下标最小的元素，并返回其下标 i

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  // 两个数组记录行列
  const m = mat.length;
  const n = mat[0].length;
  const row = new Array(m).fill(0); // 每行的个数
  const column = new Array(n).fill(0); // 每列的个数
  const hash = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      hash.set(mat[i][j], [i, j]);
    }
  }
  for (let k = 0; k < arr.length; k++) {
    const [i, j] = hash.get(arr[k]);
    row[i]++;
    column[j]++;
    if (row[i] === n || column[j] === m) return k;
  }
};
