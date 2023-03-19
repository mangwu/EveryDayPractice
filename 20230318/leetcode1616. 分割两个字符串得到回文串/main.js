/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-18 19:41:17                                                  *
 * @LastModifiedDate: 2023-03-18 21:43:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 a 和 b ，它们长度相同。请你选择一个下标，将两个字符串都在 相同的下标 分割开。由 a 可以得到两个字符串： aprefix 和 asuffix ，满足 a = aprefix + asuffix ，同理，由 b 可以得到两个字符串 bprefix 和 bsuffix ，满足 b = bprefix + bsuffix 。请你判断 aprefix + bsuffix 或者 bprefix + asuffix 能否构成回文串。

// 当你将一个字符串 s 分割成 sprefix 和 ssuffix 时， ssuffix 或者 sprefix 可以为空。比方说， s = "abc" 那么 "" + "abc" ， "a" + "bc" ， "ab" + "c" 和 "abc" + "" 都是合法分割。

// 如果 能构成回文字符串 ，那么请返回 true，否则返回 false 。

// 注意， x + y 表示连接字符串 x 和 y 。

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  const n = a.length;
  // 检查apre和bsuff
  let res = true;
  for (let i = 0; i < n / 2; i++) {
    if (a[i] === b[n - i - 1]) continue;
    else {
      res =
        isPlalindrome(a.substring(i, n - i)) ||
        isPlalindrome(b.substring(i, n - i));
      break;
    }
  }
  // 检查bpre和asuff
  for (let i = 0; i < n / 2; i++) {
    if (b[i] === a[n - i - 1]) continue;
    else {
      res =
        isPlalindrome(a.substring(i, n - i)) ||
        isPlalindrome(b.substring(i, n - i));
      break;
    }
  }
  return res;
};

var isPlalindrome = function (str) {
  const n = str.length;
  for (let i = 0; i < n / 2; i++) if (str[i] !== str[n - i - 1]) return false;
  return true;
};
