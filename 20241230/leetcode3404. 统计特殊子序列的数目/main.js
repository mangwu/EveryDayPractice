/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-30 17:03:21                                                  *
 * @LastModifiedDate: 2024-12-30 17:39:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个只包含正整数的数组 nums 。

// 特殊子序列 是一个长度为 4 的子序列，用下标 (p, q, r, s) 表示，它们满足 p < q < r < s ，且这个子序列 必须 满足以下条件：

// nums[p] * nums[r] == nums[q] * nums[s]
// 相邻坐标之间至少间隔 一个 数字。换句话说，q - p > 1 ，r - q > 1 且 s - r > 1 。
// 子序列指的是从原数组中删除零个或者更多元素后，剩下元素不改变顺序组成的数字序列。

// 请你返回 nums 中不同 特殊子序列 的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function (nums) {
  // nums[p] * nums[r] == nums[q] * nums[s]
  // => nums[p] / nums[q] === nums[s] / nums[r]
  const n = nums.length;
  const pqHash = new Map();
  const srHash = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      const pq = nums[i] / nums[j];
      const sr = nums[j] / nums[i];
      if (pqHash.has(pq)) {
        pqHash.get(pq).push([i, j]);
      } else {
        pqHash.set(pq, [[i, j]]);
      }
      if (srHash.has(sr)) {
        srHash.get(sr).push([i, j]);
      } else {
        srHash.set(sr, [[i, j]]);
      }
    }
  }
  for (const [key, pqArr] of pqHash) {
    const srArr = srHash.get(key) || [];
    let right = 0;
    while(right < srArr.length) {
      
    }
  }
};
