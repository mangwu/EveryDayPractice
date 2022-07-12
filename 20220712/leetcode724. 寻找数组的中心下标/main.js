/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-12 10:43:39                                                  *
 * @LastModifiedDate: 2022-07-12 11:18:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请计算数组的 中心下标 。

// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，
// 因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 双指针
  const n = nums.length;
  let left = -1;
  let right = n;
  let leftSum = 0;
  let rightSum = 0;
  while (left < right) {
    if (leftSum < rightSum) {
      left++;
      leftSum += nums[left];
    } else if (leftSum > rightSum) {
      right++;
      rightSum += nums[right];
    } else {
      // 二者相等
      if (right - left == 1) {
        return left + 1;
      } else {
        left++;
        leftSum += nums[left];
      }
    }
  }
};
// 不能使用双指针
// 因为nums中有负数，不能保证下一步相加必递增
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length;
  // 使用前缀和
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }
  const reprefix = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    reprefix[i] = reprefix[i + 1] + nums[i];
  }
  // [0, sum1, sum2, sum3, ..., sum_n-1, sum_n]
  //    [sum_n, sum_n-1, ..., sum_3, sum_2, sum_1, 0]
  // 遍历第一个前缀和，二分查找第二个前缀和中是否有相同的和，如果二者索引相差1，就找到了结果
  const hash = new Map();
  for (let i = 0; i <= n; i++) {
    if (hash.has(reprefix[i])) {
      const set = hash.get(reprefix[i]);
      set.add(i);
      hash.set(reprefix[i], set);
    } else {
      hash.set(reprefix[i], new Set([i]));
    }
  }
  for (let i = 0; i <= n; i++) {
    if (hash.has(prefix[i])) {
      const set = hash.get(prefix[i]);
      if (set.has(i + 1)) {
        return i;
      }
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 计算总和
  // 计算每个前缀和，元素右边的和可以用总和减去前缀和再减去当前元素
  const total = nums.reduce((pre, cur) => pre + cur, 0);
  const n = nums.length;
  let preSum = 0;
  for (let i = 0; i < n; i++) {
    if (preSum == total - preSum - nums[i]) {
      return i;
    }
    preSum += nums[i];
  }
  return -1;
};
