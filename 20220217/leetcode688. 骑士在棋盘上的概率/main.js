/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-17 08:38:53                                                  *
 * @LastModifiedDate: 2022-02-17 20:07:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。

// 象棋骑士有8种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。

// 每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。

// 骑士继续移动，直到它走了 k 步或离开了棋盘。

// 返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。

const DIRS = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  // 总可能情况
  const x = Math.pow(8, k);
  // bfs遍历获得在棋盘上的可能情况
  // 队列
  let queue = [[row, column]];
  let ans = 1;
  while (k > 0) {
    const ntx = [];
    // 出队
    for (let i = 0; i < queue.length; i++) {
      const x = queue[i][0];
      const y = queue[i][1];
      for (const dir of DIRS) {
        const nx = x + dir[0];
        const ny = y + dir[1];
        // 是否在棋盘上
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          ntx.push([nx, ny]);
        }
      }
    }
    // 消耗一次步数
    k--;
    // 记录本轮的数量
    ans = ntx.length;
    // 栈改变
    queue = ntx;
  }
  return ans / x;
};

knightProbability(3, 2, 0, 0);

// 上述方法可行，但是空间复杂度和时间复杂度过高，当k过大时可能造成内存不足的情况
// 因为此题没有所谓的访问过后的说法，所以层序遍历bfs遍历的次数是不可估量的

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability2 = function (n, k, row, column) {
  console.log(dfs(n, k, row, column));
  return dfs(n, k, row, column);
};
// 暴力dfs
const dfs = (n, k, i, j) => {
  // 跳到棋盘外不会增加概率，直接返回0
  if (i < 0 || j < 0 || i >= n || j >= n) {
    return 0;
  }
  // 步数跳完，不用再递归，直接返回1的概率(当前不用再选择，在路径上的概率称1即可)
  if (k == 0) {
    return 1;
  }
  // 遍历每个方向，每个路径概率均等，都为 1 / 8
  let ans = 0;
  for (let x = 0; i < DIRS.length; i++) {
    const dir = DIRS[x];
    // 开始每条路径概率在前一个路径基础上乘以 1 / 8
    // 总路径概率之和就为总之结果
    ans = ans + dfs(n, k - 1, i + dir[0], j + dir[1]) / 8.0;
  }
  return ans;
};

// 同样的
knightProbability2(3, 2, 0, 0);

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability3 = function (n, k, row, column) {
  // console.log(dfsWithCache(n, k, row, column));
  // 三维数组
  const cache = new Array(n)
    .fill(-1)
    .map(() => new Array(n).fill(-1).map(() => new Array(k).fill(-1)));
  console.log(dfsWithCache(n, k, row, column, cache));
  return dfsWithCache(n, k, row, column, cache);
};

// 记忆dfs
const dfsWithCache = (n, k, i, j, cache) => {
  // 跳到棋盘外不会增加概率，直接返回0
  if (i < 0 || j < 0 || i >= n || j >= n) {
    return 0;
  }
  // 步数跳完，不用再递归，直接返回1的概率(当前不用再选择，在路径上的概率称1即可)
  if (k == 0) {
    return 1;
  }
  // 缓存中存在就返回
  if (cache[i][j][k] != -1) {
    return cache[i][j][k];
  }
  // 遍历每个方向，每个路径概率均等，都为 1 / 8
  let ans = 0;
  for (let x = 0; i < DIRS.length; i++) {
    const dir = DIRS[x];
    // 开始每条路径概率在前一个路径基础上乘以 1 / 8
    // 总路径概率之和就为总之结果
    ans = ans + dfsWithCache(n, k - 1, i + dir[0], j + dir[1], cache) / 8.0;
  }
  cache[i][j][k] = ans;
  return ans;
};

knightProbability3(3, 2, 0, 0)