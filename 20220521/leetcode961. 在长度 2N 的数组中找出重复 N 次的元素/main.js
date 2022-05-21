/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-21 15:18:19                                                  *
 * @LastModifiedDate: 2022-05-21 15:35:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，该数组具有以下属性：

// nums.length == 2 * n.
// nums 包含 n + 1 个 不同的 元素
// nums 中恰有一个元素重复 n 次
// 找出并返回重复了 n 次的那个元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  // 每次取两个
  let n = nums.length;
  let one = null;
  let two = null;
  for (let i = 0; i < n / 2; i++) {
    if (nums[i] == nums[i + 1]) {
      return nums[i];
    }
    if (nums[i] == one) {
      return nums[i];
    }
    if (nums[i] == two) {
      return nums[i];
    }
    if (nums[i + 1] == one) {
      return nums[i + 1];
    }
    if (nums[i + 1] == two) {
      return nums[i + 1];
    }
    one = nums[i];
    two = nums[i + 1];
    i++;
  }
};
