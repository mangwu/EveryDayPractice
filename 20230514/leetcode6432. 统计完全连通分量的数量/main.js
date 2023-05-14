/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-14 11:33:22                                                  *
 * @LastModifiedDate: 2023-05-14 11:52:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 。现有一个包含 n 个顶点的 无向 图，顶点按从 0 到 n - 1 编号。给你一个二维整数数组 edges 其中 edges[i] = [ai, bi] 表示顶点 ai 和 bi 之间存在一条 无向 边。

// 返回图中 完全连通分量 的数量。

// 如果在子图中任意两个顶点之间都存在路径，并且子图中没有任何一个顶点与子图外部的顶点共享边，则称其为 连通分量 。

// 如果连通分量中每对节点之间都存在一条边，则称其为 完全连通分量 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  const visited = [];
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  const bfs = (start) => {
    let queue = [start];
    let nodeNum = 1;
    const set = new Set();
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        const arr = hash.get(q);
        if (arr) {
          for (const node of arr) {
            set.add(`${q},${node}`);
            set.add(`${node},${q}`);
            if (!visited[node]) {
              nxt.push(node);
              visited[node] = true;
              nodeNum++;
            }
          }
        }
      }
      queue = nxt;
    }
    return set.size === nodeNum * (nodeNum - 1);
  };
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      if (bfs(i)) {
        res++;
      }
    }
  }
  return res;
};
