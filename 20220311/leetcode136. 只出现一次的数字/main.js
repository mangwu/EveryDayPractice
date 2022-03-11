/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-11 16:12:01                                                  *
 * @LastModifiedDate: 2022-03-11 16:35:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};

// 使用额外空间
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 使用hash或者数组记录个数，个数为1的就是该元素
  const hash = new Set();
  for (const num of nums) {
    if (hash.has(num)) {
      hash.delete(num);
    } else {
      hash.add(num);
    }
  }
  return [...hash][0];
};

// 不使用额外的空间
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 异或运算特性：相同两个数异或运算得0
  // 一个数与0异或运行不发生变化
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
