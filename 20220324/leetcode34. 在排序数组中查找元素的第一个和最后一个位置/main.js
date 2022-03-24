/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 15:34:13                                                  *
 * @LastModifiedDate: 2022-03-24 16:37:09                                      *
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
  // 使用内置
  let ans = [];
  ans[0] = nums.indexOf(target);
  ans[1] = nums.lastIndexOf(target);
};
// 时间复杂度O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 正常排序
  const len = nums.length;
  let ans = new Array.fill(-1);
  for (let i = 0; i < len; i++) {
    if (nums[i] == target) {
      if (ans[0] == -1) {
        ans[0] = i;
      }
      ans[1] = i;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [binarySearch(nums, target), binarySearch(nums, target, false)];
  // 二分查找
};
const binarySearch = (nums, target, isLeft = true) => {
  // [0, len - 1]
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      // 获取最左边的
      if (isLeft) {
        if (mid - 1 >= 0 && nums[mid - 1] == target) {
          // [left, mid - 1]
          right = mid - 1;
        } else {
          return mid;
        }
      } else {
        // 获取最右边的
        if (mid + 1 < nums.length && nums[mid + 1] == target) {
          // [mid+1, right]
          left = mid + 1;
        } else {
          return mid;
        }
      }
    } else if (nums[mid] > target) {
      // 在左边 [left ,mid - 1]
      right = mid - 1;
    } else {
      // 在右边 [mid + 1, right]
      left = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 1, 2, 5, 5, 6], 0, false));
