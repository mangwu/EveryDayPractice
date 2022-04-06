/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-06 10:49:49                                                  *
 * @LastModifiedDate: 2022-04-06 11:30:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。

// 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。
// 给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），
// 其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。

// 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。
// 在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。

// 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。

// 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function (n, edges) {
  // 多源dfs
  const adjlist = new Array(n).fill(0);
  for (const edge of edges) {
    if (adjlist[edge[0]]) {
      adjlist[edge[0]].push(edge[1]);
    } else {
      adjlist[edge[0]] = [edge[1]];
    }
    if (adjlist[edge[1]]) {
      adjlist[edge[1]].push(edge[0]);
    } else {
      adjlist[edge[1]] = [edge[0]];
    }
  }
  // dfs
  const dfs = (start, visited) => {
    let pathLen = 0;
    for (const i of adjlist[start]) {
      if (!visited[i]) {
        visited[i] = true;
        pathLen = Math.max(pathLen, dfs(i, visited));
        visited[i] = false;
      }
    }
    return 1 + pathLen;
  };
  // 最短路径
  let minPath = Infinity;
  let ans = [];
  // 多源dfs
  for (let i = 0; i < n; i++) {
    const visited = [];
    visited[i] = true;
    let pathLen = dfs(i, visited);
    if (pathLen < minPath) {
      minPath = pathLen;
      ans = [i];
    } else if (pathLen == minPath) {
      ans.push(i);
    }
  }
  return ans;
};