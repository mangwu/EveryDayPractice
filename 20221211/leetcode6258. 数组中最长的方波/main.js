/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-11 10:37:05                                                  *
 * @LastModifiedDate: 2022-12-11 10:43:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。如果 nums 的子序列满足下述条件，则认为该子序列是一个 方波 ：

// 子序列的长度至少为 2 ，并且
// 将子序列从小到大排序 之后 ，除第一个元素外，每个元素都是前一个元素的 平方 。
// 返回 nums 中 最长方波 的长度，如果不存在 方波 则返回 -1 。

// 子序列 也是一个数组，可以由另一个数组删除一些或不删除元素且不改变剩余元素的顺序得到。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const set = new Set(nums);
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
      // 方波计算
      let cur = 1;
      let start = nums[i];
      while (set.has(start * start)) {
        cur++;
        start = start * start
        set.delete(start);
      }
      if (cur > 1) {
        ans = Math.max(cur, ans);
      }
    }
  }
  return ans;
};
