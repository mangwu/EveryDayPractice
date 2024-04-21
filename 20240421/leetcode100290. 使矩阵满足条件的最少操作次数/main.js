// 给你一个大小为 m x n 的二维矩形 grid 。每次 操作 中，你可以将 任一 格子的值修改为 任意 非负整数。完成所有操作后，你需要确保每个格子 grid[i][j] 的值满足：

// 如果下面相邻格子存在的话，它们的值相等，也就是 grid[i][j] == grid[i + 1][j]（如果存在）。
// 如果右边相邻格子存在的话，它们的值不相等，也就是 grid[i][j] != grid[i][j + 1]（如果存在）。
// 请你返回需要的 最少 操作数目。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  // 竖列相等，横列不相等
  // 动态规划
  const m = grid.length;
  const n = grid[0].length;
  // dp[j][num]每j列变成num需要的最小操作次数
  const dp = new Array(n).fill(0).map((v) => new Array(10).fill(0));
  // grid每列的数的个数
  const columnNums = new Array(n).fill(0).map((v) => new Array(10).fill(0));
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      columnNums[j][grid[i][j]]++;
    }
  }
  // 初始化dp，将第一列变成0-9，根据该列中的数字个数和列长度之差决定
  for (let i = 0; i < 10; i++) dp[0][i] = m - columnNums[0][i];
  // 一个排除指定项获取指定列最小值的方法
  const getMinEceptNum = (j, num) => {
    let res = Infinity;
    for (let i = 0; i < 10; i++) {
      if (i !== num) {
        res = Math.min(res, dp[j][i]);
      }
    }
    return res;
  };
  // 计算第j列，选取0-9的最小操作次数
  for (let j = 1; j < n; j++) {
    for (let num = 0; num < 10; num++) {
      // 将0-j列变成num需要的操作次数的最小值为：
      dp[j][num] = m - columnNums[j][num] + getMinEceptNum(j - 1, num);
    }
  }
  return Math.min.apply(null, dp[n - 1]);
};

