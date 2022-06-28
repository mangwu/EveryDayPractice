/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-28 09:06:36                                                  *
 * @LastModifiedDate: 2022-06-28 09:37:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

// 你可以假设所有输入数组都可以得到满足题目要求的结果。

//

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  // 将数组从大到小排序后，再进行摆动排序
  nums.sort((a, b) => a - b);
  const copy = nums.slice();
  const n = nums.length;
  let left = Math.floor((n - 1) / 2);
  let right = n - 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      nums[i] = copy[left];
      left--;
    } else {
      nums[i] = copy[right];
      right--;
    }
  }
};

// 1 1 2 2 3 4 4 5 6 6 6 | 6 6 7 8 8 9 9 9 10 11


// 4 5 5 6

// 5 4 5 6
// 5 6 5 4

// 1 2 3 4
// 2 1 3 4
// 2 4 3 1


// 1 2 3 4 5 6 7 8
// 4 2 3 1 5 6 7 8
// 4 8 3 1 5 6 7 2
// 4 8 3 7 5 6 1 2

// 1 2 3 4 5 6
// 3 2 1 4 5 6
// 3 6 1 4 5 2
// 