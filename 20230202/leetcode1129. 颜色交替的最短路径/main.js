/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-02 09:06:45                                                  *
 * @LastModifiedDate: 2023-02-02 15:07:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个有向图中，节点分别标记为 0, 1, ..., n-1。图中每条边为红色或者蓝色，且存在自环或平行边。

// red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的蓝色有向边。

// 返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X 的红色边和蓝色边交替出现的最短路径的长度。如果不存在这样的路径，那么 answer[x] = -1。
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const redHash = new Map();
  const blueHash = new Map();

  for (const edge of redEdges) {
    redHash.has(edge[0])
      ? redHash.get(edge[0]).push(edge[1])
      : redHash.set(edge[0], [edge[1]]);
  }
  for (const edge of blueEdges) {
    blueHash.has(edge[0])
      ? blueHash.get(edge[0]).push(edge[1])
      : blueHash.set(edge[0], [edge[1]]);
  }
  const ans = new Array(n).fill(-1);
  ans[0] = 0;
  // bfs 广度优先搜索
  const bfs = (color) => {
    let cur = 0;
    const visited = new Array(n).fill(0).map(() => new Array(2).fill(false));
    let queue = [0];
    visited[0][color] = true;
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        const nexts = color ? redHash.get(q) : blueHash.get(q);
        if (nexts) {
          for (const next of nexts) {
            if (!visited[next][color]) {
              visited[next][color] = true;
              if (ans[next] === -1) {
                ans[next] = cur + 1;
              } else {
                ans[next] = Math.min(ans[next], cur + 1);
              }
              nxt.push(next);
            }
          }
        }
      }
      queue = nxt;
      color = color ? 0 : 1;
      cur++;
    }
  };
  bfs(1);
  bfs(0);
  return ans;
};

// 0 -> 1 -> 0 -> 1
//
