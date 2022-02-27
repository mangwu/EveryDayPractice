/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-27 01:15:36                                                  *
 * @LastModifiedDate: 2022-02-27 17:01:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个按 非递减顺序 排序的整数数组 nums，
// 返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 实际上就是如何考虑负数平方后排序的问题
  // 使用优先队列可以构成O(nlogn)的解法，但是nums本身就是排好序的所以有O(n)解法
  // 记录最小值，从最小值开始向两端进行同时进行遍历
  const len = nums.length;
  const ans = [];
  let k = 0; // 负数个数
  for (let i = 0; i < len || k > 0; i++) {
    if (nums[i] < 0) {
      k++;
      continue;
    }
    // 大于等于0时开始
    if (k) {
      // 有负数
      const num1 = nums[i] * nums[i];
      const num2 = nums[k - 1] * nums[k - 1];
      if (num2 > num1) {
        ans.push(num1);
      } else {
        ans.push(num2);
        // 需要保持此次的循环i不变
        i--;
        k--;
      }
    } else {
      ans.push(nums[i] * nums[i]);
    }
  }
  return ans;
};

// 上述方法要先找到分界点再从其左右开始遍历
// 实际上无需如此，从左右两侧开始遍历，每次选择大的一项是一致的

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let k = j;
  const ans = [];
  while (k >= 0) {
    const num1 = nums[i] * nums[i];
    const num2 = nums[j] * nums[j];
    if (num2 > num1) {
      ans[k] = num2;
      j--;
    } else {
      ans[k] = num1;
      i++;
    }
    k--;
  }
  return ans;
};
