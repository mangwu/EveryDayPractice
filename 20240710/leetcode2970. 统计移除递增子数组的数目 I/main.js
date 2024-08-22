/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-10 08:47:59                                                  *
 * @LastModifiedDate: 2024-07-10 09:17:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 正 整数数组 nums 。

// 如果 nums 的一个子数组满足：移除这个子数组后剩余元素 严格递增 ，那么我们称这个子数组为 移除递增 子数组。比方说，[5, 3, 4, 6, 7] 中的 [3, 4] 是一个移除递增子数组，因为移除该子数组后，[5, 3, 4, 6, 7] 变为 [5, 6, 7] ，是严格递增的。

// 请你返回 nums 中 移除递增 子数组的总数目。

// 注意 ，剩余元素为空的数组也视为是递增的。

// 子数组 指的是一个数组中一段连续的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      // 移除[i,j]
      const arr = nums.slice();
      arr.splice(i, j);
      if (isStricInc(arr)) {
        ans++;
      }
    }
  }
  return ans;
};

/**
 * @description 是否严格递增
 * @param {[]} arr
 * @returns {boolean}
 */
function isStricInc(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}
