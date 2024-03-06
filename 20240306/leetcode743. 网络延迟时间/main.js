// 有 n 个网络节点，标记为 1 到 n。

// 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const hash = new Map();
  for (const [src, target, time] of times) {
    hash.has(src - 1)
      ? hash.get(src - 1).push([target - 1, time])
      : hash.set(src - 1, [[target - 1, time]]);
  }
  const distance = dijkstra(hash, k - 1, n);
  const res = Math.max.apply(null, distance);
  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

/**
 * @description
 * @param {Map} linkList
 * @param {number} src
 * @param {number} n
 * @returns {number[]}
 */
function dijkstra(linkList, src, n) {
  const INF = Number.MAX_SAFE_INTEGER;
  const distance = new Array(n).fill(INF);
  const visited = new Array(n).fill(false);
  distance[src] = 0;
  for (let i = 0; i < n - 1; i++) {
    const vertex = minDistance(distance, visited);
    visited[vertex] = true;
    const neighbors = linkList.get(vertex);
    if (neighbors && distance[vertex] !== INF) {
      for (const [neighbor, d] of neighbors) {
        if (distance[neighbor] > d + distance[vertex]) {
          distance[neighbor] = d + distance[vertex];
        }
      }
    }
  }
  return distance;
}

/**
 * @description 获取最短距离的节点
 * @param {number[]} distance
 * @param {boolean[]} visited
 * @returns {number}
 */
function minDistance(distance, visited) {
  let minIdx = 0;
  let minDis = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] < minDis && !visited[i]) {
      minDis = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
}
