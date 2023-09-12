/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-12 09:04:39                                                  *
 * @LastModifiedDate: 2023-09-12 09:49:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你总共需要上 numCourses 门课，课程编号依次为 0 到 numCourses-1 。你会得到一个数组 prerequisite ，其中 prerequisites[i] = [ai, bi] 表示如果你想选 bi 课程，你 必须 先选 ai 课程。

// 有的课会有直接的先修课程，比如如果想上课程 1 ，你必须先上课程 0 ，那么会以 [0,1] 数对的形式给出先修课程数对。
// 先决条件也可以是 间接 的。如果课程 a 是课程 b 的先决条件，课程 b 是课程 c 的先决条件，那么课程 a 就是课程 c 的先决条件。

// 你也得到一个数组 queries ，其中 queries[j] = [uj, vj]。对于第 j 个查询，您应该回答课程 uj 是否是课程 vj 的先决条件。

// 返回一个布尔数组 answer ，其中 answer[j] 是第 j 个查询的答案。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const hash = new Map();
  for (const [a, b] of prerequisites) {
    hash.has(a) ? hash.get(a).push(b) : hash.set(a, [b]);
  }
  const bfs = (start, end) => {
    let queue = [start];
    while (queue.length) {
      const nxt = new Set();
      for (const item of queue) {
        const k = hash.get(item);
        if (k)
          for (const ele of k) {
            if (ele === end) return true;
            nxt.add(ele);
          }
      }
      queue = [...nxt];
    }
    return false;
  };
  const ans = [];
  for (const [u, v] of queries) {
    ans.push(bfs(u, v));
  }
  return ans;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const hash = new Map();
  for (const [a, b] of prerequisites) {
    hash.has(a) ? hash.get(a).push(b) : hash.set(a, [b]);
  }
  const bfs = (start) => {
    let queue = [start];
    const res = new Set();
    while (queue.length) {
      const nxt = new Set();
      for (const item of queue) {
        const k = hash.get(item);
        if (k)
          for (const ele of k) {
            nxt.add(ele);
            res.add(ele);
          }
      }
      queue = [...nxt];
    }
    return res;
  };
  const arr = new Array(numCourses).fill(0);
  for (let i = 0; i < numCourses; i++) {
    arr[i] = bfs(i);
  }
  const ans = [];
  for (const [u, v] of queries) {
    ans.push(arr[u].has(v));
  }

  return ans;
};
