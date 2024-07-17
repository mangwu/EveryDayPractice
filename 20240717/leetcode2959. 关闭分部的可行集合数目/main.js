/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-17 16:44:25                                                  *
 * @LastModifiedDate: 2024-07-17 17:37:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个公司在全国有 n 个分部，它们之间有的有道路连接。一开始，所有分部通过这些道路两两之间互相可以到达。

// 公司意识到在分部之间旅行花费了太多时间，所以它们决定关闭一些分部（也可能不关闭任何分部），同时保证剩下的分部之间两两互相可以到达且最远距离不超过 maxDistance 。

// 两个分部之间的 距离 是通过道路长度之和的 最小值 。

// 给你整数 n ，maxDistance 和下标从 0 开始的二维整数数组 roads ，其中 roads[i] = [ui, vi, wi] 表示一条从 ui 到 vi 长度为 wi的 无向 道路。

// 请你返回关闭分部的可行方案数目，满足每个方案里剩余分部之间的最远距离不超过 maxDistance。

// 注意，关闭一个分部后，与之相连的所有道路不可通行。

// 注意，两个分部之间可能会有多条道路。

/**
 * @param {number} n
 * @param {number} maxDistance
 * @param {number[][]} roads
 * @return {number}
 */
var numberOfSets = function (n, maxDistance, roads) {
  const matrix = new Array(n)
    .fill(Infinity)
    .map(() => new Array(n).fill(Infinity));
  for (const [w, v, dis] of roads) {
    matrix[w][v] = Math.min(matrix[w][v], dis);
    matrix[v][w] = Math.min(matrix[v][w], dis);
  }
  const max = 1 << n;
  let ans = 0;
  for (let mask = 0; mask < max; mask++) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      if (((mask >> i) & 1) === 1) arr.push(i);
    }
    ans += confirmCondition(matrix, maxDistance, arr);
  }
  return ans;
};

function confirmCondition(matrix, maxDistance, arr) {
  for (const w of arr) {
    for (const v of arr) {
      if (w !== v && matrix[w][v] > maxDistance) return 0;
    }
  }
  return 1;
}

// 1 + 10 + 45 +
// dijkstra算法，通过遍历计算最小距离
/**
 * @description 找到最小值的索引
 * @param {number[]} distance
 * @returns {number}
 */
function minDistance(distance) {
  const n = distance.length;
  let minIdx = 0;
  let minValue = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (distance[i] < minValue) {
      minIdx = i;
      minValue = distance[i];
    }
  }
  return minIdx;
}

function dijkstra(adjust, src, n) {
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  distance[src] = 0;
  for (let i = 0; i < n - 1; i++) {
    const vertex = minDistance(distance);
    const neighbors = adjust.get(vertex);
    for (const [neighbor, dis] of neighbors || []) {
      distance[neighbor] = Math.min(distance[neighbor], dis + distance[vertex]);
    }
  }
}
