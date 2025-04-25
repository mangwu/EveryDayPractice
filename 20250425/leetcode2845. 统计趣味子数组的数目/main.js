/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-25 23:18:20                                                  *
 * @LastModifiedDate: 2025-04-25 23:21:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
  const hash = new Map();
  let key = 0,
    res = 0;
  hash.set(0, 1);
  for (const num of nums) {
    if (num % modulo == k) {
      key++;
      key %= modulo;
    }
    res += hash.get((key + modulo - k) % modulo) || 0;
    hash.set(key, (hash.get(key) || 0) + 1);
  }
  return res;
};
