/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-05 08:59:56                                                  *
 * @LastModifiedDate: 2023-01-05 09:25:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums （下标 从 0 开始 计数）以及两个整数：low 和 high ，请返回 漂亮数对 的数目。

// 漂亮数对 是一个形如 (i, j) 的数对，其中 0 <= i < j < nums.length 且 low <= (nums[i] XOR nums[j]) <= high 。
/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
  // 暴力法会超时
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let cur = nums[i] ^ nums[j];
      if (cur >= low && cur <= high) {
        res++;
      }
    }
  }
  return res;
};


/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countPairs = function (nums, low, high) {
  // 相同的值异或为0，所以可以过滤掉相同的数对
  
};


// 异或性质  x ^ y = t 等价于 y = x ^ t

// 10100 => 20
// 


