/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 03:41:42                                                  *
 * @LastModifiedDate: 2022-04-05 04:48:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
const NUMTOSTR = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length;
  if (len == 0) {
    return [];
  }
  if (len == 1) {
    return NUMTOSTR[digits];
  }
  let res = NUMTOSTR[digits[0]];
  for (let i = 1; i < len; i++) {
    let newRes = [];
    const strarr = NUMTOSTR[digits[i]];
    for (const primary of res) {
      for (const ch of strarr) {
        newRes.push(primary + ch);
      }
    }
    res = newRes;
  }
  return res;
};
