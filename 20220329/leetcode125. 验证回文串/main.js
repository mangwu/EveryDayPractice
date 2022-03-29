/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 17:33:56                                                  *
 * @LastModifiedDate: 2022-03-29 17:36:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 先转化为小写字符
  s = s.toLocaleLowerCase();
  s = s.split(/\s+/).join('')
  console.log(s);
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
  }
  return true;
};
