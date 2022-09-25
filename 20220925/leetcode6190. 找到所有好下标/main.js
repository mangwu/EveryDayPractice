/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 11:23:34                                                  *
 * @LastModifiedDate: 2022-09-25 11:42:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 n 下标从 0 开始的整数数组 nums 和一个正整数 k 。

// 对于 k <= i < n - k 之间的一个下标 i ，如果它满足以下条件，
// 我们就称它为一个 好 下标：

// 下标 i 之前 的 k 个元素是 非递增的 。
// 下标 i 之后 的 k 个元素是 非递减的 。
// 按 升序 返回所有好下标。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function (nums, k) {
  const n = nums.length;
  if (n <= 2 * k) {
    return [];
  }
  if (k === 1) {
    return new Array(n - 2).fill(0).map((v, i) => i + 1);
  }
  let ans = [];
  for (let i = 0; i < n - k; i++) {
    let cur = 1;
    let j = i;
    while (
      j + k + 2 < n &&
      nums[j] >= nums[j + 1] &&
      nums[j + k + 1] <= nums[j + k + 2]
    ) {
      cur++;
      j++;
      if (cur >= k) {
        ans.push(j + 1);
      }
    }
    i = j;
  }
  return ans;
};
