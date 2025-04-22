/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-21 23:26:19                                                  *
 * @LastModifiedDate: 2025-04-21 23:32:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
  // 求differences的前缀和，假设第一个元素是0
  let minNum = 0;
  let maxNum = 0;
  let cur = 0;
  for (const diff of differences) {
    cur += diff;
    minNum = Math.min(minNum, cur);
    maxNum = Math.max(maxNum, cur);
  }
  if (maxNum - minNum > upper - lower) return 0;
  return upper - lower - (maxNum - minNum) + 1;
};
