/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-12 09:11:08                                                  *
 * @LastModifiedDate: 2024-09-12 09:59:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。

// 一开始，所有下标都没有被标记。你可以执行以下操作任意次：

// 选择两个 互不相同且未标记 的下标 i 和 j ，满足 2 * nums[i] <= nums[j] ，标记下标 i 和 j 。
// 请你执行上述操作任意次，返回 nums 中最多可以标记的下标数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  const n = nums.length;
  if (n === 1) return 0;
  nums.sort((a, b) => a - b);
  let left = 0;
  let mid = Math.floor(n / 2);
  const cMid = mid;
  let res = 0;
  while (left < cMid && mid < n) {
    if (nums[left] * 2 <= nums[mid]) {
      left++;
      mid++;
      res += 2;
    } else {
      mid++;
    }
  }
  return res;
};
