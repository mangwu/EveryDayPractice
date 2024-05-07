// 给你一个 rows x cols 的矩阵 grid 来表示一块樱桃地。 grid 中每个格子的数字表示你能获得的樱桃数目。

// 你有两个机器人帮你收集樱桃，机器人 1 从左上角格子 (0,0) 出发，机器人 2 从右上角格子 (0, cols-1) 出发。

// 请你按照如下规则，返回两个机器人能收集的最多樱桃数目：

// 从格子 (i,j) 出发，机器人可以移动到格子 (i+1, j-1)，(i+1, j) 或者 (i+1, j+1) 。
// 当一个机器人经过某个格子时，它会把该格子内所有的樱桃都摘走，然后这个位置会变成空格子，即没有樱桃的格子。
// 当两个机器人同时到达同一个格子时，它们中只有一个可以摘到樱桃。
// 两个机器人在任意时刻都不能移动到 grid 外面。
// 两个机器人最后都要到达 grid 最底下一行。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  // 动态规划
  // 假设f[x][y1][y2]是两个机器人从(0,0)，(0,cols-1)出发能获取的最大樱桃数
  // 因为机器人只能向下移动，所以在第x步，各自在(x,y1)和(x,y2)，这样就能确定所有的情况
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m)
    .fill(0)
    .map((v) => new Array(n).fill(0).map((v) => new Array(n).fill(-Infinity)));
  dp[0][0][n - 1] = grid[0][0] + grid[0][n - 1];
  let ans = 0;
  for (let x = 1; x < m; x++) {
    for (let y1 = 0; y1 < n; y1++) {
      for (let y2 = 0; y2 < n; y2++) {
        // 机器人1到达(x, y1)，机器人2到达(x,y2)
        let res = dp[x - 1][y1][y2]; // 二者都是直接往下的
        if (y1 > 0) res = Math.max(res, dp[x - 1][y1 - 1][y2]);
        if (y2 > 0) res = Math.max(res, dp[x - 1][y1][y2 - 1]);
        if (y1 > 0 && y2 > 0) res = Math.max(res, dp[x - 1][y1 - 1][y2 - 1]);
        if (y1 < n - 1) res = Math.max(res, dp[x - 1][y1 + 1][y2]);
        if (y2 < n - 1) res = Math.max(res, dp[x - 1][y1][y2 + 1]);
        if (y1 < n - 1 && y2 < n - 1)
          res = Math.max(res, dp[x - 1][y1 + 1][y2 + 1]);
        if (y1 > 0 && y2 < n - 1)
          res = Math.max(res, dp[x - 1][y1 - 1][y2 + 1]);
        if (y1 < n - 1 && y2 > 0)
          res = Math.max(res, dp[x - 1][y1 + 1][y2 - 1]);
        res += grid[x][y1];
        if (y2 !== y1) res += grid[x][y2];
        dp[x][y1][y2] = res;
        ans = Math.max(ans, res);
      }
    }
  }
  return ans;
};
