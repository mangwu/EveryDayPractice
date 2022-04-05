/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 23:44:36                                                  *
 * @LastModifiedDate: 2022-04-05 23:46:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个无序的数组 nums，返回 数组在排序之后，相邻元素之间最大的差值 。
// 如果数组元素个数小于 2，则返回 0 。

// 您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] - nums[i - 1]);
  }
  return max;
};
