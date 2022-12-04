/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-04 22:44:59                                                  *
 * @LastModifiedDate: 2022-12-04 23:13:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，表示总共有 n 个城市，城市从 1 到 n 编号。给你一个二维数组 roads ，其中 roads[i] = [ai, bi, distancei] 表示城市 ai 和 bi 之间有一条 双向 道路，道路距离为 distancei 。城市构成的图不一定是连通的。

// 两个城市之间一条路径的 分数 定义为这条路径中道路的 最小 距离。

// 城市 1 和城市 n 之间的所有路径的 最小 分数。

// 注意：

// 一条路径指的是两个城市之间的道路序列。
// 一条路径可以 多次 包含同一条道路，你也可以沿着路径多次到达城市 1 和城市 n 。
// 测试数据保证城市 1 和城市n 之间 至少 有一条路径。

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  // bfs
  const nodes = new Set([1]);
  let queue = [1];
  const visited = [];
  let hash = new Map();
  for (const road of roads) {
    hash.has(road[0])
      ? hash.get(road[0]).push(road[1])
      : hash.set(road[0], [road[1]]);
    hash.has(road[1])
      ? hash.get(road[1]).push(road[0])
      : hash.set(road[1], [road[0]]);
  }
  visited[1] = true;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      const arr = hash.get(q);
      if (arr) {
        for (const item of arr) {
          if (!visited[item]) {
            visited[item] = true;
            nxt.push(item);
            nodes.add(item);
          }
        }
      }
    }
    queue = nxt;
  }
  let ans = Infinity;
  for (const road of roads) {
    if (nodes.has(road[0]) && nodes.has(road[1])) {
      ans = Math.min(ans, road[2]);
    }
  }
  return ans;
};
