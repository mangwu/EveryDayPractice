/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 23:14:36                                                  *
 * @LastModifiedDate: 2022-04-05 23:24:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  // 需要跳的步数为len步
  if (len == 1) {
    return true;
  }
  let max = nums[0];
  if (max >= len - 1) {
    return true;
  }
  for (let i = 1; i <= max; i++) {
    max = Math.max(max, i + nums[i]);
    if (max >= len - 1) {
      return true;
    }
  }
  return false;
};
