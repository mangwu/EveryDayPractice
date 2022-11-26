/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-26 13:39:26                                                  *
 * @LastModifiedDate: 2022-11-26 15:12:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个无向图（原始图），图中有 n 个节点，编号从 0 到 n - 1 。你决定将图中的每条边 细分 为一条节点链，每条边之间的新节点数各不相同。

// 图用由边组成的二维数组 edges 表示，其中 edges[i] = [ui, vi, cnti] 表示原始图中节点 ui 和 vi 之间存在一条边，cnti 是将边 细分 后的新节点总数。注意，cnti == 0 表示边不可细分。

// 要 细分 边 [ui, vi] ，需要将其替换为 (cnti + 1) 条新边，和 cnti 个新节点。新节点为 x1, x2, ..., xcnti ，新边为 [ui, x1], [x1, x2], [x2, x3], ..., [xcnti+1, xcnti], [xcnti, vi] 。

// 现在得到一个 新的细分图 ，请你计算从节点 0 出发，可以到达多少个节点？如果节点间距离是 maxMoves 或更少，则视为 可以到达 。

// 给你原始图和 maxMoves ，返回 新的细分图中从节点 0 出发 可到达的节点数 。

/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
  if (maxMoves === 0) {
    return 1;
  }
  const hash = new Map();
  for (const edge of edges) {
    hash.has(edge[0])
      ? hash.get(edge[0]).push([edge[1], edge[2]])
      : hash.set(edge[0], [edge[1], edge[2]]);
    hash.has(edge[1])
      ? hash.get(edge[1]).push([edge[0], edge[2]])
      : hash.set(edge[1], [edge[0], edge[2]]);
  }
  let queue = [[0, 0]];
  let ans = 1;
  const visited = new Map();
  while (queue.length) {
    const nxt = [];
    for (const [node, len] of queue) {
      const nextNodes = hash.get(node);
      for (const [nextNode, addLen] of nextNodes) {
        const cur2next = node + "," + nextNode;
        const next2cur = nextNode + "," + node;
        if (visited.has(cur2next) && visited.has(next2cur)) {
          // 查看能否增加
          let c2n = visited.get(cur2next);
          let n2c = visited.get(next2cur);
          let k = Math.min(maxMoves - len, addLen); // 还能移动的距离
          if (c2n + n2c < addLen && k > c2n) {
            let add = k - c2n - Math.max(n2c - (addLen - k), 0); // 减去重复得到距离
            visited.set(cur2next, k);
            ans += add;
            
          }
        } else if (visited.has(cur2next)) {
        } else if (visited.has(next2cur)) {
        } else {
        }
      }
    }
  }
};
