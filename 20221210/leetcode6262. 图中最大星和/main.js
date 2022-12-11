/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-10 22:34:20                                                  *
 * @LastModifiedDate: 2022-12-10 22:45:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 n 个点的无向图，节点从 0 到 n - 1 编号。给你一个长度为 n 下标从 0 开始的整数数组 vals ，其中 vals[i] 表示第 i 个节点的值。

// 同时给你一个二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示节点 ai 和 bi 之间有一条双向边。

// 星图 是给定图中的一个子图，它包含一个中心节点和 0 个或更多个邻居。换言之，星图是给定图中一个边的子集，且这些边都有一个公共节点。

// 下图分别展示了有 3 个和 4 个邻居的星图，蓝色节点为中心节点。

// 星和 定义为星图中所有节点值的和。

// 给你一个整数 k ，请你返回 至多 包含 k 条边的星图中的 最大星和 。

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  // 未考虑只有一个节点的情况
  let ans = -Infinity;
  for (const val of vals) {
    ans = Math.max(val, ans);
  }
  for (const [key, value] of hash) {
    let cur = vals[key];
    value.sort((a, b) => vals[b] - vals[a]);
    const end = Math.min(k, value.length);
    for (let i = 0; i < end; i++) {
      if (vals[value[i]] > 0) {
        cur += vals[value[i]];
      } else {
        break;
      }
    }
    ans = Math.max(ans, cur);
  }
  return ans;
};
