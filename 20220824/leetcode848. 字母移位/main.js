/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-24 16:05:17                                                  *
 * @LastModifiedDate: 2022-08-24 16:10:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = s.length;
  const strArr = s.split("");
  // 计算后缀和
  for (let i = n - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }
  for (let i = 0; i < n; i++) {
    strArr[i] = String.fromCharCode(
      ((s[i].charCodeAt() - 97 + shifts[i]) % 26) + 97
    );
  }
  return strArr.join("");
};
