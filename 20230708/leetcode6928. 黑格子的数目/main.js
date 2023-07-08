/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-08 23:13:04                                                  *
 * @LastModifiedDate: 2023-07-08 23:41:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 m 和 n ，表示一个下标从 0 开始的 m x n 的网格图。

// 给你一个下标从 0 开始的二维整数矩阵 coordinates ，其中 coordinates[i] = [x, y] 表示坐标为 [x, y] 的格子是 黑色的 ，所有没出现在 coordinates 中的格子都是 白色的。

// 一个块定义为网格图中 2 x 2 的一个子矩阵。更正式的，对于左上角格子为 [x, y] 的块，其中 0 <= x < m - 1 且 0 <= y < n - 1 ，包含坐标为 [x, y] ，[x + 1, y] ，[x, y + 1] 和 [x + 1, y + 1] 的格子。

// 请你返回一个下标从 0 开始长度为 5 的整数数组 arr ，arr[i] 表示恰好包含 i 个 黑色 格子的块的数目。
const DIRS = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function (m, n, coordinates) {
  // 共有 (m - 1) * (n - 1) 个4网格格子
  const sum = (m - 1) * (n - 1);
  const ans = new Array(5).fill(0);
  ans[0] = sum; // 初始不含黑色格子的最多
  const set = new Set(); // 已存格子
  for (const [i, j] of coordinates) {
    // 当前黑色格子最多影响四个格子
    // 左上角
    for (const dir of DIRS) {
      const x = dir[0] + i;
      const y = dir[1] + j;
      if (x >= 0 && x < m && y >= 0 && y < n) {
        // 合法4网格格子，计算当前总格子数量
        let cur = 0;
        // [x, y] [x,j] [i, y]
        if (set.has(x * n + y)) cur++;
        if (set.has(x * n + j)) cur++;
        if (set.has(i * n + y)) cur++;
        console.log(cur);
        switch (cur) {
          case 0:
            // 新增一
            ans[1]++;
            ans[0]--;
            break;
          case 1:
            // 新增二
            ans[2]++;
            ans[1]--;
            break;
          case 2:
            // 新增三
            ans[3]++;
            ans[2]--;
            break;
          default:
            // 新增四
            ans[4]++;
            ans[3]--;
            break;
        }
      }
    }
    console.log(ans);
    set.add(i * n + j);
  }
  return ans;
};

[
  [0, 0],
  [1, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [3, 3],
];

// 1 0 1 1 0
// 0 1 1 0 0
// 0 0 0 0 0
// 0 0 0 1 0
