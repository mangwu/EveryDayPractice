/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 16:23:52                                                  *
 * @LastModifiedDate: 2022-04-19 16:54:03                                      *
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

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，
// 否则返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // nums 中的每个值都 独一无二
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  // [left, right]
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == target) {
      return mid;
    }
    // 现在有两种情况，一种是区域左边是递增区间，一种是区域右边是递增区间
    if (target > nums[mid]) {
      // 目标值大于中点值
      // 判断区间的情况
      if (nums[mid] > nums[len - 1]) {
        // 区间左边是递增区间, 右边是非递增区间
        // target在右边
        // [mid+1, right]
        left = mid + 1;
      } else {
        // 区间右边是递增区间，左边是非递增区间
        // 比较target与最右边值大小
        if (target > nums[len - 1]) {
          // 在左边区间
          right = mid - 1;
        } else {
          // 在右边区间
          left = mid + 1;
        }
      }
    } else {
      // 中点值比target大
      // 判断区间的情况
      if (nums[mid] > nums[len - 1]) {
        // 区间右边是递增区间，左边是非递增区间
        // 比较target与最右边值大小
        if (target > nums[len - 1]) {
          // 在左边区间
          right = mid - 1;
        } else {
          // 在右边区间
          left = mid + 1;
        }
      } else {
        // 只可能在左边区间
        right = mid - 1;
      }
    }
  }
  return -1;
};

// [4,5,6,7,8,0,1,2] => 区域左边是递增区间
// [6,7,8,0,1,2,4,5] => 区域右边是递增区间
