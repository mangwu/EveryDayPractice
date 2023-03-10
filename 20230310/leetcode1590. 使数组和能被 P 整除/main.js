/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-10 08:53:24                                                  *
 * @LastModifiedDate: 2023-03-10 10:06:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。

// 请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。

// 子数组 定义为原数组中连续的一组元素。
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const sum = prefix[n];
  if (sum < p) return -1;
  if (p === 1) return 0;
  const remaider = sum % p;
  if (remaider === 0) return 0;
  // 计算每个和值的余数
  const remaiders = [];
  for (let i = 0; i <= n; i++) {
    remaiders[i] = prefix[i] % p;
  }
  const hash = new Map(); // 计算余数差值为remaider的组合
  let res = Infinity;
  for (let i = 0; i < n + 1; i++) {
    let cur = remaiders[i] - remaider + (remaiders[i] >= remaider ? 0 : p);
    if (hash.has(cur)) {
      const arr = hash.get(cur);
      const pre = arr[arr.length - 1];
      if (sum - (prefix[i] - prefix[pre]) >= p) {
        // 可行
        res = Math.min(res, i - pre);
      }
    }
    hash.has(remaiders[i])
      ? hash.get(remaiders[i]).push(i)
      : hash.set(remaiders[i], [i]);
  }
  return res === Infinity ? -1 : res;
};
// 3
// 2 7 10
// 2 1 1
// 2 5 3
