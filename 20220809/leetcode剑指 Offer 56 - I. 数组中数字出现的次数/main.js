/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-09 16:28:46                                                  *
 * @LastModifiedDate: 2022-08-09 17:20:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
// 请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  // 相同数字异或的值是0
  // 所有数异或的结果就是两个只出现一次数字的异或结果
  let xorRes = 0;
  for (const num of nums) {
    xorRes ^= num;
  }
  let div = 1;
  while ((div & xorRes) == 0) {
    div <<= 1;
  }
  let a = 0;
  let b = 0;
  for (const num of nums) {
    if ((num & div) == 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }
  return [a, b];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  // 相同数字异或的值是0
  // 所有数异或的结果就是两个只出现一次数字的异或结果
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return [...set];
};
