/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-11 16:38:19                                                  *
 * @LastModifiedDate: 2022-03-11 16:53:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 nums 。
// 如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 存在重复元素就返回false
  // 用一个set记录一下即可
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};

// 不使用额外资源的解法
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 排序后判断相邻元素是否重复即可
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      console.log(nums[i]);
      return true;
    }
  }
  return false;
};

containsDuplicate([3, 3])
