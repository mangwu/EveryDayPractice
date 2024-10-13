/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-12 23:29:33                                                  *
 * @LastModifiedDate: 2024-10-12 23:36:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 nums ，数组中的数字 要么 出现一次，要么 出现两次。

// 请你返回数组中所有出现两次数字的按位 XOR 值，如果没有数字出现过两次，返回 0 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let res = 0;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      res = res ^ nums[i++];
    }
  }
  return res;
};
