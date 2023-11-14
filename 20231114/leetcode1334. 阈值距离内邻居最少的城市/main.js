// 有 n 个城市，按从 0 到 n-1 编号。给你一个边数组 edges，其中 edges[i] = [fromi, toi, weighti] 代表 fromi 和 toi 两个城市之间的双向加权边，距离阈值是一个整数 distanceThreshold。

// 返回能通过某些路径到达其他城市数目最少、且路径距离 最大 为 distanceThreshold 的城市。如果有多个这样的城市，则返回编号最大的城市。

// 注意，连接城市 i 和 j 的路径的距离等于沿该路径的所有边的权重之和。
const INF = Number.MAX_SAFE_INTEGER;
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  // 获取邻接矩阵
  const hash = new Map();
  for (const [x, y, d] of edges) {
    hash.has(x) ? hash.get(x).push([y, d]) : hash.set(x, [[y, d]]);
    hash.has(y) ? hash.get(y).push([x, d]) : hash.set(y, [[x, d]]);
  }
  // dijkstra算法获取每个节点的最短路径
  let ans = -1;
  let minLen = INF;
  for (let i = 0; i < n; i++) {
    const distance = dijkstra(hash, i, n);
    let curLen =
      distance.reduce(
        (pre, cur) => (cur <= distanceThreshold ? ++pre : pre),
        0
      ) - 1;
    if (curLen <= minLen) {
      ans = i;
      minLen = curLen;
    }
  }
  return ans;
};

function dijkstra(linklist, src, n) {
  const distance = new Array(n).fill(INF); // 保存最短距离
  const visited = new Array(n).fill(false); // 记录访问过的节点
  distance[src] = 0;
  // 遍历n-1次，获取剩余的distance[i]的值
  for (let i = 0; i < n - 1; i++) {
    // 获取当前距离src最近且没有访问过的节点
    const vertex = minDistance(distance, visited);
    // 对该节点进行访问
    visited[vertex] = true;
    // 遍历邻接节点
    const neighbors = linklist.get(vertex);
    if (neighbors && distance[vertex] !== INF) {
      for (const [neighbor, d] of neighbors) {
        if (
          !visited[neighbor] &&
          distance[vertex] + d < distance[neighbor] // 比当前距离小
        ) {
          distance[neighbor] = distance[vertex] + d;
        }
      }
    }
  }
  return distance;
}
function minDistance(distance, visited) {
  let min = INF;
  let minIdx = -1;
  for (let i = 0; i < distance.length; i++) {
    if (visited[i] === false && distance[i] <= min) {
      min = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
}
