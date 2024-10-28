/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-28 09:51:01                                                  *
 * @LastModifiedDate: 2024-10-28 11:12:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在本问题中，有根树指满足以下条件的 有向 图。该树只有一个根节点，所有其他节点都是该根节点的后继。该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。

// 输入一个有向图，该图由一个有着 n 个节点（节点值不重复，从 1 到 n）的树及一条附加的有向边构成。附加的边包含在 1 到 n 中的两个不同顶点间，这条附加的边不属于树中已存在的边。

// 结果图是一个以边组成的二维数组 edges 。 每个元素是一对 [ui, vi]，用以表示 有向 图中连接顶点 ui 和顶点 vi 的边，其中 ui 是 vi 的一个父节点。

// 返回一条能删除的边，使得剩下的图是有 n 个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  // 入度和出度
  // 根节点：入度为0，出度>=1
  // 叶子节点：入度为1，出度为0
  // 中间节点：入度为1，出度>=1
  const n = edges.length;
  const indegree = new Array(n + 1).fill(0);
  const outdegree = new Array(n + 1).fill(0);
  const hash = new Map();
  for (const [a, b] of edges) {
    indegree[b]++;
    outdegree[a]++;
    hash.has(a) ? hash.get(a).add(b) : hash.set(a, new Set([b]));
  }
  for (let i = n - 1; i >= 0; i--) {
    const [a, b] = edges[i];
    indegree[b]--;
    outdegree[a]--;
    hash.get(a).delete(b);
    if (isTree(indegree, outdegree, hash)) return [a, b];
    hash.get(a).add(b);
    indegree[b]++;
    outdegree[a]++;
  }
  return [];
};

const isTree = (indegree, outdegree, hash) => {
  let rootNum = 0;
  let root = 0;
  const n = indegree.length;

  for (let i = 1; i < n; i++) {
    if (indegree[i] === 0 && outdegree[i] >= 1) {
      rootNum++;
      root = i;
    } else if (indegree[i] === 1 && outdegree[i] >= 0) continue;
    else return false;
  }
  // 还需要考虑分离的问题
  if (rootNum !== 1) return false;
  const visited = new Set();
  const dfs = (cur) => {
    visited.add(cur);
    const nexts = hash.get(cur);
    for (const next of nexts || []) {
      if (!visited.has(next)) dfs(next);
    }
  };
  dfs(root);
  console.log(root, visited);
  return visited.size === n - 1;
};

// [[4,2],[1,5],[5,2],[5,3],[2,4]]
