// 给你一个由 非负 整数组成的 m x n 矩阵 grid。

// 在一次操作中，你可以将任意元素 grid[i][j] 的值增加 1。

// 返回使 grid 的所有列 严格递增 所需的 最少 操作次数。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (grid[j][i] <= grid[j - 1][i]) {
        res += grid[j - 1][i] - grid[j][i] + 1;
        grid[j][i] = grid[j - 1][i] + 1;
      }
    }
  }
  return res;
};
