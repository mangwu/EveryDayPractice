/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-11 09:13:32                                                  *
 * @LastModifiedDate: 2024-07-11 22:20:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 正 整数数组 nums 。

// 如果 nums 的一个子数组满足：移除这个子数组后剩余元素 严格递增 ，那么我们称这个子数组为 移除递增 子数组。比方说，[5, 3, 4, 6, 7] 中的 [3, 4] 是一个移除递增子数组，因为移除该子数组后，[5, 3, 4, 6, 7] 变为 [5, 6, 7] ，是严格递增的。

// 请你返回 nums 中 移除递增 子数组的总数目。

// 注意 ，剩余元素为空的数组也视为是递增的。

// 子数组 指的是一个数组中一段连续的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  // 双指针
  const n = nums.length;
  let left = 1;
  let ans = 0;
  while (left < n) {
    if (nums[left] <= nums[left - 1]) break;
    left++;
  }
  if (left === n) return (n * (n + 1)) / 2;
  left--;
  // 包括left右边所有元素的子数组
  ans += left + 1 + 1;
  // 右指针
  for (let r = n - 1; r > 0; r--) {
    // 当前右边后面遇到一次递减的情况，就无法继续构建严格递增的情况了
    if (r < n - 1 && nums[r] >= nums[r + 1]) break;
    while (left >= 0 && nums[left] >= nums[r]) left--;
    // 删除包括以nums[left+1]开头，以num[r-1]结尾的子数组
    ans += left + 2;
  }
  return ans;
};
