/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-09 21:27:34                                                  *
 * @LastModifiedDate: 2023-09-09 22:24:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 记录每个课程的入度
  const arr = new Array(numCourses).fill(0);
  const hash = new Map();
  for (const [x, y] of prerequisites) {
    hash.has(x) ? hash.get(x).push(y) : hash.set(x, [y]);
    arr[y]++;
  }
  let queue = [];
  arr.forEach((v, i) => (v === 0 ? queue.push(i) : null));
  if (queue.length === 0) return false;
  let res = queue.length;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      const m = hash.get(q);
      if (m) {
        for (const item of m) {
          arr[item]--;
          if (arr[item] === 0) {
            res++;
            nxt.push(item);
          }
        }
      }
    }
    queue = nxt;
  }
  return res === numCourses;
};
