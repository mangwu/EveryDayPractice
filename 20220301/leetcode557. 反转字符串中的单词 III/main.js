/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-01 09:41:50                                                  *
 * @LastModifiedDate: 2022-03-01 09:43:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(/\s/)
    .map((v) => v.split("").reverse().join(""))
    .join(" ");
};
