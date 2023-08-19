/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-17 09:07:49                                                  *
 * @LastModifiedDate: 2023-08-17 16:33:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 rows x cols 大小的矩形披萨和一个整数 k ，矩形包含两种字符： 'A' （表示苹果）和 '.' （表示空白格子）。你需要切披萨 k-1 次，得到 k 块披萨并送给别人。

// 切披萨的每一刀，先要选择是向垂直还是水平方向切，再在矩形的边界上选一个切的位置，将披萨一分为二。如果垂直地切披萨，那么需要把左边的部分送给一个人，如果水平地切，那么需要把上面的部分送给一个人。在切完最后一刀后，需要把剩下来的一块送给最后一个人。

// 请你返回确保每一块披萨包含 至少 一个苹果的切披萨方案数。由于答案可能是个很大的数字，请你返回它对 10^9 + 7 取余的结果。
const MOD = 10 ** 9 + 7;
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  const rows = pizza.length;
  const cols = pizza[0].length;
  // 可以竖切 rows - 1 次
  // 可以横切 cols - 1 次
  if (k - 1 > rows + cols - 2) return 0; // 切割次数太多，一定没有解决方案
  const dp = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0).map(() => new Array(k + 1).fill(-1)));
  // dp[i][j][x] 表示以左上角坐标为(i,j)的剩余披萨，切成x个块披萨的方案数
  // dp[0][0][k] 就是本题解答案
  // 判断块里有没有苹果
  const hasApple = (start, end) => {
    let [i, j] = start;
    const [m, n] = end;
    for (; i < m; i++) {
      for (let l = j; l < n; l++) {
        if (pizza[i][l] === "A") return true;
      }
    }
    return false;
  };
  const dfs = (i, j, x) => {
    if (dp[i][j][x] !== -1) return dp[i][j][x];
    if (x === 1) {
      // 不用切了，判断在当前(i,j)下有没有苹果
      if (hasApple([i, j], [rows, cols])) {
        dp[i][j][x] = 1;
      } else {
        dp[i][j][x] = 0;
      }
      return dp[i][j][x];
    }
    // 进行切片操作
    let res = 0;
    // 横切
    let flag = false;
    for (let ni = i + 1; ni < rows; ni++) {
      if (flag || hasApple([i, j], [ni, cols])) {
        flag = true;
        res += dfs(ni, j, x - 1); // 可以进行横切
      }
    }
    flag = false;
    // 竖切
    for (let nj = j + 1; nj < cols; nj++) {
      if (flag || hasApple([i, j], [rows, nj])) {
        flag = true;
        res += dfs(i, nj, x - 1); // 可以进行竖切
      }
    }
    dp[i][j][x] = res % MOD;
    return dp[i][j][x];
  };
  dfs(0, 0, k);
  return dp[0][0][k];
};

