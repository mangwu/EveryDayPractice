/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 16:46:36                                                  *
 * @LastModifiedDate: 2022-03-24 22:39:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 使用index函数
  return nums.indexOf(target);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 暴力遍历
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分查找
  const len = nums.length;
  // [0, len - 1]
  let left = 0;
  let right = len * 2 - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid % len] == target) {
      return mid % len;
    } else if (nums[mid % len] > target) {
      // 在左边 [mid + 1, right]
      left = mid + 1;
    } else {
      // 在右边 [left, mid - 1]
      right = mid - 1;
    }
  }
  return -1;
};

// [4,5,6,7,1,2, 4, 5, 6, 7, 1 , 2]
// 上面是错误解答
// 如果要使用二分查找，对一般的数组进行查找即可，因为一定有一半的数组是有序的
// 如果target的大小在有序数组额范围中，可以直接进行查找得出结果
// 如果不在有序数组的范围中，可以将另一个不是有序数组的的数组再次进行二分，继续查找即可
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  if (len == 0) {
    return -1;
  }
  if (len == 1) {
    return target == nums[0] ? 0 : -1;
  }
  // [0, len-1]
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      // 左半部分是否有序
      if (nums[0] <= target && target < nums[mid]) {
        // 有序且在该范围内 [left, mid - 1]
        right = mid - 1;
      } else {
        // 不在范围内 [mid+1, right]
        left = mid + 1;
      }
    } else {
      // 右半部分为有序的
      if (nums[mid] < target && target <= nums[len - 1]) {
        // 在范围内 [mid+1, right]
        left = mid + 1;
      } else {
        // 不在范围内 [left, mid - 1]
        right = mid - 1;
      }
    }
  }
  return -1;
};
