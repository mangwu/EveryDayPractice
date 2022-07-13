/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-10 15:35:09                                                  *
 * @LastModifiedDate: 2022-07-13 13:37:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个N x N的网格(grid) 代表了一块樱桃地，每个格子由以下三种数字的一种来表示：

// 0 表示这个格子是空的，所以你可以穿过它。
// 1 表示这个格子里装着一个樱桃，你可以摘到樱桃然后穿过它。
// -1 表示这个格子里有荆棘，挡着你的路。
// 你的任务是在遵守下列规则的情况下，尽可能的摘到最多樱桃：

// 从位置 (0, 0) 出发，最后到达 (N-1, N-1) ，只能向下或向右走，并且只能穿越有效的格子（即只可以穿过值为0或者1的格子）；
// 当到达 (N-1, N-1) 后，你要继续走，直到返回到 (0, 0) ，只能向上或向左走，并且只能穿越有效的格子；
// 当你经过一个格子且这个格子包含一个樱桃时，你将摘到樱桃并且这个格子会变成空的（值变为0）；
// 如果在 (0, 0) 和 (N-1, N-1) 之间不存在一条可经过的路径，则没有任何一个樱桃能被摘到。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  // 先动态规划求出从[0][0] 到[n-1][n-1]的最大数
  const n = grid.length;
  const [dp, total] = dpS(grid);
  if (dp[n - 1][n - 1] <= 0) {
    return 0;
  }
  if (dp[n - 1][n - 1] == total) {
    return total;
  }
  let res = dp[n - 1][n - 1];
  grid[n - 1][n - 1] = 0;
  // 遍历dp，获得一种grid

  const [dp2] = dpS(grid);
  return res + dp2[n - 1][n - 1];
};

const dpS = (grid) => {
  const n = grid.length;
  const dp = new Array(n).fill(-1).map((v) => new Array(n).fill(-1));
  dp[0][0] = grid[0][0];
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == -1) {
        continue;
      }
      total += grid[i][j];
      let top = i - 1 >= 0 ? dp[i - 1][j] : -2;
      let left = j - 1 >= 0 ? dp[i][j - 1] : -2;
      if (top >= 0 || left >= 0) {
        dp[i][j] = Math.max(top, left) + grid[i][j];
      }
    }
  }
  return [dp, total];
};

// [
//   [1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 0],
//   [1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, -1],
//   [0, 0, 0, 1, 1, 1, 1],
// ];
const getNewGrid = (start, dp) => {
  const n = dp.length;
  while (start[0] !== 0 || start[1] !== 0) {
    let left = start[0] > 0 ? [start[0] - 1, start[1]] : 0;
    let top = start[1] > 0 ? [start[0], start[1] - 1] : 0;
    if (
      left &&
      dp[left[0]][left[1]] !== -1 &&
      dp[left[0]][left[1]] + 1 == dp[start[0]][start[1]]
    ) {
      start[0]--;
      grid[left[0]][left[1]] = 0;
      continue;
    }
    start[1]--;
    grid[top[0]][top[1]] = 0;
  }
  return 
};

// 上述的方法不行，两次动态规划导致的结果就是第一次尽可能多的采取樱桃
// 而第二个次只能在第一次的基础上摘取，第一次最多的方案有多种，所以第二次的最大摘取数量未知
// 并且不一定第一次摘取更多符合总的摘取跟多的条件
