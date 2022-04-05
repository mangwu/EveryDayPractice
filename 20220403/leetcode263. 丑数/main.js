/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-03 22:31:17                                                  *
 * @LastModifiedDate: 2022-04-03 22:37:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  if (n == 1) {
    return true;
  }
  while (n !== 1) {
    console.log(n);
    if (n % 2 == 0) {
      n = n / 2;
      continue;
    }
    if (n % 3 == 0) {
      n = n / 3;
      continue;
    }
    if (n % 5 == 0) {
      n = n / 5;
      continue;
    }
    if (n !== 1) {
      return false;
    }
  }
  return true;
};
isUgly(10);
