/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-11 08:43:07                                                  *
 * @LastModifiedDate: 2023-01-11 08:52:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的字符串 num ，它只包含数字。

// 如果对于 每个 0 <= i < n 的下标 i ，都满足数位 i 在 num 中出现了 num[i]次，那么请你返回 true ，否则返回 false 。

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const n = num.length;
  const hash = new Map();
  for (const ch of num) {
    hash.has(ch) ? hash.set(ch, hash.get(ch) + 1) : hash.set(ch, 1);
  }
  for (let i = 0; i < n; i++) {
    // 数字i在num中应该出现num[i]次
    let cur = parseInt(num[i]);
    let fact = hash.has(i.toString()) ? hash.get(i.toString()) : 0;
    if (cur !== fact) {
      return false;
    }
  }
  return true;
};
