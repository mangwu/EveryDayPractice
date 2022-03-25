/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 09:44:15                                                  *
 * @LastModifiedDate: 2022-03-25 13:41:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组
// 。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
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
  // 旋转次数所在位置就是最小值
  // 使用二分查找，如果一个数的左值比它大，就是结果
  // [left, len - 1]
  const len = nums.length;
  if (len == 1) {
    return nums[0];
  }
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // 最小值左边的值比它大或者没有左边的值
    if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    // 判断数组是否是有序的（旋转成了原样子）
    if (nums[mid] >= nums[0] && nums[mid] <= nums[len - 1]) {
      // 左边是有序的，右边也是有序的，返回第一个值
      return nums[0];
    } else if (nums[mid] >= nums[0]) {
      // 左边有序，右边不是有序的，最小值在右边
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 另一种二分查找，不比较相邻元素，而是使用left作为最终索引作为结果，
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  // 判断退出的最终条件为left === right ,保证最终结果索引就是left
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      // 中间值小于右边值，说明右边有序，最小值在左边
      // 不赋值mid - 1的原因在于，当前的mid可能就是最小值
      right = mid;
    } else {
      // 中间值大于右边值，说明左边有序，最小值在右边
      left = mid + 1;
    }
  }
  return nums[left];
};
