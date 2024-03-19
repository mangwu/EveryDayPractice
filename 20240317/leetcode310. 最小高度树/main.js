// 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。

// 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。

// 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。

// 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。

// 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  // 最长路径的中间节点的为根节点构成的树具有最短高度
  if (n === 1) return [0];
  const adjust = new Map();
  for (const [x, y] of edges) {
    adjust.has(x) ? adjust.get(x).push(y) : adjust.set(x, [y]);
    adjust.has(y) ? adjust.get(y).push(x) : adjust.set(y, [x]);
  }
  const parent = new Array(n).fill(-1);
  const a = findLongestPath(0, adjust, parent);
  let b = findLongestPath(a, adjust, parent);
  // 设置a为根节点，求出a->b之间的中间节点路径
  parent[a] = -1;
  const path = [];
  while (b !== -1) {
    path.push(b);
    b = parent[b];
  }
  const ans = [];
  const m = path.length;
  if (m % 2 === 0) {
    // 偶数有两个中间节点
    ans.push(path[Math.floor(m / 2) - 1]);
  }
  ans.push(path[Math.floor(m / 2)]);
  return ans;
};
function findLongestPath(start, adjust, parent) {
  let queue = [start];
  const visited = new Array(parent.length);
  visited[start] = true;
  let ans = -1;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      ans = q;
      for (const node of adjust.get(q) || []) {
        if (!visited[node]) {
          visited[node] = true;
          parent[node] = q;
          nxt.push(node);
        }
      }
    }
    queue = nxt;
  }
  return ans;
}
