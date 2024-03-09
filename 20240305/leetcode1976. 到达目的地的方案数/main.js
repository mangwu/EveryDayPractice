// 你在一个城市里，城市由 n 个路口组成，路口编号为 0 到 n - 1 ，某些路口之间有 双向 道路。输入保证你可以从任意路口出发到达其他任意路口，且任意两个路口之间最多有一条路。

// 给你一个整数 n 和二维整数数组 roads ，其中 roads[i] = [ui, vi, timei] 表示在路口 ui 和 vi 之间有一条需要花费 timei 时间才能通过的道路。你想知道花费 最少时间 从路口 0 出发到达路口 n - 1 的方案数。

// 请返回花费 最少时间 到达目的地的 路径数目 。由于答案可能很大，将结果对 109 + 7 取余 后返回。
const INF = Number.MAX_SAFE_INTEGER;
const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  let sum = 0;
  let shortestPath = Infinity;
  let ans = 0;
  const hash = new Map();
  for (const [x, y, time] of roads) {
    hash.has(x) ? hash.get(x).push([y, time]) : hash.set(x, [[y, time]]);
    hash.has(y) ? hash.get(y).push([x, time]) : hash.set(y, [[x, time]]);
  }
  // 通过迪杰斯特拉算法计算出最短路径
  const distance = dijkstra(hash, 0, n);
  shortestPath = distance[n - 1];
  const dfs = (cur, pre) => {
    if (cur === n - 1) {
      if (sum === shortestPath) {
        ans++;
        ans %= MOD;
      }
      return;
    }
    const next = hash.get(cur);
    for (const [nextNode, time] of next) {
      if (nextNode !== pre && sum + time <= shortestPath) {
        sum += time;
        dfs(nextNode, cur);
        sum -= time;
      }
    }
  };
  dfs(0, -1);
  return ans;
};

// dijkstra的O(n^2)算法
/**
 * @description 迪杰斯特拉算法
 * @param {Map} linkList 连接表
 * @param {number} src 起始节点
 * @param {number} n 节点数目
 * @returns {number[]}
 */
function dijkstra(linkList, src, n) {
  const INF = Number.MAX_SAFE_INTEGER;
  const distance = new Array(n).fill(INF); // 结果数组，从src到其它每个节点的最短距离
  const visited = new Array(n).fill(false); // 记录是否访问过节点
  distance[src] = 0; // 初始化起始节点
  for (let i = 0; i < n - 1; i++) {
    // 遍历n-1次，
    const vertex = minDistance(distance, visited); // 获取未访问过的距离src最短的节点
    visited[vertex] = true;
    const neighbors = linkList.get(vertex);
    if (neighbors && distance[vertex] !== INF) {
      for (const [neighbor, d] of neighbors) {
        if (!visited[neighbor] && d + distance[vertex] < distance[neighbor]) {
          distance[neighbor] = distance[vertex] + d;
        }
      }
    }
  }
  return distance;
}

/**
 * @description 找到未访问过的距离src最短的节点
 * @param {number[]} distance
 * @param {boolean[]} visited
 * @returns {number}
 */
function minDistance(distance, visited) {
  let minIdx = -1;
  let minDis = Infinity;
  for (let i = 0; i < distance.length; i++) {
    if (!visited[i] && distance[i] < minDis) {
      minIdx = i;
      minDis = distance[i];
    }
  }
  return minIdx;
}

// 迪杰斯特拉的优先队列解法
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
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  insert(val) {
    if (!val) return false;
    this.items.push(val);
    this.shiftUp();
    return true;
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
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.items.pop();
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
}

// 优先队列优化迪杰斯特拉算法
/**
 * @description 迪杰斯特拉算法
 * @param {Map} linkList 连接表
 * @param {number} src 起始节点
 * @param {number} n 节点数目
 * @returns {number[]}
 */
function dijkstra(linkList, src, n) {
  const INF = Number.MAX_SAFE_INTEGER;
  const distance = new Array(n).fill(INF);
  distance[src] = 0;
  const pq = new PQ((a, b) => a[0] - b[0]);
  const visited = new Array(n).fill(false);
  pq.insert([0, 0]); // [dis[v], v]
  while (!pq.isEmpty()) {
    const [_dis, vertex] = pq.poll();
    if (visited[vertex]) continue; // 已经访问过
    const neighbors = linkList.get(vertex);
    for (const [neighbor, d] of neighbors || []) {
      if (!visited[neighbor] && distance[neighbor] > d + distance[vertex]) {
        distance[neighbor] = d + distance[vertex];
        pq.insert([distance[neighbor], neighbor]);
      }
    }
  }
  return distance;
}

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const hash = new Map();
  for (const [x, y, time] of roads) {
    hash.has(x) ? hash.get(x).push([y, time]) : hash.set(x, [[y, time]]);
    hash.has(y) ? hash.get(y).push([x, time]) : hash.set(y, [[x, time]]);
  }
  // 通过迪杰斯特拉算法的变体计算出最短路径
  const pq = new PQ((a, b) => a[0] - b[0]); //
  const distance = new Array(n).fill(INF);
  const visited = new Array(n).fill(false);
  const ways = new Array(n).fill(0); // 最短路径的条数
  distance[0] = 0;
  ways[0] = 1; // 默认一条
  pq.insert([0, 0]);
  while (!pq.isEmpty()) {
    const [_dis, vertex] = pq.poll();
    if (visited[vertex]) continue;
    visited[vertex] = true;
    const neighbors = hash.get(vertex);
    for (const [neighbor, d] of neighbors || []) {
      if (distance[neighbor] > d + distance[vertex]) {
        distance[neighbor] = d + distance[vertex];
        ways[neighbor] = ways[vertex];
        pq.insert([distance[neighbor], neighbor]);
      } else if (distance[neighbor] === d + distance[vertex]) {
        ways[neighbor] = (ways[neighbor] + ways[vertex]) % MOD;
      }
    }
  }
  return ways[n - 1];
};
