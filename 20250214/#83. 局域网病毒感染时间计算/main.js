/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 19:32:07                                                  *
 * @LastModifiedDate: 2025-02-14 19:54:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个局域网内有很多台电脑，分别标注为 0 ~ N-1 的数字。相连接的电脑距离不一样，所以感染时间不一样，感染时间用 t 表示。其中网络内一台电脑被病毒感染，求其感染网络内所有的电脑最少需要多长时间。如果最后有电脑不会感染，则返回-1。给定一个数组 times 表示一台电脑把相邻电脑感染所用的时间。

// 如图：path[i] = {i, j, t} 表示：电脑 i->j，电脑 i 上的病毒感染 j，需要时间 t。

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const linkLen = parseInt(inputs[1]);
  const linkList = new Map();
  for (let i = 2; i < linkLen + 2; i++) {
    const [s, e, t] = inputs[i].split(" ").map((v) => parseInt(v));
    linkList.has(s) ? linkList.get(s).push([e, t]) : linkList.set(s, [[e, t]]);
  }
  const start = parseInt(inputs[linkLen + 2]);
  // dijstra算法
  const distance = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  distance[start] = 0;
  const visited = new Array(n + 1).fill(false);
  // 找到距离最近未被访问过的节点
  const minDistanceIdx = () => {
    let minVal = Number.MAX_SAFE_INTEGER;
    let idx = 0;
    for (let i = 0; i <= n; i++) {
      if (distance[i] < minVal && !visited[i]) {
        idx = i;
        minVal = distance[i];
      }
    }
    return idx;
  };
  // 遍历n次，求从start到各个节点的最短距离
  for (let i = 0; i < n; i++) {
    const idx = minDistanceIdx();
    visited[idx] = true;
    const neighbors = linkList.get(idx) || [];
    for (const [neighbor, dis] of neighbors) {
      if (distance[idx] + dis < distance[neighbor]) {
        distance[neighbor] = distance[idx] + dis;
      }
    }
  }
  distance[0] = 0;
  const res = Math.max.apply(null, distance);
  console.log(res === Number.MAX_SAFE_INTEGER ? -1 : res);
}
solution();
