/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-17 11:27:30                                                  *
 * @LastModifiedDate: 2022-07-17 12:00:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数数组 nums 和 numsDivide 。你可以从 nums 中删除任意数目的元素。

// 请你返回使 nums 中 最小 元素可以整除 numsDivide 中所有元素的 最少 删除次数。
// 如果无法得到这样的元素，返回 -1 。

// 如果 y % x == 0 ，那么我们说整数 x 整除 y 。

/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function (nums, numsDivide) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  numsDivide.sort((a, b) => a - b);
  if (numsDivide[0] < nums[0]) {
    return -1;
  }
  if (nums[0] == 1) {
    return 0;
  }
  // 求numsDivide中的公约数
  const res = getCommonDivisor(numsDivide);
  if (res.length == 0) {
    return -1;
  }
  res.sort((a, b) => a - b);
  for (const r of res) {
    let k = nums.indexOf(r);
    if (k !== -1) {
      return n - k;
    }
  }
  return -1;
};

var getCommonDivisor = (nums) => {
  let res = getSingleCommonDivisor(nums[0]);
  res = res.filter((v) => {
    for (const num of nums) {
      if (num % v !== 0) {
        return false;
      }
    }
    return true;
  });
  return res;
};
var getSingleCommonDivisor = (num) => {
  if (num <= 3) {
    return [num];
  }
  const k = Math.sqrt(num);
  let ans = [];
  for (let i = 2; i <= k; i++) {
    if (num % i == 0) {
      if (num / i !== i) {
        ans.push(i);
        ans.push(num / i);
      } else {
        ans.push(i);
      }
    }
  }
  ans.push(num);
  return ans;
};
var isPrime = (num) => {
  if (num <= 3) {
    return true;
  }
  const k = Math.sqrt(num);
  for (let i = 2; i <= k; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
