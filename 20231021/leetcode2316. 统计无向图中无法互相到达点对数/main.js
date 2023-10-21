// 给你一个整数 n ，表示一张 无向图 中有 n 个节点，编号为 0 到 n - 1 。同时给你一个二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示节点 ai 和 bi 之间有一条 无向 边。

// 请你返回 无法互相到达 的不同 点对数目 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const visited = [];
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  // 计算每个连通的节点
  const dfs = (node) => {
    if (visited[node]) return 0;
    visited[node] = true;
    const nxt = hash.get(node);
    let res = 1;
    if (nxt) {
      for (const nxtNode of nxt) {
        res += dfs(nxtNode);
      }
    }
    return res;
  };
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const cur = dfs(i);
    ans += sum * cur;
    sum += cur;
  }
  return ans;
};
