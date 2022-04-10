/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-10 21:35:55                                                  *
 * @LastModifiedDate: 2022-04-10 22:04:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = new Set(nums);
  const len = set.size;
  if (len < 3) {
    return Math.max.apply(null, nums);
  }
  nums = [...set];
  nums.sort((a, b) => a - b);
  return nums[len - 3];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 一次遍历,使用三个变量保存三个不相同的最大值
  let a = -Infinity;
  let b = -Infinity;
  let c = -Infinity;
  for (const num of nums) {
    if (num > a) {
      c = b;
      b = a;
      a = num;
      continue;
    } else if (num == a) {
      continue;
    }
    if (num > b) {
      c = b;
      b = num;
      continue;
    } else if (num == b) {
      continue;
    }
    if (num > c && num !== b) {
      c = num;
      continue;
    }
  }
  return c !== -Infinity ? c : a;
};
