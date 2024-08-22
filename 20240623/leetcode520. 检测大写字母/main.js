/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-23 22:28:57                                                  *
 * @LastModifiedDate: 2024-06-23 22:41:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如 "USA" 。
// 单词中所有字母都不是大写，比如 "leetcode" 。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
// 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const chArr = word.split("");
  return (
    isAllUpper(chArr) ||
    isAllLower(chArr) ||
    (isUpper(word[0]) && isAllLower(chArr.slice(1)))
  );
};
/**
 * @description 字符是否大写
 * @param {string} ch
 * @returns {boolean}
 */
function isUpper(ch) {
  return ch.toUpperCase() === ch;
}
/**
 * @description 字符串数组中的是否全部大写
 * @param {string[]} str
 * @returns {boolean}
 */
function isAllUpper(str) {
  return str.every((v) => isUpper(v));
}
/**
 * @description 字符串数组中的是否全部小写
 * @param {string[]} str
 * @returns {boolean}
 */
function isAllLower(str) {
  return str.every((v) => !isUpper(v));
}
