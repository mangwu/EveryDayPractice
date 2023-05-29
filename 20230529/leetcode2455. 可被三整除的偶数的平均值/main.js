/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-29 08:55:54                                                  *
 * @LastModifiedDate: 2023-05-29 08:58:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由正整数组成的整数数组 nums ，返回其中可被 3 整除的所有偶数的平均值。

// 注意：n 个元素的平均值等于 n 个元素 求和 再除以 n ，结果 向下取整 到最接近的整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0;
  let n = 0;
  for (const num of nums) {
    if (num % 6 === 0) {
      sum += num;
      n++;
    }
  }

  return n === 0 ? 0 : Math.floor(sum / n);
};
