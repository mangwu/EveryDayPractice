/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-03 21:46:33                                                  *
 * @LastModifiedDate: 2022-12-03 21:57:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const START = "0".charCodeAt();
const END = "9".charCodeAt();
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let max = -1;
  let sMax = -1;
  for (const ch of s) {
    if (ch.charCodeAt() >= START && ch.charCodeAt() <= END) {
      // 是数字
      const num = parseInt(ch);
      if (num > max) {
        sMax = max;
        max = num;
      } else if (num > sMax && num !== max) {
        sMax = num;
      }
    }
  }
  return sMax;
};
