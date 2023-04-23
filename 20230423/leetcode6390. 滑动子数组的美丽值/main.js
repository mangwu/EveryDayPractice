/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-23 10:36:57                                                  *
 * @LastModifiedDate: 2023-04-23 11:04:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums ，请你求出每个长度为 k 的子数组的 美丽值 。

// 一个子数组的 美丽值 定义为：如果子数组中第 x 小整数 是 负数 ，那么美丽值为第 x 小的数，否则美丽值为 0 。

// 请你返回一个包含 n - k + 1 个整数的数组，依次 表示数组中从第一个下标开始，每个长度为 k 的子数组的 美丽值 。

// 子数组指的是数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function (nums, k, x) {
  const ans = [];
  const n = nums.length;
  const hash = new Map();
  for (let i = 0; i < k; i++) {
    hash.has(nums[i])
      ? hash.set(nums[i], hash.get(nums[i]) + 1)
      : hash.set(nums[i], 1);
  }
  let left = 0;
  let right = k;
  const cur = getSecondMin(hash, x);
  ans.push(cur < 0 ? cur : 0);
  while (right < n) {
    hash.has(nums[right])
      ? hash.set(nums[right], hash.get(nums[right]) + 1)
      : hash.set(nums[right], 1);
    const delEle = hash.get(nums[left]);
    if (delEle === 1) {
      hash.delete(nums[left]);
    } else {
      hash.set(nums[left], delEle - 1);
    }
    const cur = getSecondMin(hash, x);
    ans.push(cur < 0 ? cur : 0);
    right++;
    left++;
  }
  return ans;
};

const getSecondMin = (hash, x) => {
  const arr = [];
  for (const [key, value] of hash) {
    arr.push({ value: key, nums: value });
  }
  arr.sort((a, b) => a.value - b.value);
  let n = 0;
  for (const { nums, value } of arr) {
    n += nums;
    if (n >= x) return value;
  }
};
