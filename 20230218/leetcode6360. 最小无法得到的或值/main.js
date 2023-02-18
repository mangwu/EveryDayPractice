/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-18 22:48:04                                                  *
 * @LastModifiedDate: 2023-02-18 23:09:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。

// 如果存在一些整数满足 0 <= index1 < index2 < ... < indexk < nums.length ，得到 nums[index1] | nums[index2] | ... | nums[indexk] = x ，那么我们说 x 是 可表达的 。换言之，如果一个整数能由 nums 的某个子序列的或运算得到，那么它就是可表达的。

// 请你返回 nums 不可表达的 最小非零整数 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function (nums) {
  const set = new Set(nums);
  let res = 1;
  while (set.has(res)) {
    res *= 2;
  }
  return res;
};

// [1, 2, 4, 8, 8, 16, 32, 75];
