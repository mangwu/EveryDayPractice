/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-17 21:11:06                                                  *
 * @LastModifiedDate: 2022-12-17 21:36:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的二维整数数组 groups ，同时给你一个整数数组 nums 。

// 你是否可以从 nums 中选出 n 个 不相交 的子数组，使得第 i 个子数组与 groups[i] （下标从 0 开始）完全相同，且如果 i > 0 ，那么第 (i-1) 个子数组在 nums 中出现的位置在第 i 个子数组前面。（也就是说，这些子数组在 nums 中出现的顺序需要与 groups 顺序相同）

// 如果你可以找出这样的 n 个子数组，请你返回 true ，否则返回 false 。

// 如果不存在下标为 k 的元素 nums[k] 属于不止一个子数组，就称这些子数组是 不相交 的。子数组指的是原数组中连续元素组成的一个序列。

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  const n = nums.length;
  let res = false;
  for (let i = 0; i < n; i++) {
    if (groups[0][0] === nums[i]) {
      res = res || ChooseIt(groups, nums, i);
    }
  }
  return res;
};

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @param {number} s 开始索引
 * @return {boolean}
 */
var ChooseIt = function (groups, nums, s) {
  const n = groups.length;
  let idx = 0;
  let j = s;
  const m = nums.length;
  while (idx < n && j < m) {
    if (nums[j] === groups[idx][0]) {
      // 进行比对
      for (let start = 0; start < groups[idx].length; start++) {
        if (nums[start + j] === groups[idx][start]) {
          continue;
        } else {
          return false;
        }
      }
      // 成功找到
      j += groups[idx].length;
      idx++;
    } else {
      j++;
    }
  }
  return idx === groups.length;
};
