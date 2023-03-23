/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-23 08:44:26                                                  *
 * @LastModifiedDate: 2023-03-23 09:27:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 如果一个数列由至少两个元素组成，且每两个连续元素之间的差值都相同，那么这个序列就是 等差数列 。更正式地，数列 s 是等差数列，只需要满足：对于每个有效的 i ， s[i+1] - s[i] == s[1] - s[0] 都成立。

// 例如，下面这些都是 等差数列 ：

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// 下面的数列 不是等差数列 ：

// 1, 1, 2, 5, 7
// 给你一个由 n 个整数组成的数组 nums，和两个由 m 个整数组成的数组 l 和 r，后两个数组表示 m 组范围查询，其中第 i 个查询对应范围 [l[i], r[i]] 。所有数组的下标都是 从 0 开始 的。

// 返回 boolean 元素构成的答案列表 answer 。如果子数组 nums[l[i]], nums[l[i]+1], ... , nums[r[i]] 可以 重新排列 形成 等差数列 ，answer[i] 的值就是 true；否则answer[i] 的值就是 false 。

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const res = [];
  const n = l.length;
  for (let i = 0; i < n; i++) {
    const cur = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
    let dV = cur[1] - cur[0];
    res[i] = true;
    for (let j = 2; j < cur.length; j++) {
      if (cur[j] - cur[j - 1] !== dV) {
        res[i] = false;
        break;
      }
    }
  }
  return res;
};

// 4 6 5 9 3 7

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const res = [];
  const n = l.length;
  for (let i = 0; i < n; i++) {
    res[i] = true;
    // 利用等差性质进行比较
    let min = nums[l[i]];
    let max = nums[l[i]];
    for (let j = l[i] + 1; j <= r[i]; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
    }
    if (max === min) continue;
    if ((max - min) % (r[i] - l[i]) !== 0) {
      res[i] = false;
      continue;
    }
    const d = (max - min) / (r[i] - l[i]);
    const seen = new Array(r[i] - l[i] + 1).fill(false);
    for (let j = l[i]; j <= r[i]; j++) {
      // 计算位置
      if ((nums[j] - min) % d !== 0) {
        res[i] = false;
        break;
      }
      let idx = (nums[j] - min) / d;
      if (seen[idx]) {
        res[i] = false;
        break;
      }
      seen[idx] = true;
    }
  }
  return res;
};
