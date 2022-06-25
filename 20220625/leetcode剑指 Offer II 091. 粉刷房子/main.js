/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-25 20:39:49                                                  *
 * @LastModifiedDate: 2022-06-25 21:17:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，
// 你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

// 当然，因为市场上不同颜色油漆的价格不同，
// 所以房子粉刷成不同颜色的花费成本也是不同的。
// 每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。

// 例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；
// costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。

// 请计算出粉刷完所有房子最少的花费成本。

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  //
  let ans = Infinity;
  const n = costs.length;
  const dfs = (pre, idx, sum) => {
    if (idx == n) {
      ans = Math.min(sum, ans);
      return;
    }
    for (let i = 0; i < 3; i++) {
      if (i !== pre) {
        if (sum + costs[idx][i] >= ans) {
          continue;
        }
        dfs(i, idx + 1, sum + costs[idx][i]);
      }
    }
  };
  dfs(0, 1, costs[0][0]);
  dfs(1, 1, costs[0][1]);
  dfs(2, 1, costs[0][2]);
  return ans;
};

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const n = costs.length;
  // 动态规划
  let pre = costs[0];
  for (let i = 1; i < n; i++) {
    const cur = new Array(3).fill(Infinity);
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (k !== j) {
          cur[j] = Math.min(costs[i][j] + pre[k], cur[j]);
        }
      }
    }
    pre = cur;
  }
  return Math.min.apply(null, pre);
};
