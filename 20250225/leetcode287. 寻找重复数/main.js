/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 14:28:02                                                  *
 * @LastModifiedDate: 2025-02-25 15:36:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 二分查找
  // 计算数组中有多少个元素小于等于i
  const n = nums.length;
  let left = 1;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cnt = 0; // 计算小于等于mid的数量
    for (const num of nums) {
      if (num <= mid) cnt++;
    }

    if (cnt <= mid) {
      // 重复数字可以更大
      left = mid + 1;
    } else {
      // 重复数字可以更小
      right = mid - 1;
    }
  }
  // left是第一个cnt>left的情况
  return left;
};

// 3 1 4 2 5 2

// 3,1,2,2,4,5
// 0 1 2 3 4 5

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
