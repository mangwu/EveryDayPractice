/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-28 11:25:07                                                  *
 * @LastModifiedDate: 2022-08-28 12:04:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 正 整数 k ，同时给你：

// 一个大小为 n 的二维整数数组 rowConditions ，其中 rowConditions[i] = [abovei, belowi] 和
// 一个大小为 m 的二维整数数组 colConditions ，其中 colConditions[i] = [lefti, righti] 。
// 两个数组里的整数都是 1 到 k 之间的数字。

// 你需要构造一个 k x k 的矩阵，1 到 k 每个数字需要 恰好出现一次 。剩余的数字都是 0 。

// 矩阵还需要满足以下条件：

// 对于所有 0 到 n - 1 之间的下标 i ，数字 abovei 所在的 行 必须在数字 belowi 所在行的上面。
// 对于所有 0 到 m - 1 之间的下标 i ，数字 lefti 所在的 列 必须在数字 righti 所在列的左边。
// 返回满足上述要求的 任意 矩阵。如果不存在答案，返回一个空的矩阵。

/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  // rowConditions 和 colConditions不能构成环,是一颗树
  const rowRes = getIdx(rowConditions, k);
  const colRes = getIdx(colConditions, k);
  console.log(rowRes, colRes);
  if (!rowRes || !colRes) {
    return [];
  }
  const ans = new Array(k).fill(0).map((v) => new Array(k).fill(0));
  // for (let i = 1; i <= k; i++) {
  //   let rowIdx = rowRes[i];
  //   let colIdx = colRes[i];
  //   ans[rowIdx][colIdx] = i;
  // }
  return ans;
};

var getIdx = (nums, k) => {
  // 最底层
  const set = new Set(new Array(k).fill(0).map((_v, i) => i + 1));
  const hash = new Map();
  for (const [i, j] of nums) {
    // 删除最底层
    set.delete(i);
    // 更新hash
    hash.has(j) ? hash.get(j).add(i) : hash.set(j, new Set([i]));
  }
  if (set.size == 0) {
    return false;
  }
  const ans = new Array(k + 1).fill(0);
  console.log(set, hash);
  // bfs
  let queue = set;
  while (queue.size) {
    // 下一层
    const nxt = new Set();
    for (const val of queue) {
      ans[val] = k - 1;
      k--;
      const newSet = hash.get(val);
      if (newSet) {
        for (const next of newSet) {
          nxt.add(next);
        }
      }
    }
    queue = nxt;
  }
  console.log("----");
  return ans;
};

buildMatrix(
  8,
  [
    [1, 2],
    [7, 3],
    [4, 3],
    [5, 8],
    [7, 8],
    [8, 2],
    [5, 8],
    [3, 2],
    [1, 3],
    [7, 6],
    [4, 3],
    [7, 4],
    [4, 8],
    [7, 3],
    [7, 5],
  ],
  [
    [5, 7],
    [2, 7],
    [4, 3],
    [6, 7],
    [4, 3],
    [2, 3],
    [6, 2],
  ]
);
