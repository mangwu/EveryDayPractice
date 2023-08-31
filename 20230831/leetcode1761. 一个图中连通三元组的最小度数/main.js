/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-31 08:48:50                                                  *
 * @LastModifiedDate: 2023-08-31 09:57:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个无向图，整数 n 表示图中节点的数目，edges 数组表示图中的边，其中 edges[i] = [ui, vi] ，表示 ui 和 vi 之间有一条无向边。

// 一个 连通三元组 指的是 三个 节点组成的集合且这三个点之间 两两 有边。

// 连通三元组的度数 是所有满足此条件的边的数目：一个顶点在这个三元组内，而另一个顶点不在这个三元组内。

// 请你返回所有连通三元组中度数的 最小值 ，如果图中没有连通三元组，那么返回 -1 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTrioDegree = function (n, edges) {
  // 邻接表
  const adjList = new Map();
  // 邻接矩阵
  const adjMatrix = new Array(n + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  for (const [x, y] of edges) {
    adjList.has(x) ? adjList.get(x).push(y) : adjList.set(x, [y]);
    adjList.has(y) ? adjList.get(y).push(x) : adjList.set(y, [x]);
    adjMatrix[x][y] = 1;
    adjMatrix[y][x] = 1;
  }
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(false));
  let res = Infinity;
  // 是否已经访问确定两条边
  for (let i = 1; i <= n; i++) {
    const adjNodes = adjList.get(i);
    if (adjNodes) {
      const m = adjNodes.length;
      for (let j = 0; j < m - 1; j++) {
        const node = adjNodes[j];
        if (dp[i][node]) continue; // 已被确定
        for (let k = j + 1; k < m; k++) {
          const node2 = adjNodes[k];
          if (adjMatrix[node][node2]) {
            // 二者相邻
            res = Math.min(
              res,
              m + adjList.get(node).length + adjList.get(node2).length - 6
            );
          }
        }
        dp[i][node] = true;
        dp[node][i] = true;
      }
    }
  }
  return res === Infinity ? -1 : res;
};
