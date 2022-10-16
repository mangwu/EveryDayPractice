/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-15 23:08:22                                                  *
 * @LastModifiedDate: 2022-10-15 23:34:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的数组 nums ，它含有 n 个非负整数。

// 每一步操作中，你需要：

// 选择一个满足 1 <= i < n 的整数 i ，且 nums[i] > 0 。
// 将 nums[i] 减 1 。
// 将 nums[i - 1] 加 1 。
// 你可以对数组执行 任意 次上述操作，请你返回可以得到的 nums 数组中 最大值 最小 为多少。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
  const n = nums.length;
  let pre = nums[0];
  let preSum = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > pre) {
      // 进行流动且最大值会有变化
      if (nums[i] - pre > pre * i - preSum) {
        pre = Math.ceil((nums[i] - pre - (pre * i - preSum)) / (i + 1)) + pre;
      }
    }
    preSum += nums[i];
  }
  return pre;
};
