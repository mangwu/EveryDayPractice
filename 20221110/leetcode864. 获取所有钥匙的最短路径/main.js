/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-10 09:11:50                                                  *
 * @LastModifiedDate: 2022-11-10 10:53:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二维网格 grid ，其中：

// '.' 代表一个空房间
// '#' 代表一堵
// '@' 是起点
// 小写字母代表钥匙
// 大写字母代表锁
// 我们从起点开始出发，一次移动是指向四个基本方向之一行走一个单位空间。我们不能在网格外面行走，也无法穿过一堵墙。如果途经一个钥匙，我们就把它捡起来。除非我们手里有对应的钥匙，否则无法通过锁。

// 假设 k 为 钥匙/锁 的个数，且满足 1 <= k <= 6，字母表中的前 k 个字母在网格中都有自己对应的一个小写和一个大写字母。换言之，每个锁有唯一对应的钥匙，每个钥匙也有唯一对应的锁。另外，代表钥匙和锁的字母互为大小写并按字母顺序排列。

// 返回获取所有钥匙所需要的移动的最少次数。如果无法获取所有钥匙，返回 -1 。
const DIRS = [
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 0],
];

// 队列
class Q {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.count = 0;
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  enqueue(val) {
    this.items[this.rear++] = val;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items[this.rear - this.count--];
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.rear - this.count];
  }
}
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  // 获取起始位置，使用hash表记录钥匙位置（使用0~n进行记录方便状态压缩）
  const m = grid.length;
  const n = grid[0].length;
  let sx,
    sy = 0;
  const keyHash = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "@") {
        sx = i;
        sy = j;
      } else if (grid[i][j] >= "a" && grid[i][j] <= "f") {
        // 只需要记录钥匙(对应的锁为大写)
        keyHash.set(grid[i][j], keyHash.size);
      }
    }
  }
  // bfs查找最短路径
  const queue = new Q();
  // 状态记录，避免重复查找
  const dist = new Array(m)
    .fill(0)
    .map(() =>
      new Array(n).fill(0).map(() => new Array(1 << keyHash.size).fill(-1))
    );
  // 第三位表示当前步数
  queue.enqueue([sx, sy, 0]);
  dist[sx][sy][0] = 0;
  const target = (1 << keyHash.size) - 1; // 目标是获取所有钥匙
  while (queue.size()) {
    const item = queue.dequeue();
    let [x, y, mask] = item; // 获取当前位置以及获取的钥匙
    for (const dir of DIRS) {
      let nx = x + dir[0];
      let ny = y + dir[1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== "#") {
        // 可以访问
        if (
          (grid[nx][ny] === "." || grid[nx][ny] === "@") &&
          dist[nx][ny][mask] === -1 // 没有访问过的普通位置
        ) {
          dist[nx][ny][mask] = dist[x][y][mask] + 1;
          queue.enqueue([nx, ny, mask]);
        } else if ("a" <= grid[nx][ny] && grid[nx][ny] <= "f") {
          // 遇到钥匙
          const id = keyHash.get(grid[nx][ny]); // 钥匙编号
          let newMask = mask | (1 << id); // 新状态
          if (dist[nx][ny][newMask] === -1) {
            // 改状态尚未被选择过
            dist[nx][ny][newMask] = dist[x][y][mask] + 1;
            if (newMask === target) {
              return dist[nx][ny][newMask]; // 获取了全部
            }
            queue.enqueue([nx, ny, newMask]);
          }
        } else if (grid[nx][ny] >= "A" && grid[nx][ny] <= "F") {
          // 遇到了锁
          const id = keyHash.get(grid[nx][ny].toLocaleLowerCase()); // 获取对应钥匙id
          if ((mask & (1 << id)) !== 0 && dist[nx][ny][mask] === -1) {
            // 判断是否有钥匙以及是否走过改状态
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.enqueue([nx, ny, mask]);
          }
        }
      }
    }
  }
  return -1;
};

/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  // 获取起始位置，使用hash表记录钥匙位置（使用0~n进行记录方便状态压缩）
  const m = grid.length;
  const n = grid[0].length;
  let sx,
    sy = 0;
  const keyHash = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "@") {
        sx = i;
        sy = j;
      } else if (grid[i][j] >= "a" && grid[i][j] <= "f") {
        // 只需要记录钥匙(对应的锁为大写)
        keyHash.set(grid[i][j], keyHash.size);
      }
    }
  }
  // bfs查找最短路径
  let queue = [];
  // 状态记录，避免重复查找
  const dist = new Array(m)
    .fill(0)
    .map(() =>
      new Array(n).fill(0).map(() => new Array(1 << keyHash.size).fill(-1))
    );
  // 第三位表示当前步数
  queue.push([sx, sy, 0]);
  dist[sx][sy][0] = 0;
  const target = (1 << keyHash.size) - 1; // 目标是获取所有钥匙
  while (queue.length) {
    const nxt = [];
    for (const [x, y, mask] of queue) {
      for (const dir of DIRS) {
        let nx = x + dir[0];
        let ny = y + dir[1];
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== "#") {
          // 可以访问
          if (
            (grid[nx][ny] === "." || grid[nx][ny] === "@") &&
            dist[nx][ny][mask] === -1 // 没有访问过的普通位置
          ) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            nxt.push([nx, ny, mask]);
          } else if ("a" <= grid[nx][ny] && grid[nx][ny] <= "f") {
            // 遇到钥匙
            const id = keyHash.get(grid[nx][ny]); // 钥匙编号
            let newMask = mask | (1 << id); // 新状态
            if (dist[nx][ny][newMask] === -1) {
              // 改状态尚未被选择过
              dist[nx][ny][newMask] = dist[x][y][mask] + 1;
              if (newMask === target) {
                return dist[nx][ny][newMask]; // 获取了全部
              }
              nxt.push([nx, ny, newMask]);
            }
          } else if (grid[nx][ny] >= "A" && grid[nx][ny] <= "F") {
            // 遇到了锁
            const id = keyHash.get(grid[nx][ny].toLocaleLowerCase()); // 获取对应钥匙id
            if ((mask & (1 << id)) !== 0 && dist[nx][ny][mask] === -1) {
              // 判断是否有钥匙以及是否走过改状态
              dist[nx][ny][mask] = dist[x][y][mask] + 1;
              nxt.push([nx, ny, mask]);
            }
          }
        }
      }
    }
    queue = nxt;
  }
  return -1;
};
