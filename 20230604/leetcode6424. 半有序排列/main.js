/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-04 10:36:06                                                  *
 * @LastModifiedDate: 2023-06-04 10:40:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。

// 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ：

// 选择 nums 中相邻的两个元素，然后交换它们。
// 返回使 nums 变成 半有序排列 所需的最小操作次数。

// 排列 是一个长度为 n 的整数序列，其中包含从 1 到 n 的每个数字恰好一次。

/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  const n = nums.length;
  // 1 ... n
  let idx1 = nums.indexOf(1);
  let idxn = nums.indexOf(n);
  if (idx1 === 0 && idxn === n - 1) return 0;
  if (idx1 < idxn) return idx1 + n - idxn - 1;
  return idx1 + n - idxn - 2;
};
