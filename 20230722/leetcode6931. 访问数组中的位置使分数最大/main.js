/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-22 22:40:19                                                  *
 * @LastModifiedDate: 2023-07-22 23:07:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  // 动态规划
  const n = nums.length;
  // 遍历一遍nums，将奇偶顺序弄清楚
  // 偶数
  const even = [];
  // 奇数
  const odd = [];
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  nums[0] % 2 === 0 ? even.push(0) : odd.push(0);
  let res = dp[0];
  for (let i = 1; i < n; i++) {
    let preOdd = -Infinity;
    if (odd.length) preOdd = dp[odd[odd.length - 1]];
    let preEven = -Infinity;
    if (even.length) preEven = dp[even[even.length - 1]];
    if (nums[i] % 2 === 0) {
      // 偶数
      dp[i] = Math.max(preEven, preOdd - x) + nums[i];
      even.push(i);
    } else {
      // 奇数
      dp[i] = Math.max(preEven - x, preOdd) + nums[i];
      odd.push(i);
    }
    res = Math.max(dp[i], res);
  }
  console.log(dp);
  return res;
};
