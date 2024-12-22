/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-22 20:53:15                                                  *
 * @LastModifiedDate: 2024-12-22 21:32:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k。

// 你可以对数组中的每个元素 最多 执行 一次 以下操作：

// 将一个在范围 [-k, k] 内的整数加到该元素上。
// 返回执行这些操作后，nums 中可能拥有的不同元素的 最大 数量。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
  if (k === 0) return new Set(nums).size;
  nums.sort((a, b) => a - b);
  let pre = nums[0] - k - 1;
  let res = 0;
  for (const num of nums) {
    if (num - k > pre) {
      res++;
      pre = num - k;
    } else if (num + k > pre) {
      res++;
      pre = pre + 1;
    }
  }
  return res;
};
