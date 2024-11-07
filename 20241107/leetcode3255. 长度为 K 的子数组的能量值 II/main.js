/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-07 08:44:10                                                  *
 * @LastModifiedDate: 2024-11-07 08:47:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums 和一个正整数 k 。

// 一个数组的 能量值 定义为：

// 如果 所有 元素都是依次 连续 且 上升 的，那么能量值为 最大 的元素。
// 否则为 -1 。
// 你需要求出 nums 中所有长度为 k 的
// 子数组
//  的能量值。

// 请你返回一个长度为 n - k + 1 的整数数组 results ，其中 results[i] 是子数组 nums[i..(i + k - 1)] 的能量值。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  if (k === 1) return nums;
  let cnt = 1;
  const n = nums.length;
  const res = [];
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1] + 1) cnt++;
    else cnt = 1;
    if (i + 1 >= k) res.push(cnt >= k ? nums[i] : -1);
  }
  return res;
};
