/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-06 10:49:49                                                  *
 * @LastModifiedDate: 2022-04-06 22:44:35                                      *
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
  if (n == 1) {
    return [0];
  }
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

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  // 找到最长路径
  // 最长路径的一半向上取整就是最短路径，
  // 最长路径的中间节点就是以其为根节点时组成的最小高度数
  // 如果最长路径上的节点个数为奇数个，那么这个路径上的最小高度数根节点只有一个
  // 如果最长路径上的节点个数为偶数个，那么这个路径上的最小高度数根节点就是两个
  // 可以有多个最长路径，但是最终的结果最多只有两个节点
  // 因为多个最长路径一定是有公共节点的（树的特性），而交点一定是中间节点（如果不是就能组成更长的路径）
  if (n == 1) {
    return [0];
  }
  let ans = [];
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
  // 用于在bfs的时候记录父节点路径
  const parent = new Array(n).fill(-1);
  const b = findLongestNode(0, adjlist, parent);
  let a = findLongestNode(b, adjlist, parent);
  // 求出a，b节点间的中间节点
  const path = [];
  // 设置根节点为-1
  parent[b] = -1;
  while (a !== -1) {
    path.push(a);
    a = parent[a];
  }
  const m = path.length;
  if (m % 2 === 0) {
    // 路径长度为偶数
    ans.push(path[Math.floor(m / 2) - 1]);
  }
  ans.push(path[Math.floor(m / 2)]);
  return ans;
};
const findLongestNode = (start, adjlist, parent) => {
  const visited = [];
  visited[start] = true;
  let queue = [start];
  let ans = -1;
  while (queue.length > 0) {
    let nxt = [];
    for (const q of queue) {
      ans = q;
      for (const i of adjlist[q]) {
        if (!visited[i]) {
          nxt.push(i);
          visited[i] = true;
          // 记录当前节点的父节点是q(每次都更新)
          parent[i] = q;
        }
      }
    }
    queue = nxt;
  }
  return ans;
};
