/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 14:37:24                                                  *
 * @LastModifiedDate: 2022-04-19 15:49:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 二分查找头和二分查找尾
  let left = banarySearchLeft(nums, target);
  let right = banarySearchRight(nums, target);
  if (left <= right) {
    return [left, right];
  } else {
    return [-1, -1];
  }
};

const banarySearchLeft = (nums, target) => {
  // [left, right)
  let left = 0;
  let right = nums.length;
  let mid;
  // 二者不能相等
  while (left < right) {
    mid = (left + right) >> 1;
    if (nums[mid] >= target) {
      // 在右区域[left, mid)
      right = mid;
    } else {
      // 在左区域
      // [mid+1, right)
      left = mid + 1;
    }
  }
  return left;
};
const banarySearchRight = (nums, target) => {
  // [left, right)
  let left = 0;
  let right = nums.length;
  // 二者不能相等
  while (left < right) {
    mid = (left + right) >> 1;
    if (nums[mid] > target) {
      // 在右区域[left, mid)
      right = mid;
    } else {
      // 在左区域
      // [mid+1, right)
      left = mid + 1;
    }
  }
  return left - 1;
};

const nums = [1, 2, 4, 4, 5];

console.log(banarySearchLeft(nums, 3), banarySearchRight(nums, 3));

const binarySearch = (nums, target, isLeft = false) => {
  // 结合成一个
  let left = 0;
  let right = nums.length;
  let mid;
  // [left, right)
  while (left < right) {
    mid = (left + right) >> 1;
    // 在左区域[left, mid)
    if (nums[mid] > target || (isLeft && nums[mid] >= target)) {
      // 如果要求left，那么在相等的情况下也可以设置right
      right = mid;
    } else {
      // 在右区域[mid+1, right)
      left = mid + 1;
    }
  }
  return isLeft ? left : left - 1;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = binarySearch(nums, target, true);
  let right = binarySearch(nums, target);
  if (left <= right) {
    return [left, right];
  } else {
    return [-1, -1];
  }
};
