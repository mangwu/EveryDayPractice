/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-04 13:52:54                                                  *
 * @LastModifiedDate: 2022-03-10 15:42:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。

// 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

// 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 暴力解法
  // 因为nums1是nums2的子集，所以将nums1保存再在hash中
  // 遍历一遍nums2，如果是nums1中的元素，就向后寻找最大值，时间复杂度为O(n1 + n2^2)
  const hash = new Map();
  for (let num of nums1) {
    hash.set(num, -1);
  }
  for (let i = 0; i < nums2.length; i++) {
    console.log(hash.has(nums2[i]));
    if (hash.has(nums2[i])) {
      // 有该元素，找到后面的最大值
      for (let j = i + 1; j < nums2.length; j++) {
        if (nums2[j] > nums2[i]) {
          hash.set(nums2[i], nums2[j]);
          break;
        }
      }
    }
  }
  return [...hash].map((value) => value[1]);
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 暴力解法
  // 不使用map，遍历nums1
  const len1 = nums1.length;
  let ans = new Array(len1).fill(-1);
  const len2 = nums2.length;
  for (let i = 0; i < len1; i++) {
    j = 0;
    while (j < len2) {
      if (nums2[j] == nums1[i]) {
        j++;
        break;
      }
      j++;
    }
    while (nums2[j] < nums1[i] && j < len2) {
      j++;
    }
    ans[i] = j < len2 ? nums2[j] : -1;
  }
  return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 保存Next Greater Number的结果
  const hash = new Map();
  // 单调栈
  const stack = [];
  const len = nums2.length;
  for (let i = len - 1; i >= 0; i--) {
    // 遍历stack，有栈元素比当前num小就弹出
    while (stack.length > 0 && nums2[stack[stack.length - 1]] <= nums2[i]) {
      stack.pop();
    }
    // 设置为栈顶元素（小的都被抛弃了）
    hash.set(nums2[i], stack.length ? nums2[stack[stack.length - 1]] : -1);
    // 入栈，为下一个元素做准备
    stack.push(i);
  }
  return nums1.map((v) => hash.get(v));
};
