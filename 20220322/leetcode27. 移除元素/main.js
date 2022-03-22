/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-22 21:32:45                                                  *
 * @LastModifiedDate: 2022-03-22 21:47:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
      console.log(nums);
    }
  }
  return nums.length;
};

removeElement([2, 5, 6, 7, 3, 4, 8, 3, 2, 1, 3, 7], 3);

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length;
  // 找到的相同元素个数
  let idx = 0;
  // 不使用splice
  for (let i = 0; i < len - idx; i++) {
    if (nums[i] == val) {
      idx++;
      // 把相同元素移到最后即可
      [nums[i], nums[len - idx]] = [nums[len - idx], nums[i]];
      i--;
    }
  }
  return len - idx;
};
