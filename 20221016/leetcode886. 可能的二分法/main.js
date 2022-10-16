/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-16 21:19:37                                                  *
 * @LastModifiedDate: 2022-10-16 21:28:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。
// 每个人都可能不喜欢其他人，那么他们不应该属于同一组。

// 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，
// 表示不允许将编号为 ai 和  bi的人归入同一组。
// 当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const hash = new Map();
  for (let i = 1; i <= n; i++) {
    hash.set(i, new Set());
    for (let j = 1; j <= n; j++) {
      if (i !== j) {
        hash.get(i).add(j);
      }
    }
  }
  for (const dis of dislikes) {
    hash.get(dis[0]).delete(dis[1]);
    hash.get(dis[1]).delete(dis[0]);
  }
  const visited = [];
  const bfs = (start) => {
    let queue = [start];
    while (queue.length > 0) {
      const nxt = [];
      for (const item of queue) {
        for (const i of hash.get(item)) {
          if (!visited[i]) {
            nxt.push(i);
            visited[i] = true;
          }
        }
      }
      queue = nxt;
    }
  };
  let num = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      bfs(i);
      num++;
    }
  }
  return num <= 2;
};
