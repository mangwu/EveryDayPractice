/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-28 22:30:46                                                  *
 * @LastModifiedDate: 2022-05-28 22:36:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的字符串 num ，它只包含数字。

// 如果对于 每个 0 <= i < n 的下标 i ，
// 都满足数位 i 在 num 中出现了 num[i]次，那么请你返回 true ，否则返回 false 。

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  // hash表
  let n = num.length;
  const hash = new Map();
  for (const ch of num) {
    if (hash.has(ch)) {
      hash.set(ch, hash.get(ch) + 1);
    } else {
      hash.set(ch, 1);
    }
  }
  for (let i = 0; i < n; i++) {
    // 判读数字i出现了几次
    let cishu = hash.get(i.toString()) ? hash.get(i.toString()) : 0;
    if (cishu != num[i]) {
      return false;
    }
  }
  return true;
};
