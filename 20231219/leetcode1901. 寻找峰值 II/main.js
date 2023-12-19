// 一个 2D 网格中的 峰值 是指那些 严格大于 其相邻格子(上、下、左、右)的元素。

// 给你一个 从 0 开始编号 的 m x n 矩阵 mat ，其中任意两个相邻格子的值都 不相同 。找出 任意一个 峰值 mat[i][j] 并 返回其位置 [i,j] 。

// 你可以假设整个矩阵周边环绕着一圈值为 -1 的格子。

// 要求必须写出时间复杂度为 O(m log(n)) 或 O(n log(m)) 的算法

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const center = mat[i][j];
      let isPeak = true;
      for (const dir of DIRS) {
        const [x, y] = [i + dir[0], j + dir[1]];
        if (x >= 0 && y >= 0 && x < m && y < n) {
          if (mat[x][y] >= center) {
            isPeak = false;
            break;
          }
        }
      }
      if (isPeak) return [i, j];
    }
  }
  return [-1, -1];
};
// 上面的解法不符合时间复杂度要求
// 二分法
function maxElement(arr) {
  let idx = 0;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      idx = i;
    }
  }
  return idx;
}
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  const m = mat.length;
  let left = 0;
  let right = m - 1;
  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = maxElement(mat[i]);
    if (i - 1 >= 0 && mat[i][j] < mat[i - 1][j]) {
      right = i - 1;
      continue;
    }
    if (i + 1 < m && mat[i][j] < mat[i + 1][j]) {
      left = i + 1;
      continue;
    }
    return [i, j];
  }
  return []; // 不会执行
};
