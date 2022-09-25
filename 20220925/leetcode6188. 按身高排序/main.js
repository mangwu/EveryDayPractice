/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 10:50:21                                                  *
 * @LastModifiedDate: 2022-09-25 10:54:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 names ，和一个由 互不相同 的正整数组成的数组 heights 。
// 两个数组的长度均为 n 。

// 对于每个下标 i，names[i] 和 heights[i] 表示第 i 个人的名字和身高。

// 请按身高 降序 顺序返回对应的名字数组 names 。

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const hash = new Map();
  const n = names.length;
  for (let i = 0; i < n; i++) {
    hash.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    names[i] = hash.get(heights[i]);
  }
  return names;
};
