/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-21 21:12:09                                                  *
 * @LastModifiedDate: 2022-03-21 21:16:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const hash = [];
  for (const num of nums) {
    if (num > 0) {
      hash[num] = true;
    }
  }
  for (let i = 1; i < hash.length; i++) {
    if (!hash[i]) {
      return i;
    }
  }
  return hash.length;
};
