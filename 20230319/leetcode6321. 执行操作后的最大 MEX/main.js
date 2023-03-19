/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-19 11:16:41                                                  *
 * @LastModifiedDate: 2023-03-19 11:28:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 value 。

// 在一步操作中，你可以对 nums 中的任一元素加上或减去 value 。

// 例如，如果 nums = [1,2,3] 且 value = 2 ，你可以选择 nums[0] 减去 value ，得到 nums = [-1,2,3] 。
// 数组的 MEX (minimum excluded) 是指其中数组中缺失的最小非负整数。

// 例如，[-1,2,3] 的 MEX 是 0 ，而 [1,0,3] 的 MEX 是 2 。
// 返回在执行上述操作 任意次 后，nums 的最大 MEX 。

/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  if (value === 1) return nums.length;
  const hash = new Map();
  for (let num of nums) {
    if (num < 0) {
      num = (num % value) + value;
    }
    let cur = num % value;
    hash.has(cur) ? hash.set(cur, hash.get(cur) + 1) : hash.set(cur, 1);
  }
  const arr = new Array(value).fill(0);
  for (const [key, value] of hash) {
    arr[key] = value;
  }
  let minValue = Infinity;
  let index = 0;
  for (let i = 0; i < value; i++) {
    if (arr[i] === 0) return i;
    if (arr[i] < minValue) {
      minValue = arr[i];
      index = i;
    }
  }
  return minValue * value + index - 1;
};
