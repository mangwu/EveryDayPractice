/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-28 23:34:34                                                  *
 * @LastModifiedDate: 2025-04-28 23:44:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  // 总子数组个数：1+2+3+...n
  let total = ((1 + n) * n) / 2;
  // 计算不满足条件的数组个数
  let nofull = 0;
  let right = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    while (right < n && sum * (right - i) < k) {
      sum += nums[right++];
    }
    if (sum * (right - i) >= k) {
      // 不符合条件
      sum -= nums[--right]; // 让right指向下一个不符合条件的元素
      nofull += n - right;
      if (right == i) {
        // 特殊情况，单个元素就无法满足
        sum += nums[right];
        right = i + 1;
      }
    } else {
      // 可以提前退出，right遍历到n都满足条件
      break;
    }
    sum -= nums[i];
  }
  return total - nofull;
};

// [2,1,4,3,5] 10
// 2 + 1 + 4 => 3
// 1 + 4
