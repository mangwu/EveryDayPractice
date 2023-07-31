/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-30 10:33:05                                                  *
 * @LastModifiedDate: 2023-07-30 11:10:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 正 整数组成的数组 nums 。

// 如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：

// 子数组中 不同 元素的数目等于整个数组不同元素的数目。
// 返回数组中 完全子数组 的数目。

// 子数组 是数组中的一个连续非空序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const set = new Set(nums);
  const n = nums.length;
  if (set.size === n) return 1;
  const win = new Map();
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < n) {
    if (win.has(nums[right])) {
      win.set(nums[right], win.get(nums[right]) + 1);
    } else {
      win.set(nums[right], 1);
      if (win.size === set.size) {
        // 找到一个子数组
        res += n - right;
        while (left <= right) {
          if (win.get(nums[left]) === 1) {
            win.delete(nums[left]);
            left++;
            break;
          } else {
            res += n - right;
            win.set(nums[left], win.get(nums[left]) - 1);
          }
          left++;
        }
      }
    }
    right++;
  }
  return res;
};

// 1 3 1 2 2
