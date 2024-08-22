// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
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
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let queue = [];
  let res = 0;
  let unrotted = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) { 
      if (grid[i][j] === 1) {
        unrotted++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  while (queue.length && unrotted) {
    const nxt = [];
    for (const [x, y] of queue) {
      for (const dir of DIRS) {
        let i = x + dir[0];
        let j = y + dir[1];
        if (i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === 1) {
          nxt.push([i, j]);
          grid[i][j] = 2;
          unrotted--;
        }
      }
    }
    queue = nxt;
    res++;
  }
  return unrotted === 0 ? res : -1;
};
