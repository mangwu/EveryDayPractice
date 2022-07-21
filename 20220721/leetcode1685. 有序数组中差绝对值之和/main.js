/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-21 10:47:37                                                  *
 * @LastModifiedDate: 2022-07-21 11:06:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let curSum = 0;
  const n = nums.length;
  const res = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  for (let i = 0; i < n; i++) {
    res[i] =
      i * nums[i] - curSum + (sum - curSum - nums[i]) - (n - i - 1) * nums[i];
    curSum += nums[i];
  }
  return res;
};

// a0 a1 a2 a3 a4 ... an-1

// r[0] = a1 - a0 + a2 - a0 + .... + an-1 -a0 = sum - (n-1)a0 - a0
// r[1] = a1 - a0 + a2 - a1 + .... + an-1 -a1 = sum - (n-2)a1 - a0
// r[2] = a2 - a0 + a2 - a1 + a3 - a2 + ... + an-1 - a2 = sum - (n-3)a2 - a1 - a0

// r[i] = i * ai - curSum + rightSum - (n-i-1)ai

// r[i] = ai - a0 + ai - a2 + ... + a[i] - a[i-1] +  a[i] - a[i] + a[i+1] - a[i] + ... a[n-1] - a[i];

// r[i] = i * ai - curSum + rightSum - (n - i - 1)ai
// r[i] = (2i + 1 -n)ai + rightSum - curSum
// r[i] = (2i + 1 - n)ai + sum - curSum - ai - curSum
// r[i] = (2i - n)ai + sum - 2curSum
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let curSum = 0;
  const n = nums.length;
  const res = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  for (let i = 0; i < n; i++) {
    res[i] = (2 * i - n) * nums[i] + sum - 2 * curSum;
    curSum += nums[i];
  }
  return res;
};
