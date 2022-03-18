/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-18 19:29:28                                                  *
 * @LastModifiedDate: 2022-03-18 19:55:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len == 0) {
    return 0;
  }
  let i = 1;
  let pre = nums[0];
  while (i < nums.length) {
    if (nums[i] == pre) {
      // 删除改位置元素
      nums.splice(i, 1);
    } else {
      // 修改pre
      pre = nums[i];
      i++;
    }
  }
  return nums.length;
};

// splice会导致变量变慢，因为splice本身复杂度为O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 使用set
  const set = new Set(nums);
  let size = set.size();
  let i = 0;
  for (const v of set) {
    nums[i] = v;
    i++;
  }
  return size;
};

// 时间复杂度O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 使用双指针，慢指针指向第一个相同元素，快指针遍历，
  // 当快指针遇到和前一个值不相同的情况就可以移动慢指针的值并修改了
  let slow = 1;
  let fast = 1;
  const len = nums.length;
  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
      fast++;
    } else {
      fast++;
    }
  }
};
