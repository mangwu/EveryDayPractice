/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-10 22:59:02                                                  *
 * @LastModifiedDate: 2023-09-10 23:04:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // 记录每个课程的入度
  const arr = new Array(numCourses).fill(0);
  const hash = new Map();
  for (const [x, y] of prerequisites) {
    hash.has(y) ? hash.get(y).push(x) : hash.set(y, [x]);
    arr[x]++;
  }
  let queue = [];
  arr.forEach((v, i) => (v === 0 ? queue.push(i) : null));
  if (queue.length === 0) return [];
  const ans = [];
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      const m = hash.get(q);
      ans.push(q);
      if (m) {
        for (const item of m) {
          arr[item]--;
          if (arr[item] === 0) {
            nxt.push(item);
          }
        }
      }
    }
    queue = nxt;
  }
  return ans.length === numCourses ? ans : [];
};
