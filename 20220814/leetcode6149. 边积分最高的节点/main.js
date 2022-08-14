/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 10:37:50                                                  *
 * @LastModifiedDate: 2022-08-14 10:43:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有向图，图中有 n 个节点，节点编号从 0 到 n - 1 ，其中每个节点都 恰有一条 出边。

// 图由一个下标从 0 开始、长度为 n 的整数数组 edges 表示，其中 edges[i] 表示存在一条从节点 i 到节点 edges[i] 的 有向 边。

// 节点 i 的 边积分 定义为：所有存在一条指向节点 i 的边的节点的 编号 总和。

// 返回 边积分 最高的节点。如果多个节点的 边积分 相同，返回编号 最小 的那个。

/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  const hash = new Map();
  // 记录每个节点的指向
  let n = edges.length;
  for (let i = 0; i < n; i++) {
    if (hash.has(edges[i])) {
      let k = hash.get(edges[i]);
      hash.set(edges[i], k + i);
    } else {
      hash.set(edges[i], i);
    }
  }
  let ans = [];
  let max = -Infinity;
  for (const [key, val] of hash) {
    if (val == max) {
      ans.push(key);
    } else if (val > max) {
      ans = [key];
      max = val;
    }
  }
  ans.sort((a, b) => a - b);
  return ans[0];
};
