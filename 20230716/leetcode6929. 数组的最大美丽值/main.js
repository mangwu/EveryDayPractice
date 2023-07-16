/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-16 10:34:22                                                  *
 * @LastModifiedDate: 2023-07-16 11:01:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个 非负 整数 k 。

// 在一步操作中，你可以执行下述指令：

// 在范围 [0, nums.length - 1] 中选择一个 此前没有选过 的下标 i 。
// 将 nums[i] 替换为范围 [nums[i] - k, nums[i] + k] 内的任一整数。
// 数组的 美丽值 定义为数组中由相等元素组成的最长子序列的长度。

// 对数组 nums 执行上述操作任意次后，返回数组可能取得的 最大 美丽值。

// 注意：你 只 能对每个下标执行 一次 此操作。

// 数组的 子序列 定义是：经由原数组删除一些元素（也可能不删除）得到的一个新数组，且在此过程中剩余元素的顺序不发生改变。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (nums[n - 1] - nums[0] <= k * 2) {
    return n;
  }
  // 滑动窗口
  let curMax = nums[0] + k;
  let left = 0;
  let right = 0;
  let res = 1;
  while (right < n) {
    while (nums[right] - k <= curMax && right < n) {
      right++;
    }
    res = Math.max(right - left, res);
    if (right == n) break;
    while (nums[left] + k < nums[right] - k) {
      left++;
    }
    curMax = nums[left] + k;
  }
  return res;
};

// [19,48,93,96]
// 24
