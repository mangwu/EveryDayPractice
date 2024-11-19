/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-19 17:32:49                                                  *
 * @LastModifiedDate: 2024-11-19 17:44:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 和一个二维整数数组 queries。

// 有 n 个城市，编号从 0 到 n - 1。初始时，每个城市 i 都有一条单向道路通往城市 i + 1（ 0 <= i < n - 1）。

// queries[i] = [ui, vi] 表示新建一条从城市 ui 到城市 vi 的单向道路。每次查询后，你需要找到从城市 0 到城市 n - 1 的最短路径的长度。

// 返回一个数组 answer，对于范围 [0, queries.length - 1] 中的每个 i，answer[i] 是处理完前 i + 1 个查询后，从城市 0 到城市 n - 1 的最短路径的长度。

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const hash = new Map();
  for (let i = 0; i < n - 1; i++) hash.set(i, [i + 1]);
  const bfs = (start, target, edges) => {
    let queue = [start];
    let level = 0;
    const visited = new Array(n).fill(0);
    visited[start] = true;
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        if (q === target) return level;
        for (const nxtNode of edges.get(q) || []) {
          if (!visited[nxtNode]) {
            visited[nxtNode] = true;
            nxt.push(nxtNode);
          }
        }
      }
      level++;
      queue = nxt;
    }
    return level;
  };
  const res = [];
  for (const [a, b] of queries) {
    hash.has(a) ? hash.get(a).push(b) : hash.set(a, [b]);
    res.push(bfs(0, n - 1, hash));
  }
  return res;
};
