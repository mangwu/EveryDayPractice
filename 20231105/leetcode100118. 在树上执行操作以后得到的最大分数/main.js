/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-05 11:16:40                                                  *
 * @LastModifiedDate: 2023-11-05 11:56:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一棵 n 个节点的无向树，节点编号为 0 到 n - 1 ，根节点编号为 0 。给你一个长度为 n - 1 的二维整数数组 edges 表示这棵树，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 有一条边。

// 同时给你一个长度为 n 下标从 0 开始的整数数组 values ，其中 values[i] 表示第 i 个节点的值。

// 一开始你的分数为 0 ，每次操作中，你将执行：

// 选择节点 i 。
// 将 values[i] 加入你的分数。
// 将 values[i] 变为 0 。
// 如果从根节点出发，到任意叶子节点经过的路径上的节点值之和都不等于 0 ，那么我们称这棵树是 健康的 。

// 你可以对这棵树执行任意次操作，但要求执行完所有操作以后树是 健康的 ，请你返回你可以获得的 最大分数 。

/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function (edges, values) {
  const n = values.length;
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
  const visited = new Array(n).fill(false);
  const dfs = (node) => {
    let nxtNodes = hash.get(node);
    nxtNodes = nxtNodes.filter((ele) => !visited[ele]);
    if (!nxtNodes.length) {
      // 是叶子节点
      // 不能选为健康树
      visited[node] = true;
      return;
    }
    // 非叶子节点
    visited[node] = true;
    const sum = nxtNodes.reduce((pre, cur) => pre + values[cur], 0);
    if(nxtNodes.length === 1) {
      // 可以都选择
      ans += values[node];
      
    }
    if (sum >= values[node]) {
      // 直接选择所有子节点，保留node
      ans += bfs(node);
    } else {
      // 选择node，让没有子节点成为健康的
      ans += values[node];
      nxtNodes.forEach((v) => dfs(v));
    }
  };
  const bfs = (node) => {
    let queue = [node];
    let res = 0;
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        const nxtNodes = hash.get(q);
        if (nxtNodes) {
          for (const nxtNode of nxtNodes) {
            if (!visited[nxtNode]) {
              nxt.push(nxtNode);
              res += values[nxtNode];
              visited[nxtNode] = true;
            }
          }
        }
      }
      queue = nxt;
    }
    return res;
  };
  dfs(0);
  return ans;
};

// [[1,0],[9,1],[6,2],[7,4],[3,5],[7,3],[9,6],[7,8],[7,9]]
// [14,17,13,18,17,10,23,19,22,2]
// 153
