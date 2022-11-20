// 给你一棵 n 个节点的树（一个无向、连通、无环图），每个节点表示一个城市，编号从 0 到 n - 1 ，且恰好有 n - 1 条路。0 是首都。给你一个二维整数数组 roads ，其中 roads[i] = [ai, bi] ，表示城市 ai 和 bi 之间有一条 双向路 。

// 每个城市里有一个代表，他们都要去首都参加一个会议。

// 每座城市里有一辆车。给你一个整数 seats 表示每辆车里面座位的数目。

// 城市里的代表可以选择乘坐所在城市的车，或者乘坐其他城市的车。相邻城市之间一辆车的油耗是一升汽油。

// 请你返回到达首都最少需要多少升汽油。

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const hash = new Map();
  for (const road of roads) {
    hash.has(road[0])
      ? hash.get(road[0]).push(road[1])
      : hash.set(road[0], [road[1]]);
    hash.has(road[1])
      ? hash.get(road[1]).push(road[0])
      : hash.set(road[1], [road[0]]);
  }
  const visited = [];
  const indegree = [];
  const dfs = (node) => {
    const arr = hash.get(node);
    let ans = 0;
    if (arr) {
      for (const item of arr) {
        if (!visited[item]) {
          visited[item] = true;
          ans += dfs(item) + 1;
        }
      }
    }
    indegree[node] = ans;
    return ans;
  };
  visited[0] = true;
  dfs(0);
  let ans = 0;
  console.log(indegree);
  const n = roads.length + 1;
  for (let i = 1; i < n; i++) {
    ans += Math.ceil((indegree[i] + 1) / seats);
  }
  return ans;
};
