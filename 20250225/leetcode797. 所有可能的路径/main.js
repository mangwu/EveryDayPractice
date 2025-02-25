// 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）

//  graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const path = [0];
  const res = [];
  const n = graph.length;
  const dfs = (node) => {
    if (node === n - 1) {
      res.push(path.slice());
      return;
    }
    const nexts = graph[node];
    for (const item of nexts) {
      path.push(item);
      dfs(item);
      path.pop();
    }
  };
  dfs(0);
  return res;
};
