/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-16 21:19:37                                                  *
 * @LastModifiedDate: 2022-10-17 09:53:11                                      *
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

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // 染色法，两种颜色，如果一个节点未被染色，染成红色，
  // 将它不喜欢的节点染成蓝色，如果不喜欢的颜色已经被染色且也是红色就会发生冲突，返回false
  // 使用1 2表示两种颜色
  const grid = new Array(n + 1).fill(0).map((v, i) => []);
  for (const dislike of dislikes) {
    grid[dislike[0]].push(dislike[1]);
    grid[dislike[1]].push(dislike[0]);
  }
  const colors = new Array(n + 1).fill(0);
  const dfs = (i, color) => {
    colors[i] = color;
    for (const nextI of grid[i]) {
      if (colors[nextI] === color) {
        return false;
      }
      // 讨厌的节点nextI继续dfs
      if (colors[nextI] === 0 && !dfs(nextI, 3 ^ color)) {
        return false;
      }
    }
    return true;
  };
  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // 染色法，两种颜色，如果一个节点未被染色，染成红色，
  // 将它不喜欢的节点染成蓝色，如果不喜欢的颜色已经被染色且也是红色就会发生冲突，返回false
  // 使用1 2表示两种颜色
  const grid = new Array(n + 1).fill(0).map((v, i) => []);
  for (const dislike of dislikes) {
    grid[dislike[0]].push(dislike[1]);
    grid[dislike[1]].push(dislike[0]);
  }
  const colors = new Array(n + 1).fill(0);
  const bfs = (i, color) => {
    colors[i] = color;
    let queue = [i];
    while (queue.length > 0) {
      const nxt = [];
      for (const curI of queue) {
        for (const nextI of grid[curI]) {
          if (colors[nextI] === color) {
            return false;
          }
          if (colors[nextI] === 0) {
            nxt.push(nextI);
            colors[nextI] = 3 ^ color;
          }
        }
      }
      queue = nxt;
      color = 3 ^ color;
    }
    return true;
  };
  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0 && !bfs(i, 1)) {
      return false;
    }
  }
  return true;
};
