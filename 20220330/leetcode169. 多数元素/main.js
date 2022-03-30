/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-30 23:11:40                                                  *
 * @LastModifiedDate: 2022-03-31 00:38:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = new Map();
  const len = nums.length;
  const half = Math.floor(len / 2);
  for (const num of nums) {
    const n = hash.get(num) ? hash.get(num) : 0;
    if (n + 1 > half) {
      return num;
    }
    hash.set(num, n + 1);
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function (nums) {
   // 不使用hash表
   
 }
