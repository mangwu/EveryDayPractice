/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-28 21:24:49                                                  *
 * @LastModifiedDate: 2022-03-28 22:20:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 有效数字（按顺序）可以分成以下几个部分：

// 一个 小数 或者 整数
// （可选）一个 'e' 或 'E' ，后面跟着一个 整数
// 小数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 下述格式之一：
// 至少一位数字，后面跟着一个点 '.'
// 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
// 一个点 '.' ，后面跟着至少一位数字
// 整数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 至少一位数字
// 所有可出现字符
const set = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "E",
  "e",
  "-",
  "+",
]);
const set2 = new Set(["e", "E", "+", "-", "."]);
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 1. 符号位只能出现在第一个位置或者出现在e后面
  // 2. 小数点只能出现一次，后面可以没有数字
  // 3. E或者e只能出现一次，且后面必跟整数（可以是负数）
  let hasPoint = false;
  let hasE = false;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const ch = s[i];
    if (!set.has(ch)) {
      // 不存在的字符
      return false;
    }
    // 第一位不能是e，且只能出现一次
    if ((hasE || i == 0) && (ch == "e" || ch == "E")) {
      return false;
    }
    // 小数点只能有一个
    if (hasPoint && ch == ".") {
      return false;
    }
    // 小数点不能出现在e后
    if (hasE && ch == ".") {
      return false;
    }
    // 符号位只能出现在首位或者e后
    if (ch == "+" || ch == "-") {
      if (i == 0 || s[i - 1] == "e" || s[i - 1] == "E") {
        continue;
      } else {
        return false;
      }
    }
    if (ch == ".") {
      hasPoint = true;
      // 不能只有一个点，且点的前后必须有一个数
      if (
        len == 1 ||
        (set2.has(s[i - 1]) && (len >= 3 ? set2.has(s[i + 1]) : true))
      ) {
        return false;
      }
      continue;
    }
    if (ch == "e" || ch == "E") {
      hasE = true;

      // 不能出现单独点，e的前面是一个数
      if (
        i - 1 == 0 &&
        (s[i - 1] == "." || s[i - 1] == "+" || s[i - 1] == "-")
      ) {
        return false;
      }
      if (i == 2 && (s.substring(0, 2) == "+." || s.substring(0, 2) == "-.")) {
        return false;
      }
      // 判断后续
      if (i == len - 1) {
        return false;
      }
      if (i < len - 2) {
        continue;
      }
      if (i == len - 2) {
        // 倒数第二位
        if (!set.has(s[i + 1]) || s[i + 1] == "+" || s[i + 1] == "-") {
          return false;
        }
      }
    }
  }
  return true;
};
