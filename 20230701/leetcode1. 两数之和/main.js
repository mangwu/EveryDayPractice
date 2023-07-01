/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-01 22:37:11                                                  *
 * @LastModifiedDate: 2023-07-01 22:39:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const cur = nums[i];
    const other = target - cur;
    if (hash.has(other)) {
      return [hash.get(other), i];
    }
    hash.set(cur, i);
  }
};
