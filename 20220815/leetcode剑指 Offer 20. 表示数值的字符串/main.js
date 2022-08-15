/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 14:48:52                                                  *
 * @LastModifiedDate: 2022-08-15 16:35:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

// 数值（按顺序）可以分成以下几个部分：

// 若干空格
// 一个 小数 或者 整数
// （可选）一个 'e' 或 'E' ，后面跟着一个 整数
// 若干空格
// 小数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 下述格式之一：
// 至少一位数字，后面跟着一个点 '.'
// 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
// 一个点 '.' ，后面跟着至少一位数字
// 整数（按顺序）可以分成以下几个部分：

// （可选）一个符号字符（'+' 或 '-'）
// 至少一位数字
// 部分数值列举如下：

// ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
// 部分非数值列举如下：

// ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
const set = new Set([
  ".",
  "0",
  "e",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "E",
]);
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 去除首尾的空格
  const str = s.trim();
  if (hasOtherCh(str)) {
    return false;
  }
  return isInteger(str) || isDecimal(str) || isScientific(str);
};

/**
 * @description 是否包含其它字符
 * @param {string} s 去掉首位的可能数字表达
 */
var hasOtherCh = (s) => {
  for (const ch of s) {
    if (!set.has(ch)) {
      return true;
    }
  }
  return false;
};
/**
 * @description 判断是否是整数
 * @param {string} s
 * @returns {boolean}
 */
var isInteger = (s) => {
  return /^[+-]{0,1}\d+\.{0,1}$/.test(s);
};
/**
 * @description 判断是否为小数
 * @param {string} s
 * @returns
 */
var isDecimal = (s) => {
  return /^[+-]{0,1}\d*\.\d+$/.test(s);
};

/**
 * @description 判断是否符合科学计数法
 * @param {string} s 科学计数法
 * @returns {boolean}
 */
var isScientific = (s) => {
  return (
    /^[+-]{0,1}\d+\.{0,1}[eE][+-]{0,1}\d+$/.test(s) ||
    /^[+-]{0,1}\d*\.\d+[eE][+-]{0,1}\d+$/.test(s)
  );
};
