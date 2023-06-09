/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-09 09:07:20                                                  *
 * @LastModifiedDate: 2023-06-09 09:26:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 n 个节点的 无向带权连通 图，节点编号为 0 到 n - 1 ，再给你一个整数数组 edges ，其中 edges[i] = [ai, bi, wi] 表示节点 ai 和 bi 之间有一条边权为 wi 的边。

// 部分边的边权为 -1（wi = -1），其他边的边权都为 正 数（wi > 0）。

// 你需要将所有边权为 -1 的边都修改为范围 [1, 2 * 109] 中的 正整数 ，使得从节点 source 到节点 destination 的 最短距离 为整数 target 。如果有 多种 修改方案可以使 source 和 destination 之间的最短距离等于 target ，你可以返回任意一种方案。

// 如果存在使 source 到 destination 最短距离为 target 的方案，请你按任意顺序返回包含所有边的数组（包括未修改边权的边）。如果不存在这样的方案，请你返回一个 空数组 。

// 注意：你不能修改一开始边权为正数的边

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const hash = new Map();
  for (const edge of edges) {
    const [a, b, w] = edge;
    hash.has(a) ? hash.get(a).push([b, w]) : hash.set(a, [[b, w]]);
    hash.has(b) ? hash.get(b).push([a, w]) : hash.set(b, [[a, w]]);
  }
  const path = [];
};
