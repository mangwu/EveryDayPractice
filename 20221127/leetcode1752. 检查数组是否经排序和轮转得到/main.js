/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-27 10:25:02                                                  *
 * @LastModifiedDate: 2022-11-27 20:30:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 nums 。nums 的源数组中，所有元素与 nums 相同，但按非递减顺序排列。

// 如果 nums 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 true ；否则，返回 false 。

// 源数组中可能存在 重复项 。

// 注意：我们称数组 A 在轮转 x 个位置后得到长度相同的数组 B ，当它们满足 A[i] == B[(i+x) % A.length] ，其中 % 为取余运算。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const origin = nums.slice().sort((a, b) => a - b);
  const n = nums.length;
  let idx = nums.indexOf(origin[0]);
  for (let i = 0; i < n; i++) {
    if (origin[i] !== nums[(i + idx) % n]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const origin = nums.slice().sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let cur = true;
    for (let j = 0; j < n; j++) {
      if (nums[j] !== origin[(i + j) % n]) {
        cur = false;
        break;
      }
    }
    if (cur) return cur;
  }
  return false;
};

var isSame = function (a, b) {
  const n = a.length;
  for (let i = 0; i < n; i++) {}
};
