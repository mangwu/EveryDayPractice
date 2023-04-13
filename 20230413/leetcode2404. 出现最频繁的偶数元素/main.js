/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-13 09:01:25                                                  *
 * @LastModifiedDate: 2023-04-13 09:05:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，返回出现最频繁的偶数元素。

// 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const hash = new Map();
  let res = Infinity;
  let k = 0;
  for (const num of nums) {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
    if (num % 2 === 0) {
      const m = hash.get(num);
      if (m > k) {
        res = num;
        k = m;
      } else if (m === k) {
        res = Math.min(res, num);
      }
    }
  }
  return k === 0 ? -1 : res;
};
