/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-22 22:34:13                                                  *
 * @LastModifiedDate: 2023-07-22 22:39:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 s ，将 s 中的元素重新 排列 得到新的字符串 t ，它满足：

// 所有辅音字母都在原来的位置上。更正式的，如果满足 0 <= i < s.length 的下标 i 处的 s[i] 是个辅音字母，那么 t[i] = s[i] 。
// 元音字母都必须以他们的 ASCII 值按 非递减 顺序排列。更正式的，对于满足 0 <= i < j < s.length 的下标 i 和 j  ，如果 s[i] 和 s[j] 都是元音字母，那么 t[i] 的 ASCII 值不能大于 t[j] 的 ASCII 值。
// 请你返回结果字母串。

// 元音字母为 'a' ，'e' ，'i' ，'o' 和 'u' ，它们可能是小写字母也可能是大写字母，辅音字母是除了这 5 个字母以外的所有字母

const SET = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const arr = s.split("");
  const n = s.length;
  const ans = new Array(n).fill(-1);
  const rest = [];
  for (let i = 0; i < n; i++) {
    if (SET.has(arr[i])) {
      rest.push(arr[i]);
    } else {
      ans[i] = arr[i];
    }
  }
  rest.sort();
  let cur = 0;
  for (const ch of rest) {
    while (ans[cur] !== -1) {
      cur++;
    }
    ans[cur] = ch;
    cur++;
  }
  return ans.join("");
};
