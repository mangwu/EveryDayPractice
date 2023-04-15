/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-15 13:28:27                                                  *
 * @LastModifiedDate: 2023-04-15 14:51:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个花园，按从 1 到 n 标记。另有数组 paths ，其中 paths[i] = [xi, yi] 描述了花园 xi 到花园 yi 的双向路径。在每个花园中，你打算种下四种花之一。

// 另外，所有花园 最多 有 3 条路径可以进入或离开.

// 你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。

// 以数组形式返回 任一 可行的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1、2、3、4 表示。保证存在答案。

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const ans = new Array(n + 1).fill(-1);
  const hash = new Map();
  for (const path of paths) {
    hash.has(path[0])
      ? hash.get(path[0]).push(path[1])
      : hash.set(path[0], [path[1]]);
    hash.has(path[1])
      ? hash.get(path[1]).push(path[0])
      : hash.set(path[1], [path[0]]);
  }
  for (let i = 1; i <= n; i++) {
    if (ans[i] !== -1) continue; //已经遍历过
    let queue = [i];
    ans[i] = 1;
    while (queue.length) {
      const nxt = [];
      for (const item of queue) {
        const link = hash.get(item);
        if (link) {
          for (const next of link) {
            if (ans[next] === -1) {
              const link2 = hash.get(next);
              const set = new Set([1, 2, 3, 4]);
              for (const next2 of link2) {
                set.delete(ans[next2]);
              }
              for (const value of set) {
                ans[next] = value;
                break;
              }
              nxt.push(next);
            }
          }
        }
      }
      queue = nxt;
    }
  }
  ans.shift();
  return ans;
};
