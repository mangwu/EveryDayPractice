/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-26 16:17:05                                                  *
 * @LastModifiedDate: 2022-02-26 16:27:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。

// 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  // 保存前面元素的最小值即可
  let min = nums[0];
  let max = -1;
  for (const num of nums) {
    if (num < min) {
      min = num;
    } else if (num > min) {
      max = Math.max(max, num - min);
    }
  }
  return max;
};
