/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-27 22:54:33                                                  *
 * @LastModifiedDate: 2024-10-28 01:27:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 树可以看成是一个连通且 无环 的 无向 图。

// 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

// 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的那个。

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const hash = new Map();
  const n = edges.length;
  for (const [a, b] of edges) {
    hash.has(a) ? hash.get(a).add(b) : hash.set(a, new Set([b]));
    hash.has(b) ? hash.get(b).add(a) : hash.set(b, new Set([a]));
  }
  for (let i = n - 1; i >= 0; i--) {
    const [a, b] = edges[i];
    hash.get(a).delete(b);
    hash.get(b).delete(a);
    if (isTree(hash, a) && isTree(hash, b)) return [a, b];
    hash.get(a).add(b);
    hash.get(b).add(a);
  }
  return [];
};
/**
 * @description
 * @param {Map} hash
 * @param {number} start
 * @returns {boolean}
 */
var isTree = function (hash, start) {
  // 存在环不是树
  const visited = [start];
  const visitedSet = new Set();
  let hasCircle = false;
  const dfs = (cur, pre) => {
    visitedSet.add(cur);
    const nexts = hash.get(cur);
    for (const next of nexts) {
      if (next !== pre) {
        if (visited.indexOf(next) !== -1) {
          hasCircle = true;
          return;
        }
        visited.push(next);
        dfs(next, cur);
        visited.pop();
      }
    }
  };
  dfs(start, 0);
  return !hasCircle;
};
