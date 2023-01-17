/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-17 09:14:20                                                  *
 * @LastModifiedDate: 2023-01-17 11:09:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：

// 0 <= i < j < nums.length
// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// 请你返回好下标对的数目。由于结果可能会很大，请将结果对 109 + 7 取余 后返回。

//
const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  nums.sort((a, b) => a - b);
  const hash = new Map();
  for (const num of nums) {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
  }
  let same = 0;
  const visited = new Set();
  let res = 0;
  for (const num of nums) {
    if (num === revNum(num)) {
      same++;
    } else if (!visited.has(num)) {
      const origins = getOrigin(num);
      let sameOrigin = 0;
      for (const origin of origins) {
        if (hash.has(origin)) {
          visited.add(origin);
          sameOrigin += hash.get(origin);
        }
      }
      res += ((sameOrigin - 1) * sameOrigin) / 2;
      res %= MOD;
    }
  }
  res += ((same - 1) * same) / 2;
  res %= MOD;
  return res;
};
/**
 *
 * @param {number} num
 * @return {number}
 */
var revNum = function (num) {
  return parseInt(num.toString().split("").reverse().join(""));
};
/**
 *
 * @param {number} num
 * @return {number[]}
 */
var getOrigin = function (num) {
  // 获取同源数字
  let str = num.toString();
  let minReduce = parseInt(str[0]) - 1;
  let minAddition = 9 - parseInt(str[0]);
  for (const ch of str) {
    minReduce = Math.min(minReduce, parseInt(ch));
    minAddition = Math.min(minAddition, 9 - parseInt(ch));
  }
  const res = [num];
  let variation = parseInt("1".repeat(str.length));
  let add = num + variation;
  let reduce = num - variation;
  for (let i = 0; i < minAddition; i++) {
    res.push(add);
    add += variation;
  }
  for (let i = 0; i < minReduce; i++) {
    res.push(reduce);
    reduce -= variation;
  }
  return res;
};

// [13,10,35,24,76]
//  31  1 53 42 67
// 0 1 2 3 4 5 6 7 8 9 和所有数位相同的数字都可以组合

// 10 21 32 43 54 65 76 87 98
// 20 31 42 53 64 75 86 97
// 30 41 52 63 74 85 96
// 40 51 62 73 84 95
// 50 61 72 83 94
// 60 71 82 93
// 70 81 92
// 80 91
// 90

// 11 22 33 44 55 66 77 88 99
// 12 23 34 45 56 67 78 89
// 13 24 35 46 57 68 79
// 14 25 36 47 58 69
// 15 26 37 48 59
// 16 27 38 49
// 17 28 39
// 18 29
// 19

// 分类讨论
// 1. 将非rev(num)和num相同的拉出去单独讨论
// 2. 同位数数字
//

// 100 211
// 109

// [
//   21, 22, 23, 32, 32, 33, 43, 45, 54, 55, 58, 62, 64, 65, 69, 73, 78, 80, 81,
//   86, 89, 89, 95, 98,
// ];

// [
//   12, 14, 23, 24, 25, 32, 41, 52, 53, 58, 58, 64, 69, 85, 123, 200, 256, 311,
//   366, 477, 526, 544, 588, 856, 1223, 2354, 3584, 9654,
// ];

// for (let i = 1; i <= 10000; i++) {
//   if (i + 542 === revNum(i) + 2450) {
//     console.log(i);
//   }
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  nums.sort((a, b) => a - b);
  const revNums = [];
  for (const num of nums) {
    revNums.push(revNum(num));
  }
  const visited = new Set();
  const n = nums.length;
  let res = 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === revNums[i]) {
      s++;
      continue;
    }
    if (visited.has(nums[i])) {
      continue;
    }
    visited.add(nums[i]);
    let same = 1;
    for (let j = i + 1; j < n; j++) {
      if (nums[j].toString().length > nums[i].toString().length) {
        break;
      }
      if (revNums[j] + nums[i] === nums[j] + revNums[i]) {
        res += same;
        res %= MOD;
        same++;
        visited.add(nums[j]);
      }
    }
  }
  res += ((s - 1) * s) / 2;
  res %= MOD;
  return res;
};

[42644624, 152727101, 293999243, 352171103, 413370302, 442454244];
[42644624, 101727251, 342999392, 301171253, 203073314, 442454244];
