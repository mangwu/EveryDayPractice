/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-26 16:45:44                                                  *
 * @LastModifiedDate: 2023-02-26 17:48:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  nums.sort((a, b) => a - b);
  // 大数从中位数开始选择
  const n = nums.length;
  let left = 0;
  let mid = Math.floor(n / 2);
  const m = mid;
  let res = 0;
  while (left < m && mid < n) {
    if (nums[left] * 2 <= nums[mid]) {
      res += 2;
      left++;
      mid++;
    } else {
      mid++;
    }
  }
  return res;
};
// 1 2 5 9 15 17 28
//

[
  2, 2, 3, 4, 6, 10, 11, 14, 14, 16, 20, 22, 22, 23, 24, 24, 25, 25, 26, 26, 27,
  29, 29, 35, 36, 39, 40, 42, 42, 43, 44, 49, 50, 51, 51, 54, 57, 57, 58, 60,
  62, 63, 64, 67, 68, 73, 74, 76, 79, 82, 85, 88, 88, 89, 90, 92, 95, 96, 100,
];

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const m = Math.floor(n / 2);
  let res = 0;
  for (let i = 0, j = m; i < m && j < n; i++, j++) {
    while (nums[i] * 2 > nums[j] && j < n) j++;
    if (j < n) res += 2;
  }
  return res;
};
