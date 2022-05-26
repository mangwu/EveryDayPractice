/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-26 15:27:09                                                  *
 * @LastModifiedDate: 2022-05-26 15:29:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let hn = haystack.length;
  let n = needle.length;
  if (n > hn) {
    return -1;
  }
  for (let i = 0; i <= hn - n; i++) {
    if (haystack[i] == needle[0]) {
      if (haystack.substring(i, i + n) == needle) {
        return i;
      }
    }
  }
  return -1;
};
