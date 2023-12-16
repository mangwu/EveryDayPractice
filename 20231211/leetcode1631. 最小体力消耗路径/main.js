// 你准备参加一场远足活动。给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子 (row, col) 的高度。一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从 0 开始编号）。你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。

// 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。

// 请你返回从左上角走到右下角的最小 体力消耗值

const DIRS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  // 计算出任意两个节点之间的最小体力消耗
  const dp = new Array(m * n)
    .fill(0)
    .map(() => new Array(m * n).fill(Infinity));
  const isValid = (x, y) => {
    return x >= 0 && y >= 0 && x < m && y < n;
  };
  // 先初始化相连的节点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const dir of DIRS) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (isValid(x, y)) {
          const node1 = i * n + j;
          const node2 = x * n + y;
          dp[node1][node2] = Math.abs(heights[i][j] - heights[x][y]);
        }
      }
    }
  }
  for (let node = 0; node < m * n; node++) {
    dp[node][node] = 0;
  }
  let k = m * n;
  // 动态规划找出每个节点最小消耗体力
  while (k) {
    for (let node1 = 0; node1 < m * n; node1++) {
      for (let node2 = 0; node2 < m * n; node2++) {
        if (node1 !== node2) {
          const i = Math.floor(node1 / n);
          const j = node1 % n;
          const x = Math.floor(node2 / n);
          const y = node2 % n;
          // 获取四边
          const node1Arr = [];
          const node2Arr = [];
          for (const dir of DIRS) {
            const [ir, jr] = [i + dir[0], j + dir[1]];
            const [xr, yr] = [x + dir[0], y + dir[1]];
            if (isValid(ir, jr)) node1Arr.push(ir * n + jr);
            if (isValid(xr, yr)) node2Arr.push(xr * n + yr);
          }
          let res = Infinity;
          for (const item1 of node1Arr) {
            for (const item2 of node2Arr) {
              res = Math.min(
                res,
                Math.max(dp[item1][item2], dp[node1][item1], dp[node2][item2])
              );
            }
          }
          dp[node1][node2] = res;
          dp[node2][node1] = res;
        }
      }
    }
    k--;
  }
  console.log(dp);
  return dp[0][m * n - 1];
};

const random = require("../../publicFunc/random/random");

const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(random.randomArr(10, 1, 255));
}
console.log(arr);

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  if (m === 1 && n === 1) return 0;
  let left = 0;
  let right = 999999;
  const check = (target) => {
    const visited = [];
    visited[0] = true;
    let queue = [[0, 0]];
    while (queue.length) {
      const nxt = [];
      for (const [i, j] of queue) {
        for (const dir of DIRS) {
          const [x, y] = [i + dir[0], j + dir[1]];
          if (
            x >= 0 &&
            y >= 0 &&
            x < m &&
            y < n &&
            !visited[x * n + y] &&
            Math.abs(heights[x][y] - heights[i][j]) <= target
          ) {
            visited[x * n + y] = true;
            nxt.push([x, y]);
            if (x === m - 1 && y === n - 1) return true;
          }
        }
      }
      queue = nxt;
    }
    return false;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // 符合条件
      right = mid - 1;
    } else {
      // 不符合条件
      left = mid + 1;
    }
  }
  return left;
};
