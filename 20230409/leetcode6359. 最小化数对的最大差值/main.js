/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-09 10:57:46                                                  *
 * @LastModifiedDate: 2023-04-09 11:14:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 p 。请你从 nums 中找到 p 个下标对，每个下标对对应数值取差值，你需要使得这 p 个差值的 最大值 最小。同时，你需要确保每个下标在这 p 个下标对中最多出现一次。

// 对于一个下标对 i 和 j ，这一对的差值为 |nums[i] - nums[j]| ，其中 |x| 表示 x 的 绝对值 。

// 请你返回 p 个下标对对应数值 最大差值 的 最小值 。

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  // 选择的下标现在一般是相邻下标了
  let arr = [];
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[i + 1] - arr[i]);
  }
  // 从arr中选择p个不相邻的数
  
};
