/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-14 22:32:33                                                  *
 * @LastModifiedDate: 2024-11-14 22:38:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有一棵 无向 树，树中包含 n 个节点，按从 0 到 n - 1 标记。树的根节点是节点 0 。给你一个长度为 n - 1 的二维整数数组 edges，其中 edges[i] = [ai, bi] 表示树中节点 ai 与节点 bi 之间存在一条边。

// 如果一个节点的所有子节点为根的
// 子树
//  包含的节点数相同，则认为该节点是一个 好节点。

// 返回给定树中 好节点 的数量。

// 子树 指的是一个节点以及它所有后代节点构成的一棵树。

/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function (edges) {
  const hash = new Map();
  for (const [a, b] of edges) {
    hash.has(a) ? hash.get(a).push(b) : hash.set(a, [b]);
    hash.has(b) ? hash.get(b).push(a) : hash.set(b, [a]);
  }
  let res = 0;
  const dfs = (node, pre) => {
    const nxt = hash.get(node) || [];
    let isGoodNode = true;
    let preNum = -1;
    let nodeSum = 1;
    for (const nxtNode of nxt) {
      if (nxtNode !== pre) {
        const curNum = dfs(nxtNode, node);
        if (preNum !== -1 && preNum !== curNum) isGoodNode = false;
        nodeSum += curNum;
        preNum = curNum;
      }
    }
    res += Number(isGoodNode);
    return nodeSum;
  };
  dfs(0, -1);
  return res;
};
