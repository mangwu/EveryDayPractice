/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-27 09:24:01                                                  *
 * @LastModifiedDate: 2022-04-27 13:54:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。
//  “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

// 这个岛被分割成一个由若干方形单元格组成的网格。
// 给定一个 m x n 的整数矩阵 heights ，
// heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

// 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。
// 水可以从海洋附近的任何单元格流入海洋。

// 返回 网格坐标 result 的 2D列表 ，其中 result[i] = [ri, ci]
// 表示雨水可以从单元格 (ri, ci) 流向 太平洋和大西洋 。

const DIRS = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // 流水即能流入太平洋又能流入大西洋
  const m = heights.length;
  const n = heights[0].length;
  const visited = [];
  let ans = [];
  const bfs = (i, j) => {
    // 上左 + 下右
    let border = [false, false];
    if (i == 0 || j == 0) {
      border[0] = true;
    }
    if (i == m - 1 || j == n - 1) {
      border[1] = true;
    }
    let queue = [[i, j]];
    let res = [[i, j]];
    visited[i * n + j] = border;
    while (queue.length > 0) {
      let nxt = [];
      for (const q of queue) {
        for (const dir of DIRS) {
          const x = dir[0] + q[0];
          const y = dir[1] + q[1];
          if (
            x >= 0 &&
            y >= 0 &&
            x < m &&
            y < n &&
            heights[x][y] <= heights[q[0]][q[1]]
          ) {
            if (!visited[x * n + y]) {
              visited[x * n + y] = border;
              if (i == 0 || j == 0) {
                border[0] = true;
              }
              if (i == m - 1 || j == n - 1) {
                border[1] = true;
              }
              nxt.push([x, y]);
              res.push([x, y]);
            } else {
              if (visited[x * n + y][0]) {
                border[0] = true;
              }
              if (visited[x * n + y][1]) {
                border[1] = true;
              }
            }
          }
        }
      }
      queue = nxt;
    }
    console.log("---bfs结果---", border, res);
    if (border[0] && border[1]) {
      ans.splice(ans.length, 0, ...res);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i * n + j]) {
        console.log("----一次bfs", i, j);
        bfs(i, j);
        console.log("-----ans结果-----", ans);
      }
    }
  }
  return ans;
};

// 正向bfs错误
// pacificAtlantic([
//   [1, 2, 2, 3, 5],
//   [3, 2, 3, 4, 4],
//   [2, 4, 5, 3, 1],
//   [6, 7, 1, 4, 5],
//   [5, 1, 1, 2, 4],
// ]);

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // 流水只可能从从四周流入大海
  // 所以使用反向dfs，遍历4周的
  const m = heights.length;
  const n = heights[0].length;
  const res = new Array(m)
    .fill(0)
    .map((v) => new Array(n).fill(0).map((_v) => new Array(2).fill(false)));
  for (let i = 0; i < m; i++) {
    res[i][0][0] = true;
    res[i][n - 1][1] = true;
  }
  for (let j = 0; j < n; j++) {
    res[0][j][0] = true;
    res[m - 1][j][1] = true;
  }
  const ans = [];
  const dfs = (i, j, visited) => {
    for (const dir of DIRS) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (
        x >= 0 &&
        y >= 0 &&
        x < m &&
        y < n &&
        heights[x][y] >= heights[i][j] &&
        !visited[x * n + y]
      ) {
        visited[i * n + j] = true;
        if (res[i][j][0]) {
          res[x][y][0] = true;
        }
        if (res[i][j][1]) {
          res[x][y][1] = true;
        }
        dfs(x, y, visited);
        // visited[i * n + j] = false;
      }
    }
  };
  for (let i = 0; i < m; i++) {
    const visited1 = [];
    const visited2 = [];
    dfs(i, 0, visited1);
    dfs(i, n - 1, visited2);
  }
  for (let j = 1; j < n - 1; j++) {
    const visited1 = [];
    const visited2 = [];
    dfs(0, j, visited1);
    dfs(m - 1, j, visited2);
  }
  console.log(res);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (res[i][j][0] && res[i][j][1]) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};

pacificAtlantic([
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 15],
  [51, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 65, 16],
  [50, 95, 132, 133, 134, 135, 136, 137, 138, 139, 140, 107, 66, 17],
  [49, 94, 131, 160, 161, 162, 163, 164, 165, 166, 141, 108, 67, 18],
  [48, 93, 130, 159, 180, 181, 182, 183, 184, 167, 142, 109, 68, 19],
  [47, 92, 129, 158, 179, 192, 193, 194, 185, 168, 143, 110, 69, 20],
  [46, 91, 128, 157, 178, 191, 196, 195, 186, 169, 144, 111, 70, 21],
  [45, 90, 127, 156, 177, 190, 189, 188, 187, 170, 145, 112, 71, 22],
  [44, 89, 126, 155, 176, 175, 174, 173, 172, 171, 146, 113, 72, 23],
  [43, 88, 125, 154, 153, 152, 151, 150, 149, 148, 147, 114, 73, 24],
  [42, 87, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 74, 25],
  [41, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 26],
  [40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27],
]);
