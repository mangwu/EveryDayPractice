/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-03 09:22:40                                                  *
 * @LastModifiedDate: 2024-09-03 09:53:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
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
  let n = nums.length;
  if (n === 1) return nums[0];
  // 过滤0
  nums = nums.filter((v) => v);
  n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return Math.max(nums[0], 0);
  // 计算负数的个数，找出最大的负数
  let res = 1;
  let negNum = 0;
  let maxNeg = -Infinity;
  for (const num of nums) {
    res *= num;
    if (num < 0) {
      negNum++;
      maxNeg = Math.max(maxNeg, num);
    }
  }
  if (negNum % 2 === 0) return res;
  return res / maxNeg;
};
