/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-06 20:58:29                                                  *
 * @LastModifiedDate: 2025-01-06 21:03:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。

// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

// 返回好数对的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let res = 0;
  // 暴力解法
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) res++;
    }
  }
  return res;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let res = 0;
  // 维护一个hash，记录相同数的数量
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) res += hash.get(num);
    hash.set(num, (hash.get(num) || 0) + 1);
  }
  return res;
};
