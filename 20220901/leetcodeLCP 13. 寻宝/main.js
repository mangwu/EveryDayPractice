/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-01 15:51:36                                                  *
 * @LastModifiedDate: 2022-09-01 17:27:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们得到了一副藏宝图，藏宝图显示，在一个迷宫中存在着未被世人发现的宝藏。

// 迷宫是一个二维矩阵，用一个字符串数组表示。它标识了唯一的入口（用 'S' 表示），
// 和唯一的宝藏地点（用 'T' 表示）。但是，宝藏被一些隐蔽的机关保护了起来。在地图上有若干个机关点（用 'M' 表示），
// 只有所有机关均被触发，才可以拿到宝藏。

// 要保持机关的触发，需要把一个重石放在上面。迷宫中有若干个石堆（用 'O' 表示），
// 每个石堆都有无限个足够触发机关的重石。但是由于石头太重，我们一次只能搬一个石头到指定地点。

// 迷宫中同样有一些墙壁（用 '#' 表示），我们不能走入墙壁。剩余的都是可随意通行的点（用 '.' 表示）。
// 石堆、机关、起点和终点（无论是否能拿到宝藏）也是可以通行的。

// 我们每步可以选择向上/向下/向左/向右移动一格，并且不能移出迷宫。搬起石头和放下石头不算步数。
// 那么，从起点开始，我们最少需要多少步才能最后拿到宝藏呢？如果无法拿到宝藏，返回 -1 。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function (maze) {
  // 关键点在于如何缺点每个机关触发的路线
  // 如果只有一个机关，需要找到start  - o - m - t线最短之和 决定的因素是start - o 和m - o；m - t  是固定的
  // 如果有两个机关，需要找到start - 0 - m1 - 0 - m2 - end 或 start - 0 - m2 - 0 - m1 - end的最短路线之和
  // 获取start到达所有O的距离
  // 获取M到达所有0的距离
  // 获取M到达其它M的距离
  // 获取M到达T的距离
  // 获取start到达T的距离
  // 有n个M，M有A(n,n)种方式
  // 机关
  // Mhash保存 start 和所有M到达所有O之间的最短距离
  const MHash = new Map();
  let start = null;
  let target = null;

  const O = [];
  const m = maze.length;
  const n = maze[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (maze[i][j] == "S") {
        start = [i, j];
      } else if (maze[i][j] == "T") {
        target = [i, j];
      } else if (maze[i][j] == "M") {
        MHash.set(i * n + j, new Map());
      } else if (maze[i][j] == "O") {
        O.push([i, j]);
      }
    }
  }
  let ans = 0;
  if (MHash.size == 0) {
    // 直接返回S -> T的距离
    return distance(start, target, maze, m, n);
  }
  MHash.set(start[0] * n + start[1], new Map());
  // 计算 [target ,O1, O2,...On] 每个到达[start, m1,m2...mn]的距离
  O.push(target);
  for (let i = 0; i < O.length; i++) {
    bfs(O[i], MHash, [], m, n, maze);
  }
  const start2O = MHash.get(start[0] * n + start[1]);
  const end2O = MHash.get(target[0] * n + target[1]);
  MHash.delete(start[0] * n + start[1]);
  MHash.delete(target[0] * n + target[1]);
  let cur 
  const dfs = (pre, hash) => {
    if (hash.size == 0) {
      // 全部遍历完毕
      
    }
  };
  for (const [key, val] of start2O) {
    // key是O点，val是距离
    dfs(val, MHash);
  }
  return -1;
};



const bfs = (start, targets, visited, m, n, maze) => {
  // 求[target, O1,O2...0n]到达[start, m1, m2 ... mn]的最小距离，到达不了就是-1
  let queue = [start];
  let level = 1;
  let key = start[0] * n + start[1];
  visited[key] = true;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      for (const dir of DIRS) {
        const x = dir[0] + q[0];
        const y = dir[1] + q[1];
        if (
          x >= 0 &&
          y >= 0 &&
          x < m &&
          y < n &&
          !visited[x * n + y] &&
          maze[x][y] !== "#"
        ) {
          visited[x * n + y] = true;
          if (targets.has(x * n + y)) {
            targets.get(x * n + y).set(key, level);
          }
          nxt.push([x, y]);
        }
      }
    }
    queue = nxt;
    level++;
  }
};

/**
 * @description 返回最短距离
 * @param {number[]} start 开始位置
 * @param {number[]} target 目标位置
 * @param {string[]} maze
 * @param {number} m 矩阵长度
 * @param {number} n 矩阵高度
 * @returns 最短距离
 */
const distance = (start, target, maze, m, n) => {
  let queue = [start];
  const visited = [];
  visited[start[0] * n + start[1]];
  let ans = 1;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      for (const dir of DIRS) {
        const x = dir[0] + q[0];
        const y = dir[1] + q[1];
        if (
          x >= 0 &&
          y >= 0 &&
          x < m &&
          y < n &&
          !visited[x * n + y] &&
          maze[x][y] !== "#"
        ) {
          visited[x * n + y] = true;
          nxt.push([x, y]);
          if (x == target[0] && y == target[1]) {
            return ans;
          }
        }
      }
    }
    ans++;
    queue = nxt;
  }
  return -1;
};
//

// m1 - 0 - m2 之间的最小值 0 是可变的


