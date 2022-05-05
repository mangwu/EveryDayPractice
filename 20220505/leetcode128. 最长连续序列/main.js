/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-05 20:11:04                                                  *
 * @LastModifiedDate: 2022-05-05 21:49:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个未排序的整数数组 nums ，
// 找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 排序法
  nums.sort((a, b) => a - b);
  let ans = 1;
  const len = nums.length;
  if (len == 0) {
    return 0;
  }
  let cnts = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] == nums[i - 1] + 1) {
      cnts++;
    } else if (nums[i] == nums[i - 1]) {
      continue;
    } else {
      ans = Math.max(ans, cnts);
      cnts = 1;
    }
  }
  ans = Math.max(ans, cnts);
  return ans;
};
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hash = new Map();
  const len = nums.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    if (!hash.has(nums[i])) {
      if (hash.has(nums[i] - 1)) {
        let cur = hash.get(nums[i] - 1) + 1;
        hash.set(nums[i], cur);
        ans = Math.max(ans, cur);
      } else {
        hash.set(nums[i], 1);
        ans = Math.max(ans, 1);
      }
    }
  }
  // 错误解答，未考虑已有nums[i] + 1的情况
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  let ans = 0;
  for (const num of nums) {
    set.add(num);
  }
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let longSeries = 1;
      let start = num + 1;
      while (set.has(start)) {
        start++;
        longSeries++;
      }
      ans = Math.max(ans, longSeries);
    }
  }
  return ans;
};
