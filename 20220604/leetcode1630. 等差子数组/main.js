/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-04 20:37:42                                                  *
 * @LastModifiedDate: 2022-06-04 21:03:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const n = l.length;
  const ans = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    ans[i] = isArithmetic(nums.slice(l[i], r[i] + 1));
  }
  return ans;
};

const isArithmetic = (arr) => {
  if (arr.length == 2) {
    return true;
  }
  arr.sort((a, b) => a - b);
  let sub = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== sub) {
      return false;
    }
  }
  return true;
};
