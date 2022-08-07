/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 11:11:30                                                  *
 * @LastModifiedDate: 2022-08-07 11:32:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有一棵由 n 个节点组成的无向树，节点编号从 0 到 n - 1 ，共有 n - 1 条边。

// 给你一个二维整数数组 edges ，长度为 n - 1 ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条边。另给你一个整数数组 restricted 表示 受限 节点。

// 在不访问受限节点的前提下，返回你可以从节点 0 到达的 最多 节点数目。

// 注意，节点 0 不 会标记为受限节点。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const hash = new Map();
  for (const edge of edges) {
    if (hash.has(edge[0])) {
      const arr = hash.get(edge[0]);
      arr.push(edge[1]);
      hash.set(edge[0], arr);
    } else {
      hash.set(edge[0], [edge[1]]);
    }
    if (hash.has(edge[1])) {
      const arr = hash.get(edge[1]);
      arr.push(edge[0]);
      hash.set(edge[1], arr);
    } else {
      hash.set(edge[1], [edge[0]]);
    }
  }
  const visited = new Array(n).fill(false);
  for (const re of restricted) {
    visited[re] = true;
  }
  let ans = 0;
  let queue = [0];
  while (queue.length > 0) {
    let nxt = [];
    for (const q of queue) {
      ans++;
      visited[q] = true;
      const arr = hash.get(q);
      for (const ele of arr) {
        if (!visited[ele]) {
          nxt.push(ele);
        }
      }
    }
    queue = nxt;
  }
  return ans;
};
