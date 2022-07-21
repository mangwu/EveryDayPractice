/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-21 09:18:57                                                  *
 * @LastModifiedDate: 2022-07-21 09:22:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.replace(/\s/g, "%20");
};

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.split(/\s/).join("%20");
};
