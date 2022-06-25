/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-25 22:35:02                                                  *
 * @LastModifiedDate: 2022-06-25 23:06:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，表示一张 无向图 中有 n 个节点，编号为 0 到 n - 1 。
// 同时给你一个二维整数数组 edges ，其中 edges[i] = [ai, bi]
// 表示节点 ai 和 bi 之间有一条 无向 边。

// 请你返回 无法互相到达 的不同 点对数目 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  // 将点进行分类
  // 能相互连接的构成一组
  const hash = new Map();
  for (const edge of edges) {
    if (hash.has(edge[0])) {
      const arr = hash.get(edge[0]);
      arr.push(edge[1]);
      hash.set(edge[0], arr);
    } else {
      hash.set(edge[0], [edge[1]]);
    }
    if (hash.has(edge[1])) {
      const arr = hash.get(edge[1]);
      arr.push(edge[0]);
      hash.set(edge[1], arr);
    } else {
      hash.set(edge[1], [edge[0]]);
    }
  }
  const res = [];
  const totalRes = new Set();
  const dfs = (idx, set) => {
    if (set.has(idx)) {
      return;
    }
    set.add(idx);
    totalRes.add(idx);
    const arr = hash.get(idx);
    for (const ele of arr) {
      dfs(ele, set);
    }
  };
  for (const [key, _val] of hash) {
    if (!totalRes.has(key)) {
      const set = new Set();
      dfs(key, set);
      res.push(set.size);
    }
  }
  n -= totalRes.size;
  for (let i = 0; i < n; i++) {
    res.push(1);
  }
  let sum = 0;
  const len = res.length;
  if (len == 1) {
    return 0;
  }
  for (let i = 1; i < len; i++) {
    sum += res[i];
  }
  let ans = 0;
  for (let i = 1; i < len; i++) {
    ans += sum * res[i - 1];
    sum -= res[i];
  }
  return ans;
};
