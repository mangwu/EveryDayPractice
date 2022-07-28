/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-28 09:13:33                                                  *
 * @LastModifiedDate: 2022-07-28 09:21:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。

// 序号代表了一个元素有多大。序号编号的规则如下：

// 序号从 1 开始编号。
// 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
// 每个数字的序号都应该尽可能地小。

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const n = arr.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(arr[i])) {
      const a = hash.get(arr[i]);
      a.push(i);
      hash.set(arr[i], a);
    } else {
      hash.set(arr[i], [i]);
    }
  }
  arr.sort((a, b) => a - b);
  let idx = 1;
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    // 过滤相同元素
    while (arr[i] == arr[i + 1]) {
      i++;
    }
    const a = hash.get(arr[i]);
    for (const ele of a) {
      ans[ele] = idx;
    }
    idx++;
  }
  return ans;
};
