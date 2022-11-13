/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-12 23:06:17                                                  *
 * @LastModifiedDate: 2022-11-12 23:56:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  // Bob只有一个父亲节点，它可以先走一半节点
  const hash = new Map();
  let n = amount.length;
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push(edge[1])
      : hash.set(edge[0], [edge[1]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push(edge[0])
      : hash.set(edge[1], [edge[0]]);
  }
  let path = [0];
  const visited = [];
  let pathCopy = null;
  visited[0] = true;
  const dfs = (node) => {
    if (node === bob) {
      pathCopy = path.slice();
    }
    const arr = hash.get(node);
    if (!arr) {
      return;
    }
    for (const item of arr) {
      if (visited[item]) {
        continue;
      }
      path.push(item);
      visited[item] = true;
      dfs(item);
      visited[item] = false;
      path.pop(item);
    }
  };
  dfs(0);
  const k = pathCopy.length;
  for (let i = k - 1; i >= k / 2; i--) {
    amount[pathCopy[i]] = 0;
  }
  if (k % 2 == 1) {
    amount[pathCopy[(k - 1) / 2]] /= 2;
  }
  // 进行bfs遍历
  let queue = [0];
  let res = new Array(n).fill(0);
  res[0] = amount[0];
  const visited2 = [];
  visited2[0] = true;
  while (queue.length > 0) {
    let nxt = [];
    for (const q of queue) {
      const arr = hash.get(q);
      if (arr) {
        for (const item of arr) {
          if (visited2[item]) {
            continue;
          }
          res[item] = res[q] + amount[item];
          nxt.push(item);
          visited2[item] = true;
        }
      }
    }
    queue = nxt;
  }
  let ans = -Infinity;
  for (let i = 1; i < n; i++) {
    if (hash.get(i).size === 1) {
      ans = Math.max(ans, res[i]);
    }
  }
  return ans;
};
