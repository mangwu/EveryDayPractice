/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-28 22:52:40                                                  *
 * @LastModifiedDate: 2022-05-28 23:12:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，表示一个国家里的城市数目。城市编号为 0 到 n - 1 。

// 给你一个二维整数数组 roads ，其中 roads[i] = [ai, bi] 表示城市 ai 和 bi 之间有一条 双向 道路。

// 你需要给每个城市安排一个从 1 到 n 之间的整数值，且每个值只能被使用 一次 。
// 道路的 重要性 定义为这条道路连接的两座城市数值 之和 。

// 请你返回在最优安排下，所有道路重要性 之和 最大 为多少。
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  // 每个城市的道路个数决定了它的重要性
  // 每个城市的道路个数
  let rs = new Array(n).fill(0);
  for (const road of roads) {
    rs[road[0]]++;
    rs[road[1]]++;
  }
  // 每个道路个数对应城市
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(rs[i])) {
      let arr = hash.get(rs[i]);
      arr.push(i);
    } else {
      hash.set(rs[i], [i]);
    }
  }
  // 排序rs
  rs.sort((a, b) => b - a);
  // 记录每个城市的权重
  let weights = new Array(n).fill(1);
  let start = n;
  for (const r of rs) {
    let arr = hash.get(r);
    if (arr) {
      for (const a of arr) {
        weights[a] = start;
        start--;
      }
    }

    hash.delete(r);
  }
  let ans = 0;
  // 遍历道路
  for (const road of roads) {
    ans += weights[road[0]] + weights[road[1]];
  }
  return ans;
};
