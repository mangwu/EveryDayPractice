/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-09 09:41:43                                                  *
 * @LastModifiedDate: 2025-01-09 10:05:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 word1 和 word2 。

// 如果一个字符串 x 重新排列后，word2 是重排字符串的
// 前缀
//  ，那么我们称字符串 x 是 合法的 。

// 请你返回 word1 中 合法
// 子字符串
//  的数目。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  const m = word1.length;
  const cnt2 = new Map();
  for (const ch of word2) {
    cnt2.set(ch, (cnt2.get(ch) || 0) + 1);
  }
  const cnt1 = new Map();
  let j = 0;
  let res = 0;
  for (let i = 0; i < m; i++) {
    while (j < m && cntCompare(cnt1, cnt2) < 0) {
      cnt1.set(word1[j], (cnt1.get(word1[j]) || 0) + 1);
      j++;
    }
    if (cntCompare(cnt1, cnt2) > 0) res += m - j + 1;
    else break;
    const num = cnt1.get(word1[i]) || 0;
    if (num <= 1) cnt1.delete(word1[i]);
    else cnt1.set(word1[i], num - 1);
  }
  return res;
};
function cntCompare(cnt1, cnt2) {
  // 检查cnt1是否大于cnt2
  for (const [key, num2] of cnt2) {
    if ((cnt1.get(key) || 0) < num2) return -1;
  }
  return 1;
}
// 保证子字符串中元素个数大于等于abc

// abcabc  abc
