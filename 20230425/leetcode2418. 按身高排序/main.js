/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-25 08:58:58                                                  *
 * @LastModifiedDate: 2023-04-25 09:01:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 names ，和一个由 互不相同 的正整数组成的数组 heights 。两个数组的长度均为 n 。

// 对于每个下标 i，names[i] 和 heights[i] 表示第 i 个人的名字和身高。

// 请按身高 降序 顺序返回对应的名字数组 names 。

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const arr = names.map((v, i) => ({ name: v, height: heights[i] }));
  arr.sort((a, b) => b.height - a.height);
  return arr.map((v) => v.name);
};
