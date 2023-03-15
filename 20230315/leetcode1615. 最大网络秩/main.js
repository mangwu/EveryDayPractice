/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-15 08:48:42                                                  *
 * @LastModifiedDate: 2023-03-15 09:05:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// n 座城市和一些连接这些城市的道路 roads 共同组成一个基础设施网络。每个 roads[i] = [ai, bi] 都表示在城市 ai 和 bi 之间有一条双向道路。

// 两座不同城市构成的 城市对 的 网络秩 定义为：与这两座城市 直接 相连的道路总数。如果存在一条道路直接连接这两座城市，则这条道路只计算 一次 。

// 整个基础设施网络的 最大网络秩 是所有不同城市对中的 最大网络秩 。

// 给你整数 n 和数组 roads，返回整个基础设施网络的 最大网络秩 。

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  // 计算每个节点的入度
  // 注意并非所有的城市都需要连接起来。
  const inDegree = new Array(n).fill(0);
  const hash = new Map();
  for (const road of roads) {
    inDegree[road[0]]++;
    inDegree[road[1]]++;
    hash.has(road[0])
      ? hash.get(road[0]).add(road[1])
      : hash.set(road[0], new Set([road[1]]));
    hash.has(road[1])
      ? hash.get(road[1]).add(road[0])
      : hash.set(road[1], new Set([road[0]]));
  }
  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    const links = hash.get(i);
    for (let j = i + 1; j < n; j++) {
      if (links && links.has(j))
        res = Math.max(res, inDegree[i] + inDegree[j] - 1);
      else res = Math.max(res, inDegree[i] + inDegree[j]);
    }
  }
  return res;
};
