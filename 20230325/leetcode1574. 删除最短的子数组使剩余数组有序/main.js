/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-25 13:24:16                                                  *
 * @LastModifiedDate: 2023-03-25 16:42:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr ，请你删除一个子数组（可以为空），使得 arr 中剩下的元素是 非递减 的。

// 一个子数组指的是原数组中连续的一个子序列。

// 请你返回满足题目要求的最短子数组的长度。

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  if (n === 1) return 0;
  let left = 0;
  let right = arr.length - 2;
  for (; right >= 0; right--) {
    if (arr[right] > arr[right + 1]) {
      break;
    }
  }
  right++;
  let res = right;
  if (res === 0) return 0;
  for (; left < n; left++) {
    if (left !== 0 && arr[left] < arr[left - 1]) {
      break;
    }
    while (right < n && arr[right] < arr[left]) {
      right++;
    }
    res = Math.min(res, right - left - 1);
  }
  return res;
};
