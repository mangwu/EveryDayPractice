/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-26 19:31:43                                                  *
 * @LastModifiedDate: 2022-02-26 20:13:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，
// 如果目标值存在返回下标，否则返回 -1。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 简单查找,O(n)
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
  // 二分查找,查找区域[0, len)
  let left = 0;
  let right = nums.length;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      // 比目标大，说明在左边，选择区域[left, mid)
      right = mid;
    } else {
      // 比目标小，说明在右边，选择区域[mid+1, right);
      left = mid + 1;
    }
  }
  return -1;
};
console.log(search2([-1,0,3,5,9,12], 2));
