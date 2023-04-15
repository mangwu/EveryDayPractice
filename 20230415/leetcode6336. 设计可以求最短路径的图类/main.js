/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-15 22:52:05                                                  *
 * @LastModifiedDate: 2023-04-16 00:06:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有 n 个节点的 有向带权 图，节点编号为 0 到 n - 1 。图中的初始边用数组 edges 表示，其中 edges[i] = [fromi, toi, edgeCosti] 表示从 fromi 到 toi 有一条代价为 edgeCosti 的边。

// 请你实现一个 Graph 类：

// Graph(int n, int[][] edges) 初始化图有 n 个节点，并输入初始边。
// addEdge(int[] edge) 向边集中添加一条边，其中 edge = [from, to, edgeCost] 。数据保证添加这条边之前对应的两个节点之间没有有向边。
// int shortestPath(int node1, int node2) 返回从节点 node1 到 node2 的路径 最小 代价。如果路径不存在，返回 -1 。一条路径的代价是路径中所有边代价之和。

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  const hash = new Map();
  const len = edges.length;
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push([edge[1], edge[2]])
      : hash.set(edge[0], [[edge[1], edge[2]]]);
  }
  this.n = n;
  this.len = len;
  this.hash = hash;
  this.dp = new Map();
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  const hash = this.hash;
  hash.has(edge[0])
    ? hash.get(edge[0]).push([edge[1], edge[2]])
    : hash.set(edge[0], [[edge[1], edge[2]]]);
  this.len++;
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  const path = new Set([node1]);
  if (!this.dp.has(this.len)) {
    this.dp.set(
      this.len,
      new Array(this.n).fill(-1).map((_v) => new Array(this.n).fill(-1))
    );
  }
  const info = this.dp.get(this.len);

  const dfs = (node1, node2) => {
    let res = Infinity;
    if (node1 === node2) {
      return 0;
    }
    if (info[node1][node2] !== -1) return info[node1][node2];
    const link = this.hash.get(node1);
    if (link) {
      for (const next of link) {
        if (path.has(next[0])) {
          continue;
        }
        path.add(next[0]);
        res = Math.min(res, next[1] + dfs(next[0], node2));
        path.delete(next[0]);
      }
    }
    if (res !== Infinity) {
      info[node1][node2] = res;
    }
    return res;
  };
  const ans = dfs(node1, node2);
  return ans !== Infinity ? ans : -1;
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

// [
//   "Graph",
//   "addEdge",
//   "addEdge",
//   "addEdge",
//   "addEdge",
//   "addEdge",
//   "addEdge",
//   "addEdge",
//   "addEdge",
//   "shortestPath",
// ][
//   ([
//     13,
//     [
//       [11, 6, 84715],
//       [7, 9, 764823],
//       [6, 0, 315591],
//       [1, 4, 909432],
//       [6, 5, 514907],
//       [9, 6, 105610],
//       [3, 10, 471042],
//       [7, 10, 348752],
//       [5, 11, 715628],
//       [6, 1, 973999],
//       [8, 7, 593929],
//       [7, 6, 64688],
//       [6, 4, 741734],
//       [10, 1, 894247],
//       [9, 7, 81181],
//       [2, 11, 75418],
//       [12, 2, 85431],
//       [7, 2, 260306],
//       [11, 9, 640614],
//       [2, 3, 648804],
//       [4, 12, 568023],
//       [0, 8, 730096],
//       [9, 11, 633474],
//       [3, 6, 390214],
//       [1, 10, 117955],
//       [9, 8, 222602],
//       [10, 7, 689294],
//     ],
//   ],
//   [[1, 2, 36450]],
//   [[8, 0, 709628]],
//   [[2, 4, 30185]],
//   [[12, 1, 21696]],
//   [[1, 8, 2553]],
//   [[4, 6, 2182]],
//   [[7, 5, 206]],
//   [[5, 7, 140]],
//   [12, 5])
// ];
