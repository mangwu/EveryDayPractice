/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 08:50:04                                                  *
 * @LastModifiedDate: 2022-02-09 09:18:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。

// |x| 的值定义为：

// 如果 x >= 0 ，那么值为 x 。
// 如果 x < 0 ，那么值为 -x 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  // 暴力解法 O(n^2) 遍历两遍nums，求差值即可

  let ans = 0;
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        console.log(i, j);
        ans++;
      }
    }
  }
  return ans;
};

// countKDifference([1,2,2,1], 1);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference2 = function (nums, k) {
  // hash表法
  // 如果保存了nums中每个值的个数的hash
  // 那么只要判断nums[i] ± k是否存在于hash就能知道和nums[i]可以成功配对的个数
  // 遍历一遍相加除以2即可
  // 但是现在不知道nums对应的hash表示
  // 可以用先遍历2遍，而是在生成hash的同时进行nums[i]±k的判断
  // 这样反而不需要额外除以2，每个配对都会只有一次

  let ans = 0;
  const hash = new Map();

  for (const num of nums) {
    const numAdd = num + k;
    const numSub = num - k;
    if (hash.has(numAdd)) {
      ans = ans + hash.get(numAdd);
    }
    if (hash.has(numSub)) {
      ans = ans + hash.get(numSub);
    }
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference3 = function (nums, k) {
  // hash表法
  // 使用数组作为hash表
  // 因为已知nums中值的范围

  let ans = 0;
  const hash = new Array(101).fill(0);

  for (const num of nums) {
    if (num + k < 101) {
      ans += hash[num + k];
    }
    if (num - k > 0) {
      ans += hash[num - k];
    }
    hash[num]++;
  }
  return ans;
};
