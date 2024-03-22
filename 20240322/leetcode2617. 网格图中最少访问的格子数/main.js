// 给你一个下标从 0 开始的 m x n 整数矩阵 grid 。你一开始的位置在 左上角 格子 (0, 0) 。

// 当你在格子 (i, j) 的时候，你可以移动到以下格子之一：

// 满足 j < k <= grid[i][j] + j 的格子 (i, k) （向右移动），或者
// 满足 i < k <= grid[i][j] + i 的格子 (k, j) （向下移动）。
// 请你返回到达 右下角 格子 (m - 1, n - 1) 需要经过的最少移动格子数，如果无法到达右下角格子，请你返回 -1 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function (grid) {
  // bfs
  const m = grid.length;
  const n = grid[0].length;
  if (m === 1 && n === 1) return 1;
  let queue = [[0, 0]];
  const visited = [];
  visited[0] = false;
  let level = 1;
  while (queue.length) {
    const nxt = [];
    for (const [x, y] of queue) {
      // 向右移动
      const right = Math.min(n - 1, grid[x][y] + y);
      for (let j = y + 1; j <= right; j++) {
        if (x === m - 1 && j === n - 1) return level + 1;
        if (!visited[x * n + j]) {
          nxt.push([x, j]);
          visited[x * n + j] = true;
        }
      }
      // 向下移动
      const bottom = Math.min(m - 1, grid[x][y] + x);
      for (let i = x + 1; i <= bottom; i++) {
        if (i === m - 1 && y === n - 1) return level + 1;
        if (!visited[i * n + y]) {
          nxt.push([i, y]);
          visited[i * n + y] = true;
        }
      }
    }
    level++;
    queue = nxt;
  }
  return -1;
};

// 会超时，因为会多次访问已经访问过的节点

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  insert(value) {
    if (value == null) return false;
    this.items.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = 0;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (temp !== idx) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function (grid) {
  // 快速确定到达位置(i,j)时需要选择的上一个位置
  // 使用优先队列维护到达(i,j)时，上一个移动次数最小的位置
  const m = grid.length;
  const n = grid[0].length;
  const dist = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  const row = new Array(m).fill(0).map((_v, i) => {
    const pq = new PQ((a, b) => dist[i][a] - dist[i][b]);
    pq.insert(0);
    return pq;
  });
  const col = new Array(n).fill(0).map((_v, j) => {
    const pq = new PQ((a, b) => dist[a][j] - dist[b][j]);
    pq.insert(0);
    return pq;
  });

  dist[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      // 出队左边不符合条件的
      while (!row[i].isEmpty() && grid[i][row[i].peek()] + row[i].peek() < j) {
        row[i].poll();
      }
      if (!row[i].isEmpty()) {
        // 选取左边的最小步数
        dist[i][j] = dist[i][row[i].peek()] + 1;
      }
      // 出队上边不符合条件的
      while (!col[j].isEmpty() && grid[col[j].peek()][j] + col[j].peek() < i) {
        col[j].poll();
      }
      if (!col[j].isEmpty()) {
        // 选取上边最小的步数，要和当前dist[i][j]比较
        dist[i][j] = Math.min(
          dist[i][j] === -1 ? Infinity : dist[i][j],
          dist[col[j].peek()][j] + 1
        );
      }
      if (dist[i][j] !== -1) {
        row[i].insert(j);
        col[j].insert(i);
      }
    }
  }
  return dist[m - 1][n - 1];
};
