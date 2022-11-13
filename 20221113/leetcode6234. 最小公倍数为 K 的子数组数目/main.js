/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-13 16:26:58                                                  *
 * @LastModifiedDate: 2022-11-13 19:56:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 nums 的 子数组 中满足 元素最小公倍数为 k 的子数组数目。

// 子数组 是数组中一个连续非空的元素序列。

// 数组的最小公倍数 是可被所有数组元素整除的最小正整数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  let prod = 1;
  let left = 0;
  const target = getFactor(k);
  let right = 0;
  let ans = 0;
  const n = nums.length;
  // 总数
  const hash = new Map();
  // 最大值
  const maxHash = new Map();
  const queue = [];
  let idx = 0;
  while (right < n) {
    const factors = getFactor(nums[right]);
    for (const [key, value] of factors) {
      if (hash.has(key)) {
        hash.set(key, hash.get(key) + value);
        let curSet = maxHash.get(key);
        
      } else {
      }
    }
  }
};

const getFactor = function (num) {
  if (num == 1) {
    return [1];
  }
  if (isPrime(num)) {
    return [num];
  }
  const res = new Map();
  let i = 2;
  while (num > 1) {
    while (num % i == 0) {
      res.has(i) ? res.set(i, res.get(i) + 1) : res.set(i, 1);
      num /= i;
    }
    i++;
  }
  return res;
};

const isPrime = function (num) {
  if (num < 4) {
    return true;
  }
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

// 8 12
// 2 2 2 | 2 2 3
