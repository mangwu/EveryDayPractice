/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-23 09:14:15                                                  *
 * @LastModifiedDate: 2023-08-23 09:57:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个无向图，无向图由整数 n  ，表示图中节点的数目，和 edges 组成，其中 edges[i] = [ui, vi] 表示 ui 和 vi 之间有一条无向边。同时给你一个代表查询的整数数组 queries 。

// 第 j 个查询的答案是满足如下条件的点对 (a, b) 的数目：

// a < b
// cnt 是与 a 或者 b 相连的边的数目，且 cnt 严格大于 queries[j] 。
// 请你返回一个数组 answers ，其中 answers.length == queries.length 且 answers[j] 是第 j 个查询的答案。

// 请注意，图中可能会有 重复边 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
var countPairs = function (n, edges, queries) {
  // 可以通过edges计算出每个点的度
  // 将节点度进行排序，然后在查询时使用双指针的方式进行
  const hash = new Map();
  for (const [x, y] of edges) {
    hash.has(x) ? hash.get(x).push(y) : hash.set(x, [y]);
    hash.has(y) ? hash.get(y).push(x) : hash.set(y, [x]);
  }
  const degree = new Array(n).fill(0);
  for (const [key, value] of hash) degree[key - 1] = value.length;
  degree.sort((a, b) => b - a);
  const ans = [];
  const dp = new Map();
  for (const query of queries) {
    if (dp.has(query)) ans.push(dp.get(query));
    else {
      let right = n - 1;
      let curRes = 0;
      for (let i = 0; i < right; i++) {
        while (right > i && degree[right] + degree[i] <= query) {
          right--;
        }
        curRes += right - i;
      }
      dp.set(query, curRes);
      ans.push(curRes);
    }
  }
  return ans;
};
