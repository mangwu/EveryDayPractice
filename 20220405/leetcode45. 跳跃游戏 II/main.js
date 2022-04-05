/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 23:49:11                                                  *
 * @LastModifiedDate: 2022-04-06 00:34:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length;
  if (len == 1) {
    return 0;
  }
  if (len == 2) {
    return 1;
  }
  // 最大能跳跃位置
  let max = 0;
  // 跳跃次数
  let minArr = [0, 1];
  for (let i = 0; i < len; i++) {
    if (i + nums[i] > max) {
      premax = max;
      max = i + nums[i];
      for (let j = premax + 1; j <= Math.min(len - 1, max); j++) {
        minArr[j] = minArr[i] + 1;
      }
      if (max >= len - 1) {
        return minArr[len - 1];
      }
    }
  }
};
