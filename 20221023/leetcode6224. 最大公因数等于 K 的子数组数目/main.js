/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-23 10:36:28                                                  *
 * @LastModifiedDate: 2022-10-23 11:09:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 nums 的子数组中元素的最大公因数等于 k 的子数组数目。

// 子数组 是数组中一个连续的非空序列。

// 数组的最大公因数 是能整除数组中所有元素的最大整数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function (nums, k) {
  const n = nums.length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] === k) {
      arr.push(i);
    }
  }
  for (const idx of arr) {
  }
  let left = 0;
  let right = 0;
  while (right < n) {
    if (nums[right] % k !== 0) {
      right++;
      left = right;
      continue;
    }
  }
};

var getValidNum = function () {};

var greatestCommonFactor = function (left, right, nums, k) {};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function (nums, k) {
  const n = nums.length;
  const arr = [];
  for (const num of nums) {
    arr.push(getFactors(num));
  }
};

var getFactors = function (num) {
  const sqrtNum = Math.sqrt(num);
  const ans = [];
  for (let i = 1; i <= sqrtNum; i++) {
    if (num % i == 0) {
      if (num / i !== i) {
        ans.push(i);
        ans.push(num / i);
      } else {
        ans.push(i);
      }
    }
  }
  return ans.sort((a, b) => a - b);
};
