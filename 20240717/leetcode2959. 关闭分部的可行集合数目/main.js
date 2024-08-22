/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-17 16:44:25                                                  *
 * @LastModifiedDate: 2024-07-18 14:40:36                                      *
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
  // 根据arr获取本次的adjust
  const len = arr.length;
  if (len < 2) return 1;
  const adjust = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      adjust.has(i)
        ? adjust.get(i).push([j, matrix[arr[i]][arr[j]]])
        : adjust.set(i, [[j, matrix[arr[i]][arr[j]]]]);
      adjust.has(j)
        ? adjust.get(j).push([i, matrix[arr[i]][arr[j]]])
        : adjust.set(j, [[i, matrix[arr[i]][arr[j]]]]);
    }
  }
  for (let i = 0; i < len; i++) {
    const distance = dijkstra(adjust, i, len);
    if (distance.some((v) => v > maxDistance)) return 0;
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
function minDistance(distance, visited) {
  const n = distance.length;
  let minIdx = 0;
  let minValue = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (distance[i] < minValue && !visited[i]) {
      minIdx = i;
      minValue = distance[i];
    }
  }
  return minIdx;
}

function dijkstra(adjust, src, n) {
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  distance[src] = 0;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n - 1; i++) {
    const vertex = minDistance(distance, visited);
    visited[vertex] = true;
    const neighbors = adjust.get(vertex);
    for (const [neighbor, dis] of neighbors || []) {
      distance[neighbor] = Math.min(distance[neighbor], dis + distance[vertex]);
    }
  }
  return distance;
}

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
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
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
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
    let temp = idx;
    const size = this.size();
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
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
}

function dijkstraUsePQ(adjust, src, n) {
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  distance[src] = 0;
  const pq = new PQ((a, b) => a[0] - b[0]); // [dis, vertex]
  pq.insert([0, src]);
  const visited = new Array(n).fill(false);
  while (!pq.isEmpty()) {
    const [_dis, vertex] = pq.poll();
    if (visited[vertex]) continue;
    visited[vertex] = true;
    const neighbors = adjust.get(vertex);
    for (const [neighbor, d] of neighbors || []) {
      if (distance[vertex] + d < distance[neighbor]) {
        distance[neighbor] = distance[vertex] + d;
        pq.insert([distance[neighbor], neighbor]);
      }
    }
  }
  return distance;
}

/**
 * @description 测试dijkstra算法
 * @param {number[][]} edges
 * @param {number} n
 * @param {number} src
 * @returns {number[]}
 */
function dijkstraTest(edges, n, src) {
  const adjust = new Map();
  for (const [u, w, d] of edges) {
    adjust.has(u) ? adjust.get(u).push([w, d]) : adjust.set(u, [[w, d]]);
    adjust.has(w) ? adjust.get(w).push([u, d]) : adjust.set(w, [[u, d]]);
  }
  console.log(dijkstra(adjust, src, n));
  console.log(dijkstraUsePQ(adjust, src, n));
}

dijkstraTest(
  [
    [0, 1, 2],
    [1, 2, 10],
    [0, 2, 10],
    [0, 3, 5],
    [1, 2, 5],
    [2, 5, 7],
    [3, 6, 4],
    [3, 7, 8],
    [3, 9, 8],
    [4, 5, 6],
    [4, 7, 5],
    [4, 8, 5],
    [7, 8, 3],
    [7, 9, 2],
    [6, 8, 2],
    [6, 9, 3],
    [6, 5, 4],
    [0, 9, 5],
    [0, 4, 5],
    [1, 8, 6],
  ],
  10,
  0
);
