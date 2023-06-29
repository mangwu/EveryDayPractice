/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-28 08:56:09                                                  *
 * @LastModifiedDate: 2023-06-28 09:07:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums​​​ 和一个整数 k 。你需要将这个数组划分到 k 个相同大小的子集中，使得同一个子集里面没有两个相同的元素。

// 一个子集的 不兼容性 是该子集里面最大值和最小值的差。

// 请你返回将数组分成 k 个子集后，各子集 不兼容性 的 和 的 最小值 ，如果无法分成分成 k 个子集，返回 -1 。

// 子集的定义是数组中一些数字的集合，对数字顺序没有要求。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function (nums, k) {
  // 同一种相同元素的个数不能超过k
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const count = new Array(n + 1).fill(0);
  for (const num of nums) count[num]++;
  for (const item of count) {
    if (item > k) return -1;
  }
  // 分配:
  
};
