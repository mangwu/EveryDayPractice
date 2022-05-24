/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-24 11:13:23                                                  *
 * @LastModifiedDate: 2022-05-24 11:22:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。
// 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

//

// 进阶：你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
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
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 常数空间解法
  
};
