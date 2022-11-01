/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-01 15:48:34                                                  *
 * @LastModifiedDate: 2022-11-01 15:57:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 从 0 开始的排列 nums（下标也从 0 开始）。请你构建一个 同样长度 的数组 ans ，
// 其中，对于每个 i（0 <= i < nums.length），都满足 ans[i] = nums[nums[i]] 。返回构建好的数组 ans 。

// 从 0 开始的排列 nums 是一个由 0 到 nums.length - 1（0 和 nums.length - 1 也包含在内）的不同整数组成的数组。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  // 耗费额外空间
  const arr = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    arr[i] = nums[nums[i]];
  }
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  // 不耗费额外空间,原地修改
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let cur = nums[i];
    let res = nums[nums[i]] % 1000;
    nums[i] = res * 1000 + cur;
  }
  for (let i = 0; i < n; i++) {
    nums[i] = Math.floor(nums[i] / 1000);
  }
  return nums;
};
