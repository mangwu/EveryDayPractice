/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-23 22:40:05                                                  *
 * @LastModifiedDate: 2022-07-23 22:46:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，返回全部为 0 的 子数组 数目。

// 子数组 是一个数组中一段连续非空元素组成的序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  const n = nums.length;
  let ans = 0;
  // 查找连续的0
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      let cur = 1;
      while (i < n && nums[i + 1] == 0) {
        cur++;
        i++;
      }
      ans += (cur * (cur + 1)) / 2;
    }
  }
  return ans;
};
