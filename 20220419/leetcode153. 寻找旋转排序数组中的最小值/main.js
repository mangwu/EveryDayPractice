/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 22:05:46                                                  *
 * @LastModifiedDate: 2022-04-19 23:01:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 这一题和寻找旋转排序中的目标值一样
  const len = nums.length;
  if (len == 1) {
    return nums[0];
  }
  if (len == 2) {
    return Math.min.apply(null, nums);
  }
  let left = 0;
  let right = len - 1;
  let mid;
  while (left <= right) {
    mid = (left + right) >> 1;
    // 最小值特性，左边比其大，右边比起大(计算边界值时将其看作循环数组)
    if (
      nums[mid] < nums[(mid + 1 + len) % len] &&
      nums[mid] < nums[(mid - 1 + len) % len]
    ) {
      return nums[mid];
    }
    // 通过中间值比较左边的值判断最小值的区间
    if (nums[0] <= nums[mid] && nums[mid] > nums[len - 1]) {
      // 最小值在右区间
      left = mid + 1;
    } else {
      // 最小值在左区间
      right = mid - 1;
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    // 不会存在mid == len - 1的情况
    // 因为当最小值为nums[len-1]
    // 此时left = len - 1 = right 退出了循环，不用判断了
    if (nums[mid] < nums[len - 1]) {
      // 忽略右区间
      right = mid;
    } else {
      // 在右区间
      left = mid + 1;
    }
  }
  return nums[left];
};
