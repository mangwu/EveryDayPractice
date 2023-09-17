/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-17 10:46:46                                                  *
 * @LastModifiedDate: 2023-09-17 11:08:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，其中 n 是班级中学生的总数。班主任希望能够在让所有学生保持开心的情况下选出一组学生：

// 如果能够满足下述两个条件之一，则认为第 i 位学生将会保持开心：

// 这位学生被选中，并且被选中的学生人数 严格大于 nums[i] 。
// 这位学生没有被选中，并且被选中的学生人数 严格小于 nums[i] 。
// 返回能够满足让所有学生保持开心的分组方法的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function (nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  const n = nums.length;
  if (nums[0] > 0) res++; // 全部未选中
  if (nums[n - 1] < n) res++;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] < i + 1 && nums[i + 1] > i + 1) {
      res++;
    }
  }
  return res;
};
