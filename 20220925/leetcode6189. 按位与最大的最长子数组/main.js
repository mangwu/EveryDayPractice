/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 10:54:54                                                  *
 * @LastModifiedDate: 2022-09-25 11:22:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums 。

// 考虑 nums 中进行 按位与（bitwise AND）运算得到的值 最大 的 非空 子数组。

// 换句话说，令 k 是 nums 任意 子数组执行按位与运算所能得到的最大值。
// 那么，只需要考虑那些执行一次按位与运算后等于 k 的子数组。
// 返回满足要求的 最长 子数组的长度。

// 数组的按位与就是对数组中的所有数字进行按位与运算。

// 子数组 是数组中的一个连续元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const n = nums.length;
  let max = 0;
  let maxIdx = null;
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIdx = [i];
    } else if (nums[i] == max) {
      maxIdx.push(i);
    }
  }
  let ans = 1;
  const set = new Set();
  // 向两边扩展
  for (const idx of maxIdx) {
    let and = nums[idx];
    if (set.has(idx)) {
      continue;
    }
    set.add(idx);
    let left = idx - 1;
    let right = idx + 1;
    while (left >= 0 && (and & nums[left]) === and) {
      set.add(left);
      left--;
    }
    while (right < n && (and & nums[right]) === and) {
      set.add(right);
      right++;
    }
    ans = Math.max(right - left - 1, ans);
  }
  return ans;
};
