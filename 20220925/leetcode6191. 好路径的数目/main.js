/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 11:43:38                                                  *
 * @LastModifiedDate: 2022-09-25 11:56:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵 n 个节点的树（连通无向无环的图），节点编号从 0 到 n - 1 且恰好有 n - 1 条边。

// 给你一个长度为 n 下标从 0 开始的整数数组 vals ，分别表示每个节点的值。
// 同时给你一个二维整数数组 edges ，
// 其中 edges[i] = [ai, bi] 表示节点 ai 和 bi 之间有一条 无向 边。

// 一条 好路径 需要满足以下条件：

// 开始节点和结束节点的值 相同 。
// 开始节点和结束节点中间的所有节点值都 小于等于
// 开始节点的值（也就是说开始节点的值应该是路径上所有节点的最大值）。
// 请你返回不同好路径的数目。

// 注意，一条路径和它反向的路径算作 同一 路径。比方说，
// 0 -> 1 与 1 -> 0 视为同一条路径。单个节点也视为一条合法路径。

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (vals, edges) {
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  let ans = 0;
  const n = vals.length;
  const dfs = (max, path, node) => {
    if (vals[node] > max) {
      return;
    }
    if (vals[node] == max && path.size > 1) {
      ans++;
    }
    if (hash.has(node)) {
      for (const item of hash.get(node)) {
        if (path.has(item)) {
          continue;
        }
        path.add(item);
        dfs(max, path, item);
        path.delete(item);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    dfs(vals[i], new Set([i]), i);
  }
  return ans / 2 + n;
};
