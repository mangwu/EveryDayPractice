/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-12 08:59:50                                                  *
 * @LastModifiedDate: 2023-05-12 09:29:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。「数组值」定义为所有满足 0 <= i < nums.length-1 的 |nums[i]-nums[i+1]| 的和。

// 你可以选择给定数组的任意子数组，并将该子数组翻转。但你只能执行这个操作 一次 。

// 请你找到可行的最大 数组值 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function (nums) {
  // 先计算出每个相邻元素的和
  const n = nums.length;
  const arr = [0];
  for (let i = 1; i < n; i++) {
    arr.push(Math.abs(arr[i] - arr[i - 1]));
  }
  arr.push(0);
  // 选择两个元素索引，
  
  
};
