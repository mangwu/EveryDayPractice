/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-23 23:03:35                                                  *
 * @LastModifiedDate: 2023-12-23 23:34:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  // 暴力解法
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const copy = nums.slice();
      copy.splice(i, j - i + 1);
      if (isIncremovable(copy)) count++;
    }
  }
  return count;
};

function isIncremovable(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}

const random = require("../../publicFunc/random/random.js");

console.log(incremovableSubarrayCount(new Array(100).fill(0).map((v, i) => i + 1)));
