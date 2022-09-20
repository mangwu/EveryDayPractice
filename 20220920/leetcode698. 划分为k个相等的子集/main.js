/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-20 08:57:17                                                  *
 * @LastModifiedDate: 2022-09-20 10:47:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  // 求和
  if (k == 1) {
    return true;
  }
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  if (sum % k !== 0) {
    return false;
  }
  const n = nums.length;
  nums.sort((a, b) => b - a);
  if (k == n) {
    if (nums[0] === nums[n - 1]) {
      return true;
    }
    return false;
  }
  // 子集最短为1，最长为 n - k + 1
  let average = sum / k;
  if (nums[0] > average) {
    return false;
  }
  const hash = new Map();
  for (const num of nums) {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
  }
  console.log(Object.entries(hash));
  const dfs = (rest, pre) => {
    if (rest === 1) {
      return true;
    }
    if (pre === 0) {
      return dfs(rest - 1, average);
    }
    let ans = false;
    for (const [key, val] of [...hash]) {
      if (key <= pre && val > 0) {
        hash.set(key, val - 1);
        ans = ans || dfs(rest, pre - key);
        if (ans) {
          return true;
        }
        hash.set(key, val);
      }
    }
    return false;
  };
  return dfs(k, average);
};

// 3 2 2 1 3 4 2 2 1 3 4 4 5   36  => 4 9
// 54  441  3321 3222
// 3 5 2 2 4 4    20  => 4 => 5
// 5 32 无解

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  // 求和
  if (k == 1) {
    return true;
  }
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  if (sum % k !== 0) {
    return false;
  }
  const n = nums.length;
  nums.sort((a, b) => a - b);
  if (k == n) {
    if (nums[0] === nums[n - 1]) {
      return true;
    }
    return false;
  }
  // 子集最短为1，最长为 n - k + 1
  let average = sum / k;
  if (nums[n - 1] > average) {
    return false;
  }
  // 状态压缩，表示选择的情况
  const dp = new Array(1 << n).fill(false);
  // s是选择的个数  p是当前的集合的合
  const dfs = (s, p) => {
    if (s === 0) {
      return true;
    }
    // 已经查找过的情况
    if (dp[s]) {
      return false;
    }
    // 接下来进行查找，这种情况已被查找完
    dp[s] = true;
    for (let i = 0; i < n; i++) {
      // nums是递增的，nums[i]当前已不满足条件，之后也不会满足条件
      if (nums[i] + p > average) {
        break;
      }
      // 查看该数字是否未被选择，0就是被选择，1就是未被选择
      if (((s >> i) & 1) !== 0) {
        if (dfs(s ^ (1 << i), (p + nums[i]) % average)) {
          return true;
        }
      }
    }
    return false;
  };
  return dfs((1 << n) - 1, 0);
};


// 10 
// 1 2 3 4 5 6 7 8 9 10
//21 22 23 24 25 26 27 28 29 30
