/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-22 09:08:47                                                  *
 * @LastModifiedDate: 2024-10-22 09:15:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。

// 整天 定义为时间持续时间是 24 小时的 整数倍 。

// 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let res = 0;
  const n = hours.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) res++;
    }
  }
  return res;
};
