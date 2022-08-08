/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-08 20:29:03                                                  *
 * @LastModifiedDate: 2022-08-08 22:28:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，
// 第 i 辆公交车将会在上面循环行驶。

// 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列
//  1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
// 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。

// 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source == target) {
    return 0;
  }
  const hash = new Map();
  // 获取公交车之间的连接关系
  // 获取source能在哪个公交车上
  // 获取target能在哪个公家车上
  // 遍历routes，取得车站和公交车之间的关系
  const n = routes.length;
  for (let i = 0; i < n; i++) {
    const route = routes[i];
    for (const r of route) {
      if (hash.has(r)) {
        const arr = hash.get(r, i);
        arr.push(i);
        hash.set(r, arr);
      } else {
        hash.set(r, [i]);
      }
    }
  }
  // 源车站能上的公家车
  const sourceBus = hash.get(source);
  // 目的车站能下的公交车
  const targetBus = new Set(hash.get(target));
  let visited = [];
  for (const sb of sourceBus) {
    // 可以做同一辆公交车到达
    if (targetBus.has(sb)) {
      return 1;
    }
    visited[sb] = true;
  }
  console.log(hash);
  // 获取公家车之间的连接关系
  const busHash = new Map();
  for (const [key, val] of hash) {
    if (val.length > 1) {
      let copy = [...val];
      for (const v of val) {
        if (busHash.has(v)) {
          const set = busHash.get(v);
          for (const c of copy) {
            set.add(c);
          }
          set.delete(v);
          busHash.set(v, set);
        } else {
          const set = new Set(copy);
          set.delete(v);
          busHash.set(v, set);
        }
      }
    }
  }
  console.log(busHash);
  let queue = sourceBus;
  let idx = 2;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      const vals = busHash.get(q);
      if (vals) {
        for (const val of vals) {
          if (targetBus.has(val)) {
            return idx;
          }
          if (!visited[val]) {
            nxt.push(val);
            visited[val] = true;
          }
        }
      }
    }
    queue = nxt;
    idx++;
  }
  return -1;
};
