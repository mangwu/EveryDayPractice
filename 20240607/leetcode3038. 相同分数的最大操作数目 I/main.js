/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-07 08:57:06                                                  *
 * @LastModifiedDate: 2024-06-07 09:00:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，如果 nums 至少 包含 2 个元素，你可以执行以下操作：

// 选择 nums 中的前两个元素并将它们删除。
// 一次操作的 分数 是被删除元素的和。

// 在确保 所有操作分数相同 的前提下，请你求出 最多 能进行多少次操作。

// 请你返回按照上述要求 最多 可以进行的操作次数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let sum = nums[0] + nums[1];
  const n = nums.length;
  let ans = 1;
  for (let i = 2; i < n - 1; i += 2) {
    if (nums[i] + nums[i + 1] === sum) ans++;
    else break;
  }

  return ans;
};
