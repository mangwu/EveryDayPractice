/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 15:04:58                                                  *
 * @LastModifiedDate: 2022-08-07 15:43:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。
// 给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，
// 表示在选修课程 ai 前 必须 先选修 bi 。

// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，
// 你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // [a, b] 先选b才能选a
  // 使用hash记录选了b之后能选的课程
  // 同时获得一个不需要任何前置课程就能选择的课程表
  const hash = new Map();
  const hash2 = new Map();
  const set = new Set(new Array(numCourses).fill(0).map((_v, i) => i));
  // 遍历条件
  for (const [a, b] of prerequisites) {
    // a有前置课程，删除
    set.delete(a);
    // 记录选b才能选的课程
    if (hash.has(b)) {
      const arr = hash.get(b);
      arr.push(a);
      hash.set(b, arr);
    } else {
      hash.set(b, [a]);
    }
    // 记录a需要提前选的课程
    if (hash2.has(a)) {
      const s = hash2.get(a);
      s.add(b);
      hash2.set(a, s);
    } else {
      hash2.set(a, new Set([b]));
    }
  }
  // 没有能修完所有课程的方式
  if (set.size == 0) {
    return [];
  }
  let ans = [];
  let queue = [...set];
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      const arr = hash.get(q);
      ans.push(q);
      if (arr) {
        for (const ele of arr) {
          if (set.has(ele)) {
            // 已被选择
            continue;
          }
          // 判断ele能否被选择
          const need = hash2.get(ele);
          if (need.size == 1) {
            // 下一次遍历
            nxt.push(ele);
            // 被选择
            set.add(ele);
          } else {
            // 删除需要q的选项，因为q已被提前选了
            need.delete(q);
          }
        }
      }
    }
    queue = nxt;
  }
  return ans;
};

// 0 -> 1 -> 3
// ↓         ↑
// 2---------

//     
// 0 -> 5