/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 11:22:32                                                  *
 * @LastModifiedDate: 2025-02-25 14:02:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。

// 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。

// 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  if (pairs.length === 0) return s;
  // n个节点，获取每个连通分量
  const n = s.length;
  const visited = new Array(n).fill(false);
  const hash = new Map();
  for (const [a, b] of pairs) {
    const arr1 = hash.get(a) || [];
    arr1.push(b);
    hash.set(a, arr1);
    const arr2 = hash.get(b) || [];
    arr2.push(a);
    hash.set(b, arr2);
  }
  const res = new Array(n).fill(0);
  const bfs = (start) => {
    let queue = [start];
    let res = [start];
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        const nexts = hash.get(q) || [];
        for (const next of nexts) {
          if (!visited[next]) {
            visited[next] = true;
            res.push(next);
            nxt.push(next);
          }
        }
      }
      queue = nxt;
    }
    return res.sort((a, b) => a - b);
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      const curIdxes = bfs(i);
      const curChs = curIdxes.map((idx) => s[idx]).sort();
      for (let j = 0; j < curIdxes.length; j++) {
        res[curIdxes[j]] = curChs[j];
      }
    }
  }
  return res.join("");
};
