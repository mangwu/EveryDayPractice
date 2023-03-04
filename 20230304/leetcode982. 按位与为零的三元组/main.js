/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-04 16:45:40                                                  *
 * @LastModifiedDate: 2023-03-04 21:10:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，返回其中 按位与三元组 的数目。

// 按位与三元组 是由下标 (i, j, k) 组成的三元组，并满足下述全部条件：

// 0 <= i < nums.length
// 0 <= j < nums.length
// 0 <= k < nums.length
// nums[i] & nums[j] & nums[k] == 0 ，其中 & 表示按位与运算符。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  // 任何两个数字相与为0的组合，与其他任何数字相与都是0
  // 计算出相与为0的二元组合个数，最后乘以nums长度即可
  const n = nums.length;
  let res = 0;
  for (const num1 of nums) {
    for (const num2 of nums) {
      if ((num1 & num2) === 0) {
        res++;
      }
    }
  }
  return res * n;
};

// 上述解法错误
// 因为二元组合与不是0的也可能和其他非0数组合成0

/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  // 任何两个数字相与为0的组合，与其他任何数字相与都是0
  // 计算出相与为0的二元组合个数，最后乘以nums长度即可
  const n = nums.length;
  let res = 0;
  const hash = new Map();
  for (const num1 of nums) {
    for (const num2 of nums) {
      let cur = num1 & num2;
      hash.has(cur) ? hash.set(cur, hash.get(cur) + 1) : hash.set(cur, 1);
    }
  }
  if (hash.has(0)) {
    res += hash.get(0) * n;
    hash.delete(0);
  }
  for (const [key, value] of hash) {
    let cur = 0;
    for (const num of nums) {
      if ((key & num) === 0) {
        cur++;
      }
    }
    res += value * cur;
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  // 任何两个数字相与为0的组合，与其他任何数字相与都是0
  // 计算出相与为0的二元组合个数，最后乘以nums长度即可
  const n = nums.length;
  let res = 0;
  const hash = new Map();
  for (const num1 of nums) {
    for (const num2 of nums) {
      let cur = num1 & num2;
      hash.has(cur) ? hash.set(cur, hash.get(cur) + 1) : hash.set(cur, 1);
    }
  }
  if (hash.has(0)) {
    // 计算空集
    res += hash.get(0) * n;
    hash.delete(0);
  }
  const hash2 = new Map(); // 记录
  for (let num of nums) {
    num = num ^ 0xffff;
    if (hash2.has(num)) {
      res += hash2.get(num);
      continue;
    }
    let cur = 0;
    for (let x = num; x !== 0; x = (x - 1) & num) {
      cur += hash.has(x) ? hash.get(x) : 0;
    }
    res += cur;
    hash2.set(num, cur);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  // 先统计子集个数
  const n = nums.length;
  const m = new Array(1 << 16).fill(0);
  m[0] = n;
  for (let num of nums) {
    num ^= 0xffff;
    for (let i = num; i !== 0; i = (i - 1) & num) {
      m[i]++;
    }
  }
  let res = 0;
  for (const num1 of nums) {
    for (const num2 of nums) {
      res += m[num1 & num2];
    }
  }
  return res;
};
