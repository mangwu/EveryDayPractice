/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-08 22:35:40                                                  *
 * @LastModifiedDate: 2024-09-08 23:21:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 找到最靠近0的元素位置
  const n = nums.length;
  let min = Infinity;
  let mid = 0;
  for (let i = 0; i < n; i++) {
    const cur = Math.abs(nums[i]);
    if (cur < min) {
      min = cur;
      mid = i;
    }
  }
  const arr = [Math.pow(min, 2)];
  let left = mid - 1;
  let right = mid + 1;
  while (left >= 0 || right < n) {
    if (left < 0) {
      arr.push(Math.pow(nums[right++], 2));
      continue;
    }
    if (right >= n) {
      arr.push(Math.pow(nums[left--], 2));
      continue;
    }
    const leftNum = Math.pow(nums[left], 2);
    const rightNum = Math.pow(nums[right], 2);
    if (leftNum < rightNum) {
      arr.push(leftNum);
      left--;
    } else {
      arr.push(rightNum);
      right++;
    }
  }
  return arr;
};
