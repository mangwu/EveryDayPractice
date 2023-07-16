/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-16 11:02:26                                                  *
 * @LastModifiedDate: 2023-07-16 11:09:34                                      *
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
 * @return {number}
 */
var minimumIndex = function (nums) {
  const hash = new Map();
  const n = nums.length;
  let maxNum = -1;
  for (const num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
    if (hash.get(num) * 2 > n) {
      maxNum = num;
    }
  }
  const maxNums = hash.get(maxNum);
  let left = 0;
  let right = maxNums;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === maxNum) {
      left++;
      right--;
    }
    if (left * 2 > i + 1 && right * 2 > n - i - 1) {
      return i;
    }
  }
  return -1;
};
