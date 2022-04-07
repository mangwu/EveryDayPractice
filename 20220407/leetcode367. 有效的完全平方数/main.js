/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-07 21:14:18                                                  *
 * @LastModifiedDate: 2022-04-07 21:21:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，
// 否则返回 false 。

// 进阶：不要 使用任何内置的库函数，如  sqrt 。

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // 从0开始
  let idx = 0;
  while (idx * idx <= num) {
    if (idx * idx == num) {
      return true;
    }
    idx++;
  }
  return false;
};
