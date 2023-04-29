/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-29 22:41:42                                                  *
 * @LastModifiedDate: 2023-04-29 22:53:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始大小为 m x n 的二维整数数组 grid ，其中下标在 (r, c) 处的整数表示：

// 如果 grid[r][c] = 0 ，那么它是一块 陆地 。
// 如果 grid[r][c] > 0 ，那么它是一块 水域 ，且包含 grid[r][c] 条鱼。
// 一位渔夫可以从任意 水域 格子 (r, c) 出发，然后执行以下操作任意次：

// 捕捞格子 (r, c) 处所有的鱼，或者
// 移动到相邻的 水域 格子。
// 请你返回渔夫最优策略下， 最多 可以捕捞多少条鱼。如果没有水域格子，请你返回 0 。

// 格子 (r, c) 相邻 的格子为 (r, c + 1) ，(r, c - 1) ，(r + 1, c) 和 (r - 1, c) ，前提是相邻格子在网格图内。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        let queue = [[i, j]];
        let cur = grid[i][j];
        grid[i][j] = -1;
        while (queue.length) {
          const nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              const x = dir[0] + q[0];
              const y = dir[1] + q[1];
              if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] > 0) {
                cur += grid[x][y];
                grid[x][y] = -1;
                nxt.push([x, y]);
              }
            }
          }
          queue = nxt;
        }
        res = Math.max(res, cur);
      }
    }
  }
  return res;
};

// 5 3 0 5 7 2 5
// 1 0 1 2 0 0 0
// 5 0 0 0 1 0 1
// 6 0 1 1 1 0 1
// 0 3 2 2 0 0 9