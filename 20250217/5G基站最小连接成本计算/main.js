/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-17 00:35:06                                                  *
 * @LastModifiedDate: 2025-02-17 02:06:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现需要在某城市进行5G网络建设，已经选取N个地点设置5G基站，编号固定为1到N，接下来需要各个基站之间使用光纤进行连接以确保基站能互联互通，不同基站之间假设光纤的成本各不相同，且有些节点之间已经存在光纤相连。

// 请你设计算法，计算出能联通这些基站的最小成本是多少。

// 注意：基站的联通具有传递性，比如基站A与基站B架设了光纤，基站B与基站C也架设了光纤，则基站A与基站C视为可以互相联通。

// 输入描述

// 第一行输入表示基站的个数N，其中：0 < N ≤ 20 第二行输入表示具备光纤直连条件的基站对的数目M，其中：0 < M < N * (N - 1) / 2 从第三行开始连续输入M行数据，格式为X Y Z P 其中：

// X，Y 表示基站的编号

// 0 < X ≤ N

// 0 < Y ≤ N

// X ≠ Y

// Z 表示在 X、Y之间架设光纤的成本

// 0 < Z < 100

// P 表示是否已存在光纤连接，0 表示未连接，1表示已连接

// 输出描述

// 如果给定条件，可以建设成功互联互通的5G网络，则输出最小的建设成本 如果给定条件，无法建设成功互联互通的5G网络，则输出 -1

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 1 - n
  const n = parseInt(inputs[0]);
  const m = parseInt(inputs[1]);
  if (m < n - 1) {
    // 连通图的边最少为n-1
    console.log(-1);
    return;
  }
  // 已连接的光纤实际上可以看成一个节点，它们共享边
  // 我们生成树时，如果加入一个的点与其他节点有连通，可以直接把它连带的节点加入进来
  // 1.生成连接关系
  const preLink = new Map();
  const linked = new Map();
  for (let i = 2; i < inputs.length; i++) {
    const [v, u, num, isLink] = inputs[i].split(" ").map((v) => parseInt(v));
    if (isLink) {
      linked.has(v) ? linked.get(v).push(u) : linked.set(v, [u]);
      linked.has(u) ? linked.get(u).push(v) : linked.set(u, [v]);
    } else {
      preLink.has(v)
        ? preLink.get(v).push([u, num])
        : preLink.set(v, [[u, num]]);
      preLink.has(u)
        ? preLink.get(u).push([v, num])
        : preLink.set(u, [[v, num]]);
    }
  }
  // 2. 获取每个独立节点，连通的节点合并成一个独立节点
  const visited = new Array(n + 1).fill(false);
  const nodes = []; // 所有连通节点组成一个单独的连通节点
  const dfs1 = (node) => {
    const nextLinked = linked.get(node) || [];
    const res = [node];
    for (const nxtNode of nextLinked) {
      if (!visited[nxtNode]) {
        visited[nxtNode] = true;
        const curRes = dfs1(nxtNode);
        res.push(...curRes);
      }
    }
    return res;
  };
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    nodes.push(dfs1(i));
  }
  // 3.使用Prime算法计算最小生成树需要的成本
  const startNodes = nodes[0];
  const nodesSet = new Set(startNodes); // 与startNodes同步
  // 寻找最小与nodes相邻的最小节点
  const findMinDisNode = (nodes) => {
    let minDis = Infinity;
    let res = -1;
    for (const node of nodes) {
      const nexts = preLink.get(node) || [];
      for (const [nextNode, num] of nexts) {
        if (nodesSet.has(nextNode)) continue; // 过滤已经连通的节点
        if (num < minDis) {
          minDis = num;
          res = nextNode;
        }
      }
    }
    return [res, minDis];
  };
  let res = 0;
  while (nodesSet.size < n) {
    const [nextNode, dis] = findMinDisNode(startNodes);
    if (nextNode === -1) {
      // 没有可以继续连通的节点
      res = -1;
      break;
    } else {
      res += dis;
      // 在连通节点中找到拥有nextNode的独立节点
      const nextNodes = nodes.find((item) => item.indexOf(nextNode) !== -1);
      for (const nextNode of nextNodes) {
        startNodes.push(nextNode);
        nodesSet.add(nextNode);
      }
    }
  }
  console.log(res);
}
solution();
