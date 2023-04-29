/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-29 22:33:20                                                  *
 * @LastModifiedDate: 2023-04-29 22:40:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始长度为 n 的整数排列 A 和 B 。

// A 和 B 的 前缀公共数组 定义为数组 C ，其中 C[i] 是数组 A 和 B 到下标为 i 之前公共元素的数目。

// 请你返回 A 和 B 的 前缀公共数组 。

// 如果一个长度为 n 的数组包含 1 到 n 的元素恰好一次，我们称这个数组是一个长度为 n 的 排列

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const setA = new Set();
  const setB = new Set();
  const n = A.length;
  const C = [];
  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];
    let cur = 0;
    if (setB.has(a)) {
      cur++;
    }
    if (setA.has(b)) {
      cur++;
    }
    if (a === b) cur++;
    setA.add(a);
    setB.add(b);
    C[i] = (i > 0 ? C[i - 1] : 0) + cur;
  }
  return C;
};
