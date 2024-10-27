/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-16 09:20:16                                                  *
 * @LastModifiedDate: 2024-10-16 09:31:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一个初始为空的浮点数数组 averages。另给你一个包含 n 个整数的数组 nums，其中 n 为偶数。

// 你需要重复以下步骤 n / 2 次：

// 从 nums 中移除 最小 的元素 minElement 和 最大 的元素 maxElement。
// 将 (minElement + maxElement) / 2 加入到 averages 中。
// 返回 averages 中的 最小 元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let minA = Infinity;
  for (let i = 0; i < n / 2; i++) {
    minA = Math.min(minA, (nums[i] + nums[n - i - 1]) / 2);
  }
  return minA;
};
