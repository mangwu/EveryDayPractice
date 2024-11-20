/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-20 17:56:45                                                  *
 * @LastModifiedDate: 2024-11-21 00:24:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 和一个二维整数数组 queries。

// 有 n 个城市，编号从 0 到 n - 1。初始时，每个城市 i 都有一条单向道路通往城市 i + 1（ 0 <= i < n - 1）。

// queries[i] = [ui, vi] 表示新建一条从城市 ui 到城市 vi 的单向道路。每次查询后，你需要找到从城市 0 到城市 n - 1 的最短路径的长度。

// 所有查询中不会存在两个查询都满足 queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1]。

// 返回一个数组 answer，对于范围 [0, queries.length - 1] 中的每个 i，answer[i] 是处理完前 i + 1 个查询后，从城市 0 到城市 n - 1 的最短路径的长度。

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  // 不会存在相交的情况，只会存在不相交或包含的情况
  // 如果当前添加的单项道路是已被包含的道路，则忽略，最短路径长度不变
  // 如果是包含的，则去除包含的所有单项道路，记数目为m，更新最短路径长度为
  // 使用一个长度为n的数组，roads[u] = v表示u到v有一条路，如果roads[u]=-1，说明它被包含了，最短路径和他无关
  const roads = new Array(n).fill(0).map((v, i) => i + 1);
  const res = [];
  let cur = n - 1;
  for (const [u, v] of queries) {
    if (roads[u] !== -1 && roads[u] < v) {
      let k = roads[u]; // 从下一个城市开始计算路径
      while (k !== -1 && k < v) {
        let temp = roads[k];
        roads[k] = -1;
        k = temp;
        cur--;
      }
      roads[u] = v; // 将u指向zv
    }

    res.push(cur);
  }
  return res;
};
