/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-27 17:04:59                                                  *
 * @LastModifiedDate: 2022-02-27 18:22:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 每轮转nums.length步就会回到原来的状态
  // 所以需要实际只需要轮转 k % nums.length步数

  const len = nums.length;
  k = k % len;
  // 使用一个k大小的数组记录被替换的值
  const replace = [];
  // 必须使用原数组进行翻转, 原位置的索引必须加上k%len 就是应该到的位置
  for (let i = 0; i < len; i++) {
    if (i < k) {
      const ni = (i + k) % len;
      // 记录被替换的元素
      replace.push(nums[ni]);
      nums[ni] = nums[i];
      continue;
    }
    // 选择第一个replace中的值入队
    const ni = (i + k) % len;
    replace.push(nums[ni]);
    nums[ni] = replace[0];
    replace = replace.slice(1);
  }
};
// 上述方法超出时间限制

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
  // 每轮转nums.length步就会回到原来的状态
  // 所以需要实际只需要轮转 k % nums.length步数

  const len = nums.length;
  k = k % len;
  if (k == 0) {
    return;
  }
  // 将后面的k个数字进行保存
  const replace = nums.slice(len - k);
  // 必须使用原数组进行翻转, 原位置的索引必须加上k%len 就是应该到的位置
  for (let i = len - k - 1; i >= 0; i--) {
    nums[(i + k) % len] = nums[i];
  }
  // 将replace替换到原数组中
  for (let i = 0; i < replace.length; i++) {
    nums[i] = replace[i];
  }
};
// 数组翻转做法
// 后面的k个数组要到前k个位置，将其进行翻转即可
// 然后翻转各自翻转[0, k] [k, len]即可
// 时间复杂度O(2N),空间复杂度O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate3 = function (nums, k) {
  const len = nums.length;
  k = k % len;
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};
const reverse = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
