// 给你一个二维数组 edges 表示一个 n 个点的无向图，其中 edges[i] = [ui, vi, lengthi] 表示节点 ui 和节点 vi 之间有一条需要 lengthi 单位时间通过的无向边。

// 同时给你一个数组 disappear ，其中 disappear[i] 表示节点 i 从图中消失的时间点，在那一刻及以后，你无法再访问这个节点。

// 注意，图有可能一开始是不连通的，两个节点之间也可能有多条边。

// 请你返回数组 answer ，answer[i] 表示从节点 0 到节点 i 需要的 最少 单位时间。如果从节点 0 出发 无法 到达节点 i ，那么 answer[i] 为 -1 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function (n, edges, disappear) {
  const adjust = new Map();
  const newEdges = new Map();
  for (const [u, v, d] of edges) {
    const key = u > v ? v + "-" + u : u + "-" + v;
    if (!newEdges.has(key) || newEdges.get(key) > d) newEdges.set(key, d);
  }
  for (const [key, dis] of newEdges) {
    const [u, v] = key.split("-").map((v) => parseInt(v));
    adjust.has(u) ? adjust.get(u).push([v, dis]) : adjust.set(u, [[v, dis]]);
    adjust.has(v) ? adjust.get(v).push([u, dis]) : adjust.set(v, [[u, dis]]);
  }
  // const distance = dijkstraUsePQ(adjust, n, 0);
  // return distance.map((v) => (v < disappear ? v : -1));
  const distance = dijkstraSpecial(adjust, n, 0, disappear);
  console.log(distance);
  return distance.map((v) => (v === Number.MAX_SAFE_INTEGER ? -1 : v));
};

// dijstra算法
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.items[0];
  }
  poll() {
    const size = this.size();
    if (size < 2) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
  insert(value) {
    this.items.push(value);
    this.shiftUp();
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
}

function dijkstraUsePQ(adjust, n, src) {
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  distance[src] = 0;
  const pq = new PQ((a, b) => a[1] - b[1]); // [vertex, dis]
  pq.insert([src, 0]);
  const visited = new Array(n).fill(false);
  while (!pq.isEmpty()) {
    const [vertex, dis] = pq.poll();
    if (visited[vertex]) continue;
    visited[vertex] = true;
    const neighbors = adjust.get(vertex);
    for (const [neighbor, d] of neighbors || []) {
      if (distance[neighbor] > d + distance[vertex]) {
        distance[neighbor] = d + distance[vertex];
        pq.insert([neighbor, distance[neighbor]]);
      }
    }
  }
  return distance;
}
function dijkstraSpecial(adjust, n, src, disappear) {
  const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  distance[src] = 0;
  const pq = new PQ((a, b) => a[1] - b[1]); // [vertex, dis]
  pq.insert([src, 0]);
  const visited = new Array(n).fill(false);
  while (!pq.isEmpty()) {
    const [vertex, dis] = pq.poll();
    if (visited[vertex]) continue;
    visited[vertex] = true;
    const neighbors = adjust.get(vertex);
    for (const [neighbor, d] of neighbors || []) {
      const newDis = d + distance[vertex];
      if (distance[neighbor] > newDis && disappear[neighbor] > newDis) {
        distance[neighbor] = d + distance[vertex];
        pq.insert([neighbor, distance[neighbor]]);
      }
    }
  }
  return distance;
}

// /**
//  * @description 测试dijkstra算法
//  * @param {number[][]} edges
//  * @param {number} n
//  * @param {number} src
//  * @returns {number[]}
//  */
// function dijkstraTest(edges, n, src) {
//   const adjust = new Map();
//   for (const [u, w, d] of edges) {
//     adjust.has(u) ? adjust.get(u).push([w, d]) : adjust.set(u, [[w, d]]);
//     adjust.has(w) ? adjust.get(w).push([u, d]) : adjust.set(w, [[u, d]]);
//   }
//   console.log(dijkstraUsePQ(adjust, n, src));
// }

// dijkstraTest(
//   [
//     [0, 1, 2],
//     [1, 2, 10],
//     [0, 2, 10],
//     [0, 3, 5],
//     [1, 2, 5],
//     [2, 5, 7],
//     [3, 6, 4],
//     [3, 7, 8],
//     [3, 9, 8],
//     [4, 5, 6],
//     [4, 7, 5],
//     [4, 8, 5],
//     [7, 8, 3],
//     [7, 9, 2],
//     [6, 8, 2],
//     [6, 9, 3],
//     [6, 5, 4],
//     [0, 9, 5],
//     [0, 4, 5],
//     [1, 8, 6],
//   ],
//   10,
//   0
// );
