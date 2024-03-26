// 给你一个有 n 个节点的 有向带权 图，节点编号为 0 到 n - 1 。图中的初始边用数组 edges 表示，其中 edges[i] = [fromi, toi, edgeCosti] 表示从 fromi 到 toi 有一条代价为 edgeCosti 的边。

// 请你实现一个 Graph 类：

// Graph(int n, int[][] edges) 初始化图有 n 个节点，并输入初始边。
// addEdge(int[] edge) 向边集中添加一条边，其中 edge = [from, to, edgeCost] 。数据保证添加这条边之前对应的两个节点之间没有有向边。
// int shortestPath(int node1, int node2) 返回从节点 node1 到 node2 的路径 最小 代价。如果路径不存在，返回 -1 。一条路径的代价是路径中所有边代价之和。

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  this.linkList = new Map();
  this.n = n;
  for (const [from, to, cost] of edges) {
    this.linkList.has(from)
      ? this.linkList.get(from).push([cost, to])
      : this.linkList.set(from, [[cost, to]]);
  }
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  const [from, to, cost] = edge;
  this.linkList.has(from)
    ? this.linkList.get(from).push([cost, to])
    : this.linkList.set(from, [[cost, to]]);
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  const distance = dijkstra(this.linkList, node1, this.n);
  return distance[node2] !== Number.MAX_SAFE_INTEGER ? distance[node2] : -1;
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

// dijkstra算法

/**
 * @description dijkstra找最小的未被访问的distance[idx]
 * @param {number[]} distance
 * @returns {number}
 */
function minDistance(distance, visited) {
  const n = distance.length;
  let idx = 0;
  let minDis = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (distance[i] < minDis && !visited[i]) {
      idx = i;
      minDis = distance[i];
    }
  }
  return idx;
}

/**
 * @description dijkstra算法
 * @param {Map<number,[]>} adjust
 * @param {number} start
 * @param {number} n
 */
function dijkstra(adjust, start, n) {
  const MAX_NUMBER = Number.MAX_SAFE_INTEGER;
  const distance = new Array(n).fill(MAX_NUMBER);
  distance[start] = 0;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n - 1; i++) {
    const vertex = minDistance(distance, visited);
    visited[vertex] = true;
    const neighbors = adjust.get(vertex);
    for (const [d, neighbor] of neighbors || []) {
      if (d + distance[vertex] < distance[neighbor]) {
        distance[neighbor] = d + distance[vertex];
      }
    }
  }
  return distance;
}

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  insert(value) {
    if (value == null) return false;
    this.items.push(value);
    this.shiftUp();
    return true;
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(size - 1, 0);
    const res = this.items.pop();
    this.shiftDown();
    return res;
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
  shiftDown() {
    let idx = 0;
    let temp = idx;
    const size = this.size();
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
}
/**
 * @description dijkstra算法优先队列解法
 * @param {Map<number,number[][]>} adjust
 * @param {number} start
 * @param {number} n
 * @returns {number[]}
 */
function dijkstra(adjust, start, n) {
  const MAX_NUMBER = Number.MAX_SAFE_INTEGER;
  const distance = new Array(n).fill(MAX_NUMBER);
  const pq = new PQ((a, b) => a[0] - b[0]);
  distance[start] = 0;
  pq.insert([0, start]); // [dis, node]
  const visited = new Array(n).fill(false);
  while (!pq.isEmpty()) {
    const [_d, vertex] = pq.poll();
    if (visited[vertex]) continue;
    visited[vertex] = true;
    const neighbors = adjust.get(vertex);
    for (const [d, neighbor] of neighbors || []) {
      if (distance[vertex] + d < distance[neighbor]) {
        distance[neighbor] = distance[vertex] + d;
        pq.insert([distance[neighbor], neighbor]);
      }
    }
  }
  return distance;
}

/**
 * @description 测试dijkstra算法
 * @param {number[][]} edges
 * @param {number} n
 * @param {number} src
 * @returns {number[]}
 */
function dijkstraTest(edges, n, src) {
  const adjust = new Map();
  for (const [u, w, d] of edges) {
    adjust.has(u) ? adjust.get(u).push([d, w]) : adjust.set(u, [[d, w]]);
    adjust.has(w) ? adjust.get(w).push([d, u]) : adjust.set(w, [[d, u]]);
  }
  return dijkstra(adjust, src, n);
}

console.log(
  dijkstraTest(
    [
      [0, 1, 2],
      [0, 4, 5],
      [1, 2, 2],
      [1, 5, 4],
      [2, 3, 6],
      [3, 4, 9],
      [4, 6, 2],
      [5, 6, 4],
    ],
    7,
    0
  )
);
