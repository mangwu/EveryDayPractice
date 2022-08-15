/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 13:31:30                                                  *
 * @LastModifiedDate: 2022-08-15 14:48:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。

// 如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。

// 给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，
// 返回 可以移除的石子 的最大数量。
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  // 以x轴为key
  const xHash = new Map();
  // 以y轴为key
  const yHash = new Map();
  const n = stones.length;
  stones.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  for (const stone of stones) {
    if (xHash.has(stone[0])) {
      xHash.get(stone[0]).add(stone[1]);
    } else {
      xHash.set(stone[0], new Set([stone[1]]));
    }
    if (yHash.has(stone[1])) {
      yHash.get(stone[1]).add(stone[0]);
    } else {
      yHash.set(stone[1], new Set([stone[0]]));
    }
  }
  const copyXHash = new Map();
  for (const [key, value] of xHash) {
    copyXHash.set(key, new Set(value));
  }
  const copyYHash = new Map();
  for (const [key, value] of yHash) {
    copyYHash.set(key, new Set(value));
  }

  let res1 = 0;
  // 从右向左,从下到上开始移除
  for (let i = n - 1; i >= 0; i--) {
    const ySet = xHash.get(stones[i][0]);
    const xSet = yHash.get(stones[i][1]);
    // 同列有相同的，或同行有相同的
    if (ySet.size > 1 || xSet.size > 1) {
      res1++;
      // 进行移除
      ySet.delete(stones[i][1]);
      xSet.delete(stones[i][0]);
    }
  }
  let res2 = 0;
  stones.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  // 从左到右，从下到上开始移除
  for (let i = 0; i < n; i++) {
    const ySet = copyXHash.get(stones[i][0]);
    const xSet = copyYHash.get(stones[i][1]);
    // 同列有相同的，或同行有相同的
    if (ySet.size > 1 || xSet.size > 1) {
      res2++;
      // 进行移除
      ySet.delete(stones[i][1]);
      xSet.delete(stones[i][0]);
    }
  }
  console.log(res1, res2);
  return Math.max(res1, res2);
};

[
  (0, 0),
  (1, 2),
  (3, 4),
  (4, 3),
  (5, 0),
  (0, 3),
  (1, 4),
  (4, 2),
  (2, 5),
  (5, 3),
  (6, 7),
  (7, 8),
  (3, 9),
  (9, 6),
  (6, 4),
  (4, 0),
  (2, 9),
];

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  // 以x轴为key
  const xHash = new Map();
  // 以y轴为key
  const yHash = new Map();
  const n = stones.length;
  for (const stone of stones) {
    if (xHash.has(stone[0])) {
      xHash.get(stone[0]).add(stone[1]);
    } else {
      xHash.set(stone[0], new Set([stone[1]]));
    }
    if (yHash.has(stone[1])) {
      yHash.get(stone[1]).add(stone[0]);
    } else {
      yHash.set(stone[1], new Set([stone[0]]));
    }
  }
  const visited = new Set();
  // 判断有几块区域
  let area = 0;
  const dfs = (x, y) => {
    if (visited.has(x + "," + y)) {
      return;
    }
    visited.add(x + "," + y);
    const xSet = yHash.get(y);
    const ySet = xHash.get(x);
    for (const i of xSet) {
      dfs(i, y);
    }
    for (const j of ySet) {
      dfs(x, j);
    }
  };
  for (const stone of stones) {
    if (!visited.has(stone[0] + "," + stone[1])) {
      area++;
      dfs(stone[0], stone[1]);
    }
  }
  return n - area;
};

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  // 以x轴为key
  const xHash = new Map();
  // 以y轴为key
  const yHash = new Map();
  for (const stone of stones) {
    xHash.has(stone[0])
      ? xHash.get(stone[0]).push(stone[1])
      : xHash.set(stone[0], [stone[1]]);
    yHash.has(stone[1])
      ? yHash.get(stone[1]).push(stone[0])
      : yHash.set(stone[1], [stone[0]]);
  }
  const visited = new Set();
  // 判断有几块区域
  let area = 0;
  const dfs = (x, y) => {
    if (visited.has(x + "," + y)) {
      return;
    }
    visited.add(x + "," + y);
    const xSet = yHash.get(y);
    const ySet = xHash.get(x);
    for (const i of xSet) {
      dfs(i, y);
    }
    for (const j of ySet) {
      dfs(x, j);
    }
  };
  for (const stone of stones) {
    if (!visited.has(stone[0] + "," + stone[1])) {
      area++;
      dfs(stone[0], stone[1]);
    }
  }
  return stones.length - area;
};
