/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-30 10:49:23                                                  *
 * @LastModifiedDate: 2022-10-30 10:53:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  let res = 0;
  let n = 0;
  for (const num of nums) {
    if (num % 3 == 0 && num % 2 == 0) {
      res += num;
      n++;
    }
  }
  return n ? Math.floor(res / n) : 0;
};
