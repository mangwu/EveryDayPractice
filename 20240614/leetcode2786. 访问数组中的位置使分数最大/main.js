/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-14 10:18:58                                                  *
 * @LastModifiedDate: 2024-06-14 10:43:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个正整数 x 。

// 你 一开始 在数组的位置 0 处，你可以按照下述规则访问数组中的其他位置：

// 如果你当前在位置 i ，那么你可以移动到满足 i < j 的 任意 位置 j 。
// 对于你访问的位置 i ，你可以获得分数 nums[i] 。
// 如果你从位置 i 移动到位置 j 且 nums[i] 和 nums[j] 的 奇偶性 不同，那么你将失去分数 x 。
// 请你返回你能得到的 最大 得分之和。

// 注意 ，你一开始的分数为 nums[0] 。

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  const n = nums.length;
  let oddMax = nums[0] % 2 === 1 ? nums[0] : -Infinity;
  let evenMax = nums[0] % 2 === 0 ? nums[0] : -Infinity;
  let res = Math.max(oddMax, evenMax);
  // 记录前面最大的奇数位和偶数位
  for (let i = 1; i < n; i++) {
    if (nums[i] % 2 === 1) {
      // 奇数位
      let curRes = Math.max(oddMax + nums[i], evenMax + nums[i] - x);
      oddMax = Math.max(curRes, oddMax);
      res = Math.max(res, oddMax);
    } else {
      // 偶数位
      let curRes = Math.max(evenMax + nums[i], oddMax + nums[i] - x);
      evenMax = Math.max(curRes, evenMax);
      res = Math.max(res, evenMax);
    }
  }
  return res;
};
// 5
// 2 3 6 1 9 2

// 2
// 2 0
// 2 0 8
//
