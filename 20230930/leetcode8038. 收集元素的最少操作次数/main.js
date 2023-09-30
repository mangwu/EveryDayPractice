/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-30 22:32:02                                                  *
 * @LastModifiedDate: 2023-09-30 22:35:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums 和一个整数 k 。

// 一次操作中，你可以将数组的最后一个元素删除，将该元素添加到一个集合中。

// 请你返回收集元素 1, 2, ..., k 需要的 最少操作次数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const set = new Set();
  let ans = 0;
  while (nums.length) {
    const cur = nums.pop();
    ans++;
    if (cur <= k) {
      set.add(cur);
    }
    if (set.size === k) return ans;
  }
};
