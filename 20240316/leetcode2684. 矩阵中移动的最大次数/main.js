// 给你一个下标从 0 开始、大小为 m x n 的矩阵 grid ，矩阵由若干 正 整数组成。

// 你可以从矩阵第一列中的 任一 单元格出发，按以下方式遍历 grid ：

// 从单元格 (row, col) 可以移动到 (row - 1, col + 1)、(row, col + 1) 和 (row + 1, col + 1) 三个单元格中任一满足值 严格 大于当前单元格的单元格。
// 返回你在矩阵中能够 移动 的 最大 次数。

const DIRS = [
  [-1, -1],
  [0, -1],
  [1, -1],
];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  // bfs
  const m = grid.length;
  const n = grid[0].length;
  // 动态规划
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let ans = 0;
  for (let j = 1; j < n; j++) {
    let flag = true;
    for (let i = 0; i < m; i++) {
      for (const dir of DIRS) {
        const [x, y] = [i + dir[0], j + dir[1]];
        if (x >= 0 && x < m && y >= 0 && y < n && grid[i][j] > grid[x][y]) {
          dp[i][j] = Math.max(dp[i][j], dp[x][y] + 1);
          if (dp[i][j] === j) flag = false;
        }
      }
      ans = Math.max(ans, dp[i][j]);
    }
    // 判断这一列是否中断
    if (flag) return ans;
  }
  return ans;
};
//   1
// 0 1
//   1
[
  [3, 2, 4, 8, 5, 1, 4],
  [2, 1, 9, 5, 6, 8, 11],
  [1, 1, 7, 2, 3, 4, 1],
  [8, 5, 4, 1, 2, 3, 5],
  [9, 6, 4, 1, 7, 5, 3],
  [4, 2, 3, 5, 1, 4, 2],
];

[
  [0, 0, 1, 2, 0, 0, 1],
  [0, 0, 1, 2, 3, 4, 5],
  [0, 0, 2, 0, 1, 2, 0],
  [0, 1, 1, 0, 1, 2, 3],
  [0, 1, 1, 0, 3, 2, 0],
  [0, 0, 1, 2, 0, 1, 0],
];
