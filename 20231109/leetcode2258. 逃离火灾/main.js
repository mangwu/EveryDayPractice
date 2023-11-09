// 给你一个下标从 0 开始大小为 m x n 的二维整数数组 grid ，它表示一个网格图。每个格子为下面 3 个值之一：

// 0 表示草地。
// 1 表示着火的格子。
// 2 表示一座墙，你跟火都不能通过这个格子。
// 一开始你在最左上角的格子 (0, 0) ，你想要到达最右下角的安全屋格子 (m - 1, n - 1) 。每一分钟，你可以移动到 相邻 的草地格子。每次你移动 之后 ，着火的格子会扩散到所有不是墙的 相邻 格子。

// 请你返回你在初始位置可以停留的 最多 分钟数，且停留完这段时间后你还能安全到达安全屋。如果无法实现，请你返回 -1 。如果不管你在初始位置停留多久，你 总是 能到达安全屋，请你返回 109 。

// 注意，如果你到达安全屋后，火马上到了安全屋，这视为你能够安全到达安全屋。

// 如果两个格子有共同边，那么它们为 相邻 格子。
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
var maximumMinutes = function (grid) {
  // bfs
  const m = grid.length;
  const n = grid[0].length;
  // 先判断特殊情况:
  // 1. 再不进行任何停留的时候能否到达安全屋
  let personQueue = [[0, 0]];
  let fireQueue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fireQueue.push([i, j]);
      }
    }
  }
  let cur = 1;
  const visited = grid.slice().map((v) => v.slice());
  while (fireQueue.length || personQueue.length) {
    const nxtFireQ = [];
    const nxtPersonQ = [];
    for (const [x, y] of fireQueue) {
      for (const dir of DIRS) {
        let i = dir[0] + x;
        let j = dir[1] + y;
        if (i >= 0 && j >= 0 && i < m && j < n && grid[i][j] === 0) {
          if (visited[i][j] === 0) {
            visited[i][j] = [2, cur]; // [type, time] type类型需要time时间到达该格子
            nxtFireQ.push([i, j]);
          } else if (typeof visited[i][j] === "object") {
          }
        }
      }
    }
    // for(const )
  }
};

const bfs = (queue, grid, record) => {};
