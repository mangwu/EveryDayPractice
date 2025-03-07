/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 09:57:33                                                  *
 * @LastModifiedDate: 2025-03-05 10:01:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const n = digits.length;
  if (n === 0) return [];
  const data = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let pre = data[digits[0]].slice();
  for (let i = 1; i < n; i++) {
    const cur = data[digits[i]];
    const nxt = [];
    for (const item of pre) {
      for (const ch of cur) {
        nxt.push(item + ch);
      }
    }
    pre = nxt;
  }
  return pre;
};
