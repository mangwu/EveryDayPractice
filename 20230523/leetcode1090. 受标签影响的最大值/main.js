/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-23 08:44:06                                                  *
 * @LastModifiedDate: 2023-05-23 09:03:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们有一个 n 项的集合。给出两个整数数组 values 和 labels ，第 i 个元素的值和标签分别是 values[i] 和 labels[i]。还会给出两个整数 numWanted 和 useLimit 。

// 从 n 个元素中选择一个子集 s :

// 子集 s 的大小 小于或等于 numWanted 。
// s 中 最多 有相同标签的 useLimit 项。
// 一个子集的 分数 是该子集的值之和。

// 返回子集 s 的最大 分数 。

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  const hash = new Map();
  const n = values.length;
  for (let i = 0; i < n; i++) {
    hash.has(labels[i])
      ? hash.get(labels[i]).push(values[i])
      : hash.set(labels[i], [values[i]]);
  }
  let arr = [];
  for (const [key, vals] of hash) {
    vals.sort((a, b) => b - a);
    let cur = useLimit;
    while (cur && useLimit - cur < vals.length) {
      arr.push(vals[useLimit - cur]);
      cur--;
    }
  }
  arr.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < Math.min(numWanted, arr.length); i++) {
    res += arr[i];
  }
  return res;
};
