/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-09 09:03:12                                                  *
 * @LastModifiedDate: 2022-08-09 09:07:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。

// 你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。

// 请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。

//
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  // 前缀和
  let min = Infinity;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    min = Math.min(sum, min);
  }
  if (min < 0) {
    return 1 - min;
  } else {
    return 1;
  }
};

// [-3,2,-3,4,2]
// -3 -1 -4 0 2
