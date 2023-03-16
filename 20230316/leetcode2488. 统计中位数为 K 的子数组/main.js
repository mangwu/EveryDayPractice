/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-16 08:44:02                                                  *
 * @LastModifiedDate: 2023-03-16 13:48:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的数组 nums ，该数组由从 1 到 n 的 不同 整数组成。另给你一个正整数 k 。

// 统计并返回 nums 中的 中位数 等于 k 的非空子数组的数目。

// 注意：

// 数组的中位数是按 递增 顺序排列后位于 中间 的那个元素，如果数组长度为偶数，则中位数是位于中间靠 左 的那个元素。
// 例如，[2,3,1,4] 的中位数是 2 ，[8,4,3,5,1] 的中位数是 4 。
// 子数组是数组中的一个连续部分。
//
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  // 先找到k，再左右递进统计比k大的何比k小的数
  // 保证大于k的数等于比k小的数或等于比k小的数加1就是满足条件的子数组
  // 计算出左右两边的前缀和
  const index = nums.indexOf(k);
  const leftHash = new Map();
  leftHash.set(0, new Set([0]));
  const rightHash = new Map();
  rightHash.set(0, new Set([0]));
  let less = 0;
  let big = 0;
  for (let i = index - 1; i >= 0; i--) {
    if (nums[i] < k) {
      less++;
    } else {
      big++;
    }
    leftHash.has(less)
      ? leftHash.get(less).add(big)
      : leftHash.set(less, new Set([big]));
  }
  less = 0;
  big = 0;
  for (let i = index + 1; i < n; i++) {
    if (nums[i] < k) {
      less++;
    } else {
      big++;
    }
    rightHash.has(less)
      ? rightHash.get(less).add(big)
      : rightHash.set(less, new Set([big]));
  }
  let res = 0;
  for (const [key, value] of leftHash) {
    for (const [key2, value2] of rightHash) {
      // key + key2个小的，要有key+key2或key+key2+1个大的
      for (const item of value) {
        if (item < key + key2 + 2) {
          if (value2.has(key + key2 - item)) res++;
          if (value2.has(key + key2 + 1 - item)) res++;
        } else {
          break;
        }
      }
    }
  }
  return res;
};

// [8,5,2,1,3,4,7,6]
//
// [4]  [4,7]  [3,4,7] [3,4,7,6] [1,3,4,7,6] [5,2,1,3,4,7,6] [8,5,2,1,3,4,7] [8,5,2,1,3,4,7,6]

const randonArr = (n) => {
  const res = new Array(n).fill(0).map((v, i) => i + 1);
  let m = n;
  while (m) {
    const k1 = Math.floor(Math.random() * n);
    const k2 = Math.floor(Math.random() * n);
    [res[k1], res[k2]] = [res[k2], res[k1]];
    m--;
  }
  return res;
};

//
// [3, 2, 4, 1, 9, 8, 6, 10, 5, 7]
// [4]  [4,1,9] [4,1,9,8] [2,4,1,9,8] [2,4,1,9,8,6] [3,2,4,1,9,8,6] [3,2,4,1,9,8,6,10]
// Map(2) { 1 => Set(1) { 0 }, 2 => Set(1) { 0 } }
// Map(1) { 1 => Set(7) { 0, 1, 2, 3, 4, 5, 6 } }
// console.log(countSubarrays(randonArr(100000), 58562));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const hash = new Map(); // 前缀和保存个数
  hash.set(0, 1); // 默认有一个合值为0的
  const kIndex = nums.indexOf(k);
  let sum = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let sign = nums[i] < k ? -1 : nums[i] > k ? 1 : 0;
    sum += sign;
    if (i < kIndex) {
      hash.has(sum) ? hash.set(sum, hash.get(sum) + 1) : hash.set(sum, 1);
    } else {
      // sum - x = 0 或 sum - x = 1 x是前面减去的子数组前缀和
      res += hash.get(sum) || 0;
      res += hash.get(sum - 1) || 0;
    }
  }
  return res;
};
console.log(countSubarrays(randonArr(100000), 58562));
