/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-18 08:34:02                                                  *
 * @LastModifiedDate: 2022-02-18 09:02:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个无向的 星型 图，由 n 个编号从 1 到 n 的节点组成。星型图有一个 中心 节点，并且恰有 n - 1 条边将中心节点与其他每个节点连接起来。

// 给你一个二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示在节点 ui 和 vi 之间存在一条边。请你找出并返回 edges 所表示星型图的中心节点。
// 。

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  // 使用hash表记录每个edges的对应的邻接点即可
  const hash = new Map();
  let ans = 0;
  let max = 0;
  for (const edge of edges) {
    const x = edge[0];
    const y = edge[1];
    // 记录x
    if (hash.has(x)) {
      arr = hash.get(x);
      arr.push(y);
      if (arr.length > max) {
        ans = x;
        max = arr.length;
      }
      hash.set(x, arr);
    } else {
      hash.set(x, [y]);
    }
    // 记录y
    if (hash.has(y)) {
      arr = hash.get(y);
      arr.push(x);
      if (arr.length > max) {
        ans = y;
        max = arr.length;
      }
      hash.set(y, arr);
    } else {
      hash.set(y, [x]);
    }
  }
  return ans;
};

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  // 读为edges中节点的个数减去1，所以前两个就可以确定中心节点
  return edges[0][0] == edges[1][0]
    ? edges[0][0]
    : edges[0][0] == edges[1][1]
    ? edges[0][0]
    : edges[0][1];
};
