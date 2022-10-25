/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-25 08:56:47                                                  *
 * @LastModifiedDate: 2022-10-25 10:42:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个大小为 n x n 的二元矩阵 grid ，其中 1 表示陆地，0 表示水域。

// 岛 是由四面相连的 1 形成的一个最大组，即不会与非组内的任何其他 1 相连。grid 中 恰好存在两座岛 。

// 你可以将任意数量的 0 变为 1 ，以使两座岛连接起来，变成 一座岛 。

// 返回必须翻转的 0 的最小数目。
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
var shortestBridge = function (grid) {
  // 两座岛的坐标可以风别得出
  const visited = [];
  let island1 = [];
  let island2 = [];
  const n = grid.length;
  const dfs = (i, j, island) => {
    if (
      i < 0 ||
      i >= n ||
      j < 0 ||
      j >= n ||
      grid[i][j] === 0 ||
      visited[i * n + j]
    ) {
      return;
    }
    visited[i * n + j] = true;
    island.push([i, j]);
    for (const dir of DIRS) {
      dfs(dir[0] + i, dir[1] + j, island);
    }
  };
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i * n + j]) {
        if (res) {
          dfs(i, j, island2);
        } else {
          dfs(i, j, island1);
        }
        res++;
      }
    }
  }
  const filterCallback = (v) => {
    // 四周都是1就是内陆，不需要这样的索引
    let round = 0;
    for (const dir of DIRS) {
      let x = dir[0] + v[0];
      let y = dir[1] + v[1];
      if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y]) {
        round++;
      }
    }
    return round !== 4;
  };
  island1 = island1.filter(filterCallback);
  island2 = island2.filter(filterCallback);
  let ans = Infinity;
  for (const unit1 of island1) {
    for (const unit2 of island2) {
      ans = Math.min(ans, getDistance(unit1, unit2));
    }
  }
  return ans;
};

var getDistance = function (start, end) {
  return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]) - 1;
};

[
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  // 两座岛的坐标可以风别得出
  const visited = [];
  let island = [];
  const n = grid.length;
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= n ||
      j < 0 ||
      j >= n ||
      grid[i][j] === 0 ||
      visited[i * n + j]
    ) {
      return;
    }
    visited[i * n + j] = true;
    island.push([i, j]);
    for (const dir of DIRS) {
      dfs(dir[0] + i, dir[1] + j);
    }
  };
  outer: for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i * n + j]) {
        dfs(i, j);
        break outer;
      }
    }
  }
  const filterCallback = (v) => {
    // 四周都是1就是内陆，不需要这样的索引
    let round = 0;
    for (const dir of DIRS) {
      let x = dir[0] + v[0];
      let y = dir[1] + v[1];
      if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y]) {
        round++;
      }
    }
    return round !== 4;
  };
  // 过滤内部单位
  island = island.filter(filterCallback);
  // bfs搜寻
  const bfs = (queue) => {
    let ans = 0;
    while (queue.length) {
      let nxt = [];
      for (const q of queue) {
        for (const dir of DIRS) {
          let x = dir[0] + q[0];
          let y = dir[1] + q[1];
          if (x >= 0 && x < n && y >= 0 && y < n && !visited[x * n + y]) {
            if (grid[x][y] === 1) {
              return ans;
            }
            nxt.push([x, y]);
            visited[x * n + y] = true;
          }
        }
      }
      queue = nxt;
      ans++;
    }
    return ans;
  };
  return bfs(island);
};
