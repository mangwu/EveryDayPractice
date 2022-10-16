/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-16 10:30:21                                                  *
 * @LastModifiedDate: 2022-10-16 10:31:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 不包含 任何零的整数数组 nums ，找出自身与对应的负数都在数组中存在的最大正整数 k 。

// 返回正整数 k ，如果不存在这样的整数，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const set = new Set(nums);
  let max = -1;
  for (const num of nums) {
    if (num > max && set.has(-num)) {
      max = num;
    }
  }
  return max;
};
