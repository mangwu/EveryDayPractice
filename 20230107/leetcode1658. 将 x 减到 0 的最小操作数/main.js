/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-07 15:15:31                                                  *
 * @LastModifiedDate: 2023-01-07 15:59:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

// 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  // 也就是说从两端选择若干个数组成x
  // 前缀和后缀之和
  // 假设全选后缀，那么从后面开始遍历，从后面开始求和
  let sum = 0;
  const n = nums.length;
  let res = Infinity;
  let j = n;
  while (sum < x && j > 0) {
    j--;
    sum += nums[j];
    if (sum === x) {
      res = n - j;
    }
  }
  if (sum < x) {
    return -1;
  }
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (sum === x) {
      res = Math.min(res, i + 1 + n - j);
    }
    while (sum > x && j < n) {
      sum -= nums[j];
      j++;
      if (sum === x) {
        res = Math.min(res, i + 1 + n - j);
      }
    }
    // 可以提前退出了
    if (j >= n && sum > x) {
      break;
    }
  }
  return res === Infinity ? -1 : res;
};
