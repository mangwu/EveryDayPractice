/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-04 11:17:37                                                  *
 * @LastModifiedDate: 2022-09-04 11:44:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 正 整数组成的数组 nums 。

// 如果 nums 的子数组中位于 不同 位置的每对元素按位 与（AND）运算的结果等于 0 ，
// 则称该子数组为 优雅 子数组。

// 返回 最长 的优雅子数组的长度。

// 子数组 是数组中的一个 连续 部分。

// 注意：长度为 1 的子数组始终视作优雅子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  // 滑动窗口
  let left = 0;
  let right = 1;
  const n = nums.length;
  let ans = 1;
  while (right < n) {
    // 后面不用遍历
    if (n - left < ans) {
      break;
    }
    for (let i = left; i < right; i++) {
      if ((nums[i] & nums[right]) !== 0) {
        left = i + 1; // 不能赋值为right
        right--;
        break;
      }
    }
    right++;
    ans = Math.max(ans, right - left);
  }
  return ans;
};
