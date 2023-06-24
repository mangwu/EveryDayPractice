/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-24 22:59:30                                                  *
 * @LastModifiedDate: 2023-06-24 23:48:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个整数 n ，表示服务器的总数目，再给你一个下标从 0 开始的 二维 整数数组 logs ，其中 logs[i] = [server_id, time] 表示 id 为 server_id 的服务器在 time 时收到了一个请求。

// 同时给你一个整数 x 和一个下标从 0 开始的整数数组 queries  。

// 请你返回一个长度等于 queries.length 的数组 arr ，其中 arr[i] 表示在时间区间 [queries[i] - x, queries[i]] 内没有收到请求的服务器数目。

// 注意时间区间是个闭区间。

/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (n, logs, x, queries) {
  let maxTime = Math.max.apply(null, logs.map(v => v[1]))
  const times = new Array(maxTime + 1).fill(0);
  for (const log of logs) {
    const curTime = log[1];
    if (times[curTime]) {
      times[curTime].add(log[0])
    } else {
      times[curTime] = new Set([log[0]]);
    }
  }
  const hash = new Map();
  const res = [];
  for (let i = 0; i <= x; i++) {
    if (times[i]) {
      for (const item of times[i]) {
        hash.set(item, (hash.get(item) || 0) + 1);
      }
    }
    console.log(hash, `0~x`);
    res.push(hash.size);
  }
  for (let i = x + 1; i <= maxTime; i++) {
    if (times[i]) {
      for (const item of times[i]) {
        hash.set(item, (hash.get(item) || 0) + 1);
      }
    }
    if (times[i - x - 1]) {
      for (const item of times[i - x - 1]) {
        const cur = hash.get(item);
        if (cur === 1) hash.delete(item)
        else hash.set(item, cur - 1)
      }
    }
    console.log(hash, `x+1 ~ maxTime`);
    res.push(hash.size);
  }
  for (let i = Math.max(maxTime + 1, x + 1); i <= maxTime + x + 1; i++) {
    if (times[i - x - 1]) {
      for (const item of times[i - x - 1]) {
        const cur = hash.get(item);
        if (cur === 1) hash.delete(item)
        else hash.set(item, cur - 1)
      }
    }
    res.push(hash.size);
  }
  const ans = [];
  for (const query of queries) {
    if (query >= maxTime + x + 1) {
      ans.push(n);
    } else {
      ans.push(n - res[query]);
    }
  }
  return ans;
};

// 1 1 2
// 3 5 6

5
  [[1, 2], [2, 3], [1, 1], [4, 2], [5, 3], [2, 6], [3, 7], [4, 3], [2, 1]]
3
  [4, 5, 6, 7]