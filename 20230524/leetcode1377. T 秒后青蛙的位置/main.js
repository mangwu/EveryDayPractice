/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-24 08:42:56                                                  *
 * @LastModifiedDate: 2023-05-24 14:18:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵由 n 个顶点组成的无向树，顶点编号从 1 到 n。青蛙从 顶点 1 开始起跳。规则如下：

// 在一秒内，青蛙从它所在的当前顶点跳到另一个 未访问 过的顶点（如果它们直接相连）。
// 青蛙无法跳回已经访问过的顶点。
// 如果青蛙可以跳到多个不同顶点，那么它跳到其中任意一个顶点上的机率都相同。
// 如果青蛙不能跳到任何未访问过的顶点上，那么它每次跳跃都会停留在原地。
// 无向树的边用数组 edges 描述，其中 edges[i] = [ai, bi] 意味着存在一条直接连通 ai 和 bi 两个顶点的边。

// 返回青蛙在 t 秒后位于目标顶点 target 上的概率。与实际答案相差不超过 10-5 的结果将被视为正确答案。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
  // 先 dfs 找到目标的路径，再遍历路径进行概率计算
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  const path = [1];
  const visited = [false, true];
  const dfs = (node) => {
    if (node === target) {
      return true;
    }
    const nodes = hash.get(node);
    for (const nxtNode of nodes) {
      if (!visited[nxtNode]) {
        visited[nxtNode] = true;
        path.push(nxtNode);
        const res = dfs(nxtNode);
        if (res) return true;
        path.pop();
      }
    }
    return false;
  };
  dfs(1);
  // 判断是否能跳到
  console.log(path);
  // 达不到
  let choose = hash.has(1) ? hash.get(1).length : 1;
  if (path.length > t + 1 || (target === 1 && hash.has(1))) return 0;
  if (target === 1) return 1;
  const m = path.length;
  for (let i = 1; i < m - 1; i++) {
    choose *= hash.get(path[i]).length - 1;
  }
  if (path.length === t + 1 || hash.get(path[m - 1]).length === 1) {
    return 1 / choose;
  }
  return 0;
};
