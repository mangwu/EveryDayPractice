/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-26 10:53:10                                                  *
 * @LastModifiedDate: 2023-03-26 11:21:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums 。

// 同时给你一个长度为 m 的整数数组 queries 。第 i 个查询中，你需要将 nums 中所有元素变成 queries[i] 。你可以执行以下操作 任意 次：

// 将数组里一个元素 增大 或者 减小 1 。
// 请你返回一个长度为 m 的数组 answer ，其中 answer[i]是将 nums 中所有元素变成 queries[i] 的 最少 操作次数。

// 注意，每次查询后，数组变回最开始的值。

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const sums = [0];
  for (const num of nums) {
    sums[0] += num - nums[0];
  }
  const hash = new Map();
  hash.set(nums[0], 0);
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    sums[i] =
      sums[i - 1] +
      (i - 1) * (nums[i] - nums[i - 1]) -
      (n - i - 1) * (nums[i] - nums[i - 1]);
    hash.set(nums[i], i);
  }
  let ans = [];
  for (const querie of queries) {
    if (hash.has(querie)) {
      ans.push(sums[hash.get(querie)]);
    } else {
      if (querie < nums[0]) {
        ans.push((nums[0] - querie) * n + sums[0]);
      } else if (querie > nums[n - 1]) {
        ans.push((querie - nums[n - 1]) * n + sums[n - 1]);
      } else {
        let left = 0;
        let right = n - 1; // 找到第一个比querie小的数
        while (left <= right) {
          let mid = (left + right) >> 1;
          if (nums[mid] > querie) {
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }
        // 结果为right
        let diff = querie - nums[right];
        ans.push(sums[right] + (right + 1) * diff - (n - right - 1) * diff);
      }
    }
  }
  return ans;
};
