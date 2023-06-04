/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-04 15:58:02                                                  *
 * @LastModifiedDate: 2023-06-04 16:07:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 偶数 的整数数组 nums 。

// 只要 nums 不是 空数组，你就重复执行以下步骤：

// 找到 nums 中的最小值，并删除它。
// 找到 nums 中的最大值，并删除它。
// 计算删除两数的平均值。
// 两数 a 和 b 的 平均值 为 (a + b) / 2 。

// 比方说，2 和 3 的平均值是 (2 + 3) / 2 = 2.5 。
// 返回上述过程能得到的 不同 平均值的数目。

// 注意 ，如果最小值或者最大值有重复元素，可以删除任意一个。

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const set = new Set();
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    set.add((nums[i] + nums[n - i - 1]) / 2);
  }
  return set.size;
};
