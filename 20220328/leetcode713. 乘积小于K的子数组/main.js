/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-28 16:00:00                                                  *
 * @LastModifiedDate: 2022-03-28 17:28:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数数组 nums和整数 k 。

// 请找出该数组内乘积小于 k 的连续的子数组的个数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // 子数组是连续的，所以可以是要滑动窗口的解法
  if (k <= 1) {
    return 0;
  }
  let win = [];
  let product = 1;
  let ans = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    product *= nums[i];
    win.push(nums[i]);

    if (product < k) {
      // 加上的就是包含当前元素的子数组
      ans += win.length;
    } else {
      // 出栈，直到数小于k
      let idx = 0;
      while (product >= k) {
        product /= win[idx];
        idx++;
      }
      win = win.slice(idx);
      // 注意这个时候也要加上包含当前元素的子数组（如果当前元素也被剔除，加上0不影响结果）
      ans += win.length;
    }
  }
  return ans;
};

// 使用双指针简化代码
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // 因为每次回退时只是除以窗口的首位数，可以使用一个指针记录窗口的头部
  if (k <= 1) return 0;
  let product = 1;
  const len = nums.length;
  let left = 0;
  let right = 0;
  let ans = 0;
  for (; right < len; right++) {
    product *= nums[right];
    if (product < k) {
      ans += right - left + 1;
    } else {
      while (product >= k) {
        product /= nums[left];
        left++;
      }
      ans += right - left + 1;
    }
  }
  return ans;
};
