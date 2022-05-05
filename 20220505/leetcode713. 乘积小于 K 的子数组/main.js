/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-05 17:43:58                                                  *
 * @LastModifiedDate: 2022-05-05 18:24:42                                      *
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
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let prod = 1;
  let left = 0;
  let right = 0;
  let ans = 0;
  const len = nums.length;
  while (right < len) {
    prod *= nums[right];
    right++;
    while (prod >= k && left < right) {
      prod = prod / nums[left];
      left++;
    }
    ans += right - left;
  }
  return ans;
};
