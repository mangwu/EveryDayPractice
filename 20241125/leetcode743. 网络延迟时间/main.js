/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-25 17:47:41                                                  *
 * @LastModifiedDate: 2024-11-25 18:31:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个网络节点，标记为 1 到 n。

// 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const res = new Array(n + 1).fill(Infinity);
  res[0] = -1;
  const hash = new Map();
  for (const [u, v, w] of times) {
    hash.has(u) ? hash.get(u).push([v, w]) : hash.set(u, [[v, w]]);
  }
  const dfs = (node, pre, sum) => {
    if (sum <= res[node]) {
      res[node] = sum;
    } else return;
    const nxt = hash.get(node) || [];
    for (const [v, w] of nxt) {
      if (node !== pre) {
        dfs(v, node, sum + w);
      }
    }
  };
  dfs(k, -1, 0);
  const max = Math.max.apply(null, res);
  return max === Infinity ? -1 : max;
};

const INF = Number.MAX_SAFE_INTEGER;

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const hash = new Map();
  for (let [u, v, w] of times) {
    u--;
    v--;
    hash.has(u) ? hash.get(u).push([v, w]) : hash.set(u, [[v, w]]);
  }
  const distance = dijstra(k - 1, n, hash);
  console.log(distance);
  const max = Math.max.apply(null, distance);
  return max === INF ? -1 : max;
};

// dijstra算法

function dijstra(src, n, linkedList) {
  const distance = new Array(n).fill(INF);
  const visited = new Array(n).fill(false);
  distance[src] = 0;
  for (let i = 0; i < n - 1; i++) {
    const vertex = minDistance(distance, visited);
    visited[vertex] = true;
    const neighbors = linkedList.get(vertex) || [];
    for (const [neighbor, d] of neighbors) {
      if (distance[neighbor] > d + distance[vertex]) {
        distance[neighbor] = d + distance[vertex];
      }
    }
  }
  return distance;
}
// 找到未访问的最小值索引
function minDistance(distance, visited) {
  const n = visited.length;
  let minDis = INF;
  let idx = -1;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && distance[i] < minDis) {
      minDis = distance[i];
      idx = i;
    }
  }
  return idx;
}
