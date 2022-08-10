/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-10 16:02:22                                                  *
 * @LastModifiedDate: 2022-08-10 16:10:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有一棵由 n 个节点组成的无向树，节点编号从 0 到 n - 1 ，共有 n - 1 条边。

// 给你一个二维整数数组 edges ，长度为 n - 1 ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条边。
// 另给你一个整数数组 restricted 表示 受限 节点。

// 在不访问受限节点的前提下，返回你可以从节点 0 到达的 最多 节点数目。

// 注意，节点 0 不 会标记为受限节点。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  // dfs
  // 节点有n个，编号确定，可以使用二维数组记录每个节点的连接节点
  const g = new Array(n).fill(0).map((_v) => []);
  for (const edge of edges) {
    g[edge[0]].push(edge[1]);
    g[edge[1]].push(edge[0]);

  }
  // 访问过或不能访问的节点
  const set = new Set(restricted);
  let ans = 0;
  const dfs = (node) => {
    if (set.has(node)) {
      return;
    }
    set.add(node);
    ans++;
    // 获取节点连接
    for (const i of g[node]) {
      dfs(i);
    }
  };
  dfs(0)
  return ans;
};
