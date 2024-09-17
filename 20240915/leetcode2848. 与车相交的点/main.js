/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-15 23:36:21                                                  *
 * @LastModifiedDate: 2024-09-15 23:41:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 nums 表示汽车停放在数轴上的坐标。对于任意下标 i，nums[i] = [starti, endi] ，其中 starti 是第 i 辆车的起点，endi 是第 i 辆车的终点。

// 返回数轴上被车 任意部分 覆盖的整数点的数目。

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const set = new Set();
  for (const [start, end] of nums) {
    for (let i = start; i <= end; i++) set.add(i);
  }
  return set.size;
};
