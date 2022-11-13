/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-13 15:22:10                                                  *
 * @LastModifiedDate: 2022-11-13 16:03:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 order 和 s 。order 的所有单词都是 唯一 的，并且以前按照一些自定义的顺序排序。

// 对 s 的字符进行置换，使其与排序的 order 相匹配。更具体地说，如果在 order 中的字符 x 出现字符 y 之前，那么在排列后的字符串中， x 也应该出现在 y 之前。

// 返回 满足这个性质的 s 的任意排列 。
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const hash = new Map();
  const n = order.length;
  for (let i = 0; i < n; i++) {
    hash.set(order[i], i + 1);
  }
  return s
    .split("")
    .sort((a, b) => {
      let aO = hash.get(a) ? hash.get(a) : 27;
      let bO = hash.get(b) ? hash.get(b) : 27;
      return aO - bO;
    })
    .join("");
};
