/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-28 08:47:08                                                  *
 * @LastModifiedDate: 2023-01-28 09:44:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。你需要选择 恰好 一个下标（下标从 0 开始）并删除对应的元素。请注意剩下元素的下标可能会因为删除操作而发生改变。

// 比方说，如果 nums = [6,1,7,4,1] ，那么：

// 选择删除下标 1 ，剩下的数组为 nums = [6,7,4,1] 。
// 选择删除下标 2 ，剩下的数组为 nums = [6,1,4,1] 。
// 选择删除下标 4 ，剩下的数组为 nums = [6,1,7,4] 。
// 如果一个数组满足奇数下标元素的和与偶数下标元素的和相等，该数组就是一个 平衡数组 。

// 请你返回删除操作后，剩下的数组 nums 是 平衡数组 的 方案数 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let oddSum = 0;
  let evenSum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      evenSum += nums[i];
    } else {
      oddSum += nums[i];
    }
  }
  let res = 0;
  let rightOdd = evenSum;
  let rightEven = oddSum;
  let leftOdd = 0;
  let leftEven = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      if (i > 0) leftOdd += nums[i - 1];
      rightOdd -= nums[i];
    } else {
      if (i > 0) leftEven += nums[i - 1];
      rightEven -= nums[i];
    }
    if (leftOdd + rightOdd === leftEven + rightEven) {
      res++;
    }
  }
  return res;
};

// 1 2 3 4 5 6 7 8
// 1  => 偶数: | 2 + 4 + 6 + 8 奇数: 3 + 5 + 7
// 2  => 偶数: 1 + | 4 + 6 + 8 奇数: 3 + 5 + 7
// 3  => 偶数: 1 + | 4 + 6 + 8 奇数: 2 + 5 + 7
// 4  => 偶数: 1 + 3 + | 6 + 8 奇数: 2 + 5 + 7
// 5  => 偶数: 1 + 3 + | 6 + 8 奇数: 2 + 4 + 7
// 6  => 偶数: 1 + 3 + 5 + | 8 奇数: 2 + 4 + 7
// 7  => 偶数: 1 + 3 + 5 + | 8 奇数: 2 + 4 + 6
// 8  => 偶数: 1 + 3 + 5 + 7 |

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let sum = 0;
  let evenSum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      evenSum += nums[i];
    }
    sum += nums[i];
  }
  let res = 0;
  let rightOdd = evenSum;
  let leftOdd = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      if (i > 0) leftOdd += nums[i - 1];
      rightOdd -= nums[i];
    }

    if ((leftOdd + rightOdd) * 2 === sum - nums[i]) {
      res++;
    }
  }
  return res;
};
