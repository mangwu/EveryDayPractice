/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-18 23:11:10                                                  *
 * @LastModifiedDate: 2023-03-18 23:36:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 nums ，它包含若干正整数。

// 一开始分数 score = 0 ，请你按照下面算法求出最后分数：

// 从数组中选择最小且没有被标记的整数。如果有相等元素，选择下标最小的一个。
// 将选中的整数加到 score 中。
// 标记 被选中元素，如果有相邻元素，则同时标记 与它相邻的两个元素 。
// 重复此过程直到数组中所有元素都被标记。
// 请你返回执行上述算法后最后的分数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const hash = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    hash.has(nums[i]) ? hash.get(nums[i]).push(i) : hash.set(nums[i], [i]);
  }
  const copy = [...new Set(nums.slice().sort((a, b) => a - b))];
  let score = 0;
  const set = new Set();
  for (let i = 0; i < copy.length; i++) {
    const cur = hash.get(copy[i]);
    for (const idx of cur) {
      if (set.has(idx)) continue;
      score += copy[i];
      set.add(idx);
      set.add(idx + 1);
      set.add(idx - 1);
    }
  }
  return score;
};
