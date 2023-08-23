/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-23 09:14:15                                                  *
 * @LastModifiedDate: 2023-08-23 10:53:20                                      *
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

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
var countPairs = function (n, edges, queries) {
  // 保存顶点的度
  const degree = new Array(n).fill(0);
  const cnt = new Map(); // 边的关系
  for (let [x, y] of edges) {
    x--;
    y--;
    if (x > y) [x, y] = [y, x];
    // x始终小于y，通过x * n + y获取两个顶点之间边的关系
    degree[x]++;
    degree[y]++;
    cnt.set(x * n + y, (cnt.get(x * n + y) | 0) + 1);
  }
  const degreeCopy = degree.slice();
  degreeCopy.sort((a, b) => b - a);
  const ans = [];
  const dp = new Map();
  for (const query of queries) {
    if (dp.has(query)) ans.push(dp.get(query));
    else {
      // 遍历有序度数组，通过二分查找，找到第一个和值大于查询的度
      let right = n - 1;
      let curRes = 0;
      for (let i = 0; i < right; i++) {
        let j = binarySearch(degreeCopy, i + 1, right, query - degreeCopy[i]);
        curRes += j - i;
        right = j;
        if (i === j) break;
      }
      // curRes是所有degree[i] + degree[j] > query成立的(i,j)数对数量
      for (const [val, freq] of cnt) {
        let [x, y] = [Math.floor(val / n), val % n];
        if (
          degree[x] + degree[y] > query &&
          degree[x] + degree[y] - freq <= query
        ) {
          curRes--; // 减去不符合条件的数对
        }
      }
      dp.set(query, curRes);
      ans.push(curRes);
    }
  }
  return ans;
};

var binarySearch = function (arr, low, high, target) {
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (arr[mid] <= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return high;
};
