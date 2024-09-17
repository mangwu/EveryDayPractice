/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-17 22:17:17                                                  *
 * @LastModifiedDate: 2024-09-17 22:32:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。

// 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
// 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。

// 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source === target) return 0;
  const hash = new Map();
  const n = routes.length;
  for (let i = 0; i < n; i++) {
    const m = routes.length;
    for (let i = 0; i < m; i++) {
      hash.has(routes[i])
        ? hash.get(routes[i]).push([routes[(i + 1) % m], i])
        : hash.set(routes[i], [[routes[(i + 1) % m], i]]);
    }
  }
  let ans = 1;
  let visited = new Set();
  visited.add(source);
  let queue = [[source, -1, 0]];
  while (queue.length) {
    const nxt = [];
    for (const [s, pre, num] of queue) {
      if (s === target) {
        ans = Math.min(ans, num);
        continue;
      }
      const nexts = hash.get(s);
      for(const [route, i] of nexts || []) {
        
      } 
    }
  }
};
