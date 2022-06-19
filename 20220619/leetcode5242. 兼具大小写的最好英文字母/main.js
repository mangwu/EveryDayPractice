/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-19 10:33:30                                                  *
 * @LastModifiedDate: 2022-06-19 10:44:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由英文字母组成的字符串 s ，请你找出并返回 s 中的 最好 英文字母。
// 返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。

// 最好 英文字母的大写和小写形式必须 都 在 s 中出现。

// 英文字母 b 比另一个英文字母 a 更好 的前提是：英文字母表中，b 在 a 之 后 出现。

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const set = new Set();
  // 可能的答案
  const ans = [];
  for (const ch of s) {
    if (
      ch.charCodeAt() <= "z".charCodeAt() &&
      ch.charCodeAt() >= "a".charCodeAt()
    ) {
      // 是小写字母
      if (set.has(String.fromCharCode(ch.charCodeAt() - 32))) {
        ans.push(String.fromCharCode(ch.charCodeAt() - 32));
      }
    } else {
      // 是大写字母
      if (set.has(String.fromCharCode(ch.charCodeAt() + 32))) {
        ans.push(ch);
      }
    }
    set.add(ch);
  }
  ans.sort();
  if (ans.length > 0) {
    return ans[ans.length - 1];
  }
  return "";
};
