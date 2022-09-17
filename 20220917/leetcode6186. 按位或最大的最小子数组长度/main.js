/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-17 23:21:04                                                  *
 * @LastModifiedDate: 2022-09-18 00:23:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 下标从 0 开始的数组 nums ，数组中所有数字均为非负整数。
// 对于 0 到 n - 1 之间的每一个下标 i ，你需要找出 nums 中一个 最小 非空子数组，
// 它的起始位置为 i （包含这个位置），同时有 最大 的 按位或运算值 。

// 换言之，令 Bij 表示子数组 nums[i...j] 的按位或运算的结果，
// 你需要找到一个起始位置为 i 的最小子数组，这个子数组的按位或运算的结果等于 max(Bik) ，其中 i <= k <= n - 1 。
// 一个数组的按位或运算值是这个数组里所有数字按位或运算的结果。

// 请你返回一个大小为 n 的整数数组 answer，
// 其中 answer[i]是开始位置为 i ，按位或运算结果最大，且 最短 子数组的长度。

// 子数组 是数组里一段连续非空元素组成的序列。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
  const n = nums.length;
  const suffix = new Array(n).fill(0);
  const preffix30 = new Array(n).fill(0);
  preffix30[0] = get30(nums[0]);
  suffix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] | nums[i];
  }
  for (let i = 1; i < n; i++) {
    preffix30[i] = get30(nums[i], preffix30[i - 1]);
  }
  let pre = new Array(30).fill(0);
  // suffix中是最大的按或运算值
  const ans = [];
  for (let i = 0; i < n; i++) {
    let left = i;
    let right = n - 1;
    let target = suffix[i];
    while (left <= right) {
      let mid = (left + right) >> 1;
      let num = getNum(pre, preffix30[mid]);
      if (num < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    ans[i] = left - i + 1;
    for (let j = 0; j < 30; j++) {
      if ((nums[i] >>> j) & 1) {
        pre[30 - j - 1]++;
      }
    }
  }
  return ans;
};

var get30 = function (num, pre = new Array(30).fill(0)) {
  const ans = pre.slice();
  for (let i = 0; i < 30; i++) {
    if ((num >>> i) & 1) {
      ans[30 - i - 1]++;
    }
  }
  return ans;
};

var getNum = function (pre, cur) {
  let num = 0;
  for (let i = 0; i < 30; i++) {
    if (cur[i] - pre[i] > 0) {
      // 是1
      num += Math.pow(2, 29 - i);
    }
  }
  return num;
};
