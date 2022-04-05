/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-04 23:25:35                                                  *
 * @LastModifiedDate: 2022-04-04 23:42:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 在len = nums.length，其中包含[0,len] 中的数，只有一个没有
  const n = nums.length;
  // 构建一个0 - n的数组
  const set = new Set(new Array(n + 1).fill(0).map((v, i) => i));
  for (const num of nums) {
    set.delete(num);
  }
  return [...set][0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;

  // 排序法
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  // 不消耗额外空间的位运算
  // 异或，任意整数异或0都不会改变，而异或本身就会成为0
  // 将数组中的每个元素和一个带有缺失的元素的[0,n]所有数进行异或
  // 不缺失的数互相异或，都得到0，缺失的数只有一个，只能后0异或，得到本身
  let oxr = 0;
  for (const num of nums) {
    oxr ^= num;
  }
  for (let i = 0; i <= len; i++) {
    oxr ^= i;
  }
  return oxr;
};
