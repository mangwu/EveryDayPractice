// 给你一个正整数 n ，它表示一个 有向无环图 中节点的数目，节点编号为 0 到 n - 1 （包括两者）。

// 给你一个二维整数数组 edges ，其中 edges[i] = [fromi, toi] 表示图中一条从 fromi 到 toi 的单向边。

// 请你返回一个数组 answer，其中 answer[i]是第 i 个节点的所有 祖先 ，这些祖先节点 升序 排序。

// 如果 u 通过一系列边，能够到达 v ，那么我们称节点 u 是节点 v 的 祖先 节点。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const roots = new Array(n).fill(true);
  const hash = new Map();
  const ans = new Array(n).fill(0).map(() => new Set());
  for (const [from, to] of edges) {
    roots[to] = false; // 不是根节点
    hash.has(from) ? hash.get(from).push(to) : hash.set(from, [to]);
  }
  const path = [];
  const dfs = (node) => {
    for (let i = 0; i < path.length - 1; i++) ans[node].add(path[i]);
    const nexts = hash.get(node);
    for (const nextNode of nexts || []) {
      path.push(nextNode);
      dfs(nextNode);
      path.pop();
    }
  };
  for (let i = 0; i < n; i++)
    if (roots[i]) {
      path.push(i);
      dfs(i);
      path.pop();
    }
  return ans.map((v) => [...v].sort((a, b) => a - b));
};
// 上述正序扩展dfs会超时，因为会有很多重复的遍历

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const hash = new Map();
  for (const [to, from] of edges) {
    // 记录每个节点的父节点
    hash.has(from) ? hash.get(from).push(to) : hash.set(from, [to]);
  }
  const ans = new Array(n).fill(0).map(() => new Set());
  // 返回一个节点的所有祖先节点组成的数组
  const dfs = (node) => {
    const cur = ans[node];
    if (cur.size) return ans[node];
    const fathers = hash.get(node);
    for (const father of fathers || []) {
      cur.add(father);
      const res = dfs(father);
      for (const item of res) cur.add(item);
    }
    return cur;
  };
  for (let i = 0; i < n; i++) dfs(i);
  return ans.map((v) => [...v].sort((a, b) => a - b));
};
