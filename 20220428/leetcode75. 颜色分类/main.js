/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-28 20:42:15                                                  *
 * @LastModifiedDate: 2022-04-28 20:54:36                                      *
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
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length;
  let left = 0;
  let mid = n - 1;
  let right = n - 1;
  while (left < right && mid > left) {
    if (nums[left] == 2) {
      while (nums[right] !== 2 && right > left) {
        right--;
      }
      if (nums[left] > nums[right]) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      mid = right;
    }
    if (nums[left] == 1) {
      while (nums[mid] !== 1 || (nums[mid] !== 2 && mid > left)) {
        mid--;
      }
      if (nums[left] > nums[mid]) {
        [nums[left], nums[mid]] = [nums[mid], nums[left]];
      }
    }
    left++;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  for (const num of nums) {
    switch (num) {
      case 0:
        cnt0++;
      case 1:
        cnt1++;
      case 2:
        cnt2++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < cnt0) {
      nums[i] = 0;
      continue;
    }
    if (i < cnt1) {
      nums[i] = 1;
      continue;
    }
    nums[i] = 2;
  }
};
