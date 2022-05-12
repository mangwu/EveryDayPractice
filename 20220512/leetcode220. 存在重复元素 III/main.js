/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-12 11:27:21                                                  *
 * @LastModifiedDate: 2022-05-12 14:25:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和两个整数 k 和 t 。
// 请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

// 如果存在则返回 true，不存在返回 false。

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length;
  // i 和 j不能相等
  if (k == 0) {
    return false;
  }
  // 滑动窗口
  const win = [nums[0]];
  for (let i = 1; i <= k && i < n; i++) {
    // 将nums[i]插入到win
    // 二分查找O(logk)
    // [0,len)
    let left = 0;
    let right = win.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 遇到符合条件相等的就直接返回结果
      if (Math.abs(nums[i] - win[mid]) <= t) {
        return true;
      } else if (nums[i] > win[mid]) {
        // 在右边区域 [mid+1, right)
        left = mid + 1;
      } else {
        // 在左边区域 [left, mid)
        right = mid;
      }
    }
    // 插入到win中
    win.splice(left, 0, nums[i]);
  }
  // 开始移动滑动窗口
  for (let i = k + 1; i < n; i++) {
    // 删除第i - k - 1的元素
    // 使用二分查找的方式删除
    let left = 0;
    let right = win.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 遇到符合条件的就进行删除
      if (win[mid] == nums[i - k - 1]) {
        // 删除mid
        win.splice(mid, 1);
        break;
      } else if (nums[i - k - 1] > win[mid]) {
        // 在区域右边
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 复刻上一个循环中的情况
    // [0,len)
    left = 0;
    right = win.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 遇到符合条件相等的就直接返回结果
      if (Math.abs(nums[i] - win[mid]) <= t) {
        return true;
      } else if (nums[i] > win[mid]) {
        // 在右边区域 [mid+1, right)
        left = mid + 1;
      } else {
        // 在左边区域 [left, mid)
        right = mid;
      }
    }
    // 插入到win中
    win.splice(left, 0, nums[i]);
  }
  return false;
};
