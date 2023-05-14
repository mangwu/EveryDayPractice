/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-13 22:38:52                                                  *
 * @LastModifiedDate: 2023-05-13 23:27:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 k 。每一次操作中，你可以选择一个数并将它乘 2 。

// 你最多可以进行 k 次操作，请你返回 nums[0] | nums[1] | ... | nums[n - 1] 的最大值。

// a | b 表示两个整数 a 和 b 的 按位或 运算。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (nums, k) {
  const max = Math.max.apply(null, nums);
  const pos = Math.floor(Math.log2(max));
  const limit = Math.pow(2, pos);
  let res = 0;
  const arr = new Array(pos + 1).fill(0);
  const mayArr = [];
  for (const num of nums) {
    if (num >= limit) {
      for (let i = 0; i <= pos; i++) {
        if (((num >> i) & 1) === 1) {
          arr[i]++;
        }
      }
      mayArr.push(num);
    } else {
      res = res | num;
    }
  }
  const l3 = res;
  for (const num of mayArr) {
    // 选择当前数字为目标
    for (let i = 0; i <= pos; i++) {
      if (((num >> i) & 1) === 1) {
        arr[i]--;
      }
    }
    const l1 = num * 2 ** k;
    const l2 = getNum(arr);
    res = Math.max(res, l3 | l1 | l2);
    for (let i = 0; i <= pos; i++) {
      if (((num >> i) & 1) === 1) {
        arr[i]++;
      }
    }
  }
  return res;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (nums, k) {
  let res = 0;
  const arr = new Array(32).fill(0);
  for (const num of nums) {
    for (let i = 0; i <= 31; i++) {
      if (((num >> i) & 1) === 1) {
        arr[i]++;
      }
    }
  }
  for (const num of nums) {
    // 选择当前数字为目标
    for (let i = 0; i <= 31; i++) {
      if (((num >> i) & 1) === 1) {
        arr[i]--;
      }
    }
    const l1 = num * 2 ** k;
    const l2 = getNum(arr);
    res = Math.max(res, Number(BigInt(l1) | BigInt(l2)));
    for (let i = 0; i <= 31; i++) {
      if (((num >> i) & 1) === 1) {
        arr[i]++;
      }
    }
  }
  return res;
};
var getNum = function (nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      res += Math.pow(2, i);
    }
  }
  return res;
};
