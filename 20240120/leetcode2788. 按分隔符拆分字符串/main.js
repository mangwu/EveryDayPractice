/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-20 22:11:50                                                  *
 * @LastModifiedDate: 2024-01-20 22:14:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words 和一个字符 separator ，请你按 separator 拆分 words 中的每个字符串。

// 返回一个由拆分后的新字符串组成的字符串数组，不包括空字符串 。

// 注意

// separator 用于决定拆分发生的位置，但它不包含在结果字符串中。
// 拆分可能形成两个以上的字符串。
// 结果字符串必须保持初始相同的先后顺序。

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  return words.reduce((pre, cur) => {
    pre.push(...cur.split(separator).filter((value) => Boolean(value)));
    return pre;
  }, []);
};
