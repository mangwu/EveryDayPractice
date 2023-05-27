/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-27 22:54:30                                                  *
 * @LastModifiedDate: 2023-05-27 23:03:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，它表示一个班级中所有学生在一次考试中的成绩。老师想选出一部分同学组成一个 非空 小组，且这个小组的 实力值 最大，如果这个小组里的学生下标为 i0, i1, i2, ... , ik ，那么这个小组的实力值定义为 nums[i0] * nums[i1] * nums[i2] * ... * nums[ik​] 。

// 请你返回老师创建的小组能得到的最大实力值为多少。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
  const m = nums.length;
  nums = nums.filter((v) => v !== 0);
  nums.sort((a, b) => a - b);
  // 选择所有正数
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1 && nums[0] < 0) {
    return m === n ? nums[0] : 0;
  }
  let i = n - 1;
  let res = 1;
  for (; i >= 0; i--) {
    if (nums[i] > 0) {
      res *= nums[i];
    } else {
      break;
    }
  }
  // 选择偶数个负数
  if (i % 2 === 0) {
    i--;
  }
  for (let j = 0; j <= i; j++) {
    res *= nums[j];
  }
  return res;
};
