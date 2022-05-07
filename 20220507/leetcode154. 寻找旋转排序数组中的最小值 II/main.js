/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-07 10:33:14                                                  *
 * @LastModifiedDate: 2022-05-07 11:12:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
// 若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

// 你必须尽可能减少整个过程的操作步骤。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 非二分的不符合题意的解法
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function (nums) {
  // 二分解法
  let left = 0;
  let right = nums.length - 1;
  // [0,len]
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == nums[left] && nums[mid] == nums[right] && left < right) {
      left++;
      right--;
      continue;
    }
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
// [4,5,5,6,6,0,0,1,2,3,3]
// a b c
// a > b; b < c; a > c 左边
// a < b; b > c; a > c 右边
// a < b; b < c; a < c 左边
