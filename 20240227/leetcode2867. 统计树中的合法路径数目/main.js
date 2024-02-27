// 给你一棵 n 个节点的无向树，节点编号为 1 到 n 。给你一个整数 n 和一个长度为 n - 1 的二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示节点 ui 和 vi 在树中有一条边。

// 请你返回树中的 合法路径数目 。

// 如果在节点 a 到节点 b 之间 恰好有一个 节点的编号是质数，那么我们称路径 (a, b) 是 合法的 。

// 注意：

// 路径 (a, b) 指的是一条从节点 a 开始到节点 b 结束的一个节点序列，序列中的节点 互不相同 ，且相邻节点之间在树上有一条边。
// 路径 (a, b) 和路径 (b, a) 视为 同一条 路径，且只计入答案 一次 。
const isPrime = new Array(100001).fill(1);
isPrime[1] = 0;
var countPrimes = function (n) {
  let ans = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return ans;
};
countPrimes(100001);
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPaths = function (n, edges) {
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  let ans = 0;
  // 找到每个质数
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      // 是质数
      const visited = [];
      visited[i] = true;
      const neighbors = hash.get(i) || [];
      let queue = [];
      const neighborHash = new Map();
      for (const neighbor of neighbors) {
        if (!isPrime[neighbor] && !visited[neighbor]) {
          queue.push([neighbor, neighbor]);
          neighborHash.set(neighbor, 1);
        }
        visited[neighbor] = true;
      }
      let paths = queue.length;
      ans += paths;
      while (queue.length) {
        const nxt = [];
        for (const [a, b] of queue) {
          const links = hash.get(a);
          for (const link of links || []) {
            if (!isPrime[link] && !visited[link]) {
              nxt.push([link, b]);
              neighborHash.set(b, neighborHash.get(b) + 1);
            }
            visited[link] = true;
          }
        }
        const curPath = nxt.length;
        ans += curPath;
        paths += curPath;
        queue = nxt;
      }
      ans += (paths * (paths - 1)) / 2;
      for (const [_key, value] of neighborHash) {
        ans -= (value * (value - 1)) / 2;
      }
    }
  }
  return ans;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPaths = function (n, edges) {
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  let ans = 0;
  // 埃式筛的思路是正确的，但是不应该使用bfs，而是dfs
  // 用dfs遍历所有质数的子树（节点都是非质数的）大小，并两两相乘求和
  const dfs = (i, pre) => {
    seen.push(i);
    for (const j of hash.get(i)) {
      if (j !== pre && !isPrime[j]) {
        dfs(j, i);
      }
    }
  };
  // dfs会获取一条路径
  let seen = [];
  const count = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    if (!isPrime[i]) continue;
    let cur = 0;
    for (const j of hash.get(i)) {
      if (isPrime[j]) continue; // 是另一个质数
      if (count[j] === 0) {
        // 还未遍历过
        seen = [];
        dfs(j, 0); // 从j开始的树的大小
        let cnt = seen.length;
        for (const k of seen) {
          count[k] = cnt;
        }
      }
      ans += count[j] * cur;
      cur += count[j];
    }
    ans += cur;
  }
  return ans;
};
