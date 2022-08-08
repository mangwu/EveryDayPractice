/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-08 19:13:01                                                  *
 * @LastModifiedDate: 2022-08-08 20:28:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。
// “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

// 这个岛被分割成一个由若干方形单元格组成的网格。
// 给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

// 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、
// 西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

// 返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci]
// 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。

const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const bfs = (i, j, visited) => {
    let queue = [[i, j]];
    let pacific = false;
    let atlantic = false;
    visited[i * n + j] = true;
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        if (q[0] == 0) {
          pacific = true;
        }
        if (q[0] == m - 1) {
          atlantic = true;
        }
        if (q[1] == 0) {
          pacific = true;
        }
        if (q[1] == n - 1) {
          atlantic = true;
        }
        if (pacific && atlantic) {
          return true;
        }
        for (const dir of DIRS) {
          const x = dir[0] + q[0];
          const y = dir[1] + q[1];
          if (
            x >= 0 &&
            y >= 0 &&
            x < m &&
            y < n &&
            !visited[x * n + y] &&
            heights[x][y] <= heights[q[0]][q[1]]
          ) {
            visited[x * n + y] = true;
            nxt.push([x, y]);
          }
        }
      }
      queue = nxt;
    }
    return atlantic && pacific;
  };
  let ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == n - 1) {
        ans.push([i, j]);
        continue;
      }
      if (i == m - 1 && j == 0) {
        ans.push([i, j]);
        continue;
      }
      if (bfs(i, j, [])) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};


// 可以从边界开始统计能流入两片海洋的区域
