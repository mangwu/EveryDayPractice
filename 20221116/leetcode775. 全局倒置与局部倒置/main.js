/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-16 08:59:26                                                  *
 * @LastModifiedDate: 2022-11-16 10:25:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums ，表示由范围 [0, n - 1] 内所有整数组成的一个排列。

// 全局倒置 的数目等于满足下述条件不同下标对 (i, j) 的数目：

// 0 <= i < j < n
// nums[i] > nums[j]
// 局部倒置 的数目等于满足下述条件的下标 i 的数目：

// 0 <= i < n - 1
// nums[i] > nums[i + 1]
// 当数组 nums 中 全局倒置 的数量等于 局部倒置 的数量时，返回 true ；否则，返回 false
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  const n = nums.length;
  if (n <= 2) {
    return true;
  }
  // 只需要证明存在两个数，前者大于后者且前者索引小于后者索引减1
  // 使用单调栈计算下一个更小的元素
  const stack = [];
  const res = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length]] > nums[i]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  for (let i = 0; i < n; i++) {
    if (res[i] == -1) {
      continue;
    }
    if (res[i] > i + 1) {
      return false;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  const n = nums.length;
  if (n <= 2) {
    return true;
  }
  // 只需要证明存在两个数，前者大于后者且前者索引小于后者索引减1
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(nums[i], i);
  }
  const data = new Array(n).fill(0).map((_v, i) => n - i - 1);
  const q = new Q((a, b) => b - a);

  for (let i = 0; i < n - 2; i++) {
    q.deleteItem(nums[i]);
    let min = q.getLast();
    if (min < nums[i] && hash.get(min) > i + 1) {
      return false;
    }
  }
  return true;
};

class Q {
  constructor(compare = (a, b) => a - b, data = []) {
    this.data = data;
    this.compare = compare;
  }
  binarySearch(val) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比val大的值
      if (this.compare(val, this.data[mid]) < 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  const n = nums.length;
  let local = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      local++;
    }
  }
  let _global = 0;
  const q = new Q();
  for (let i = 0; i < n - 1; i++) {
    let idx = q.binarySearch(nums[i]);
    // 小于当前值的所有值个数减去左边小于当前值的个数
    _global += nums[i] - idx;
    console.log(nums[i], idx);
    q.data.splice(idx, 0, nums[i]);
  }
  return local === _global;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  const n = nums.length;
  let min = nums[n - 1];
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > min) {
      return false;
    }
    min = Math.min(min, nums[i + 1]);
  }
  return true;
};
