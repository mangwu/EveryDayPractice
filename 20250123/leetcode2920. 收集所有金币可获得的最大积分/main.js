// 有一棵由 n 个节点组成的无向树，以 0  为根节点，节点编号从 0 到 n - 1 。给你一个长度为 n - 1 的二维 整数 数组 edges ，其中 edges[i] = [ai, bi] 表示在树上的节点 ai 和 bi 之间存在一条边。另给你一个下标从 0 开始、长度为 n 的数组 coins 和一个整数 k ，其中 coins[i] 表示节点 i 处的金币数量。

// 从根节点开始，你必须收集所有金币。要想收集节点上的金币，必须先收集该节点的祖先节点上的金币。

// 节点 i 上的金币可以用下述方法之一进行收集：

// 收集所有金币，得到共计 coins[i] - k 点积分。如果 coins[i] - k 是负数，你将会失去 abs(coins[i] - k) 点积分。
// 收集所有金币，得到共计 floor(coins[i] / 2) 点积分。如果采用这种方法，节点 i 子树中所有节点 j 的金币数 coins[j] 将会减少至 floor(coins[j] / 2) 。
// 返回收集 所有 树节点的金币之后可以获得的最大积分。

/**
 * @param {number[][]} edges
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var maximumPoints = function (edges, coins, k) {
  const hash = new Map();
  for (const [a, b] of edges) {
    hash.has(a) ? hash.get(a).push(b) : hash.set(a, [b]);
    hash.has(b) ? hash.get(b).push(a) : hash.set(b, [a]);
  }
  // 记忆化搜索
  const n = coins.length;
  const memo = new Array(n).fill(0).map((v) => new Array(14).fill(-1));
  const dfs = (node, pre, factor) => {
    if (memo[node][factor] >= 0) return memo[node][factor];
    const nextNodes = hash.get(node);
    let add1 = (coins[node] >> factor) - k;
    let add2 = coins[node] >> (factor + 1);
    for (const nextNode of nextNodes) {
      if (nextNode !== pre) {
        add1 += dfs(nextNode, node, factor);
        if (factor + 1 < 14) {
          // 如果下一个factor大于等于14，则子数的所有节点值（不超过10^4）都会是0
          add2 += dfs(nextNode, node, factor + 1);
        }
      }
    }
    memo[node][factor] = Math.max(add1, add2);
    return memo[node][factor];
  };
  return dfs(0, -1, 0);
};
