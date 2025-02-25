/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 17:17:16                                                  *
 * @LastModifiedDate: 2025-02-25 17:22:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const hash = new Map();
  for (const ch of s) {
    hash.set(ch, (hash.get(ch) || 0) + 1);
  }
  const set = new Set(); // 去重用
  const ans = [];
  for (const ch of s) {
    hash.set(ch, hash.get(ch) - 1);
    if (set.has(ch)) continue; // 重复字符
    while (
      ans.length &&
      ans[ans.length - 1] > ch &&
      hash.get(ans[ans.length - 1]) > 0
    ) {
      // 把字典序大的且后面字符还有的弹出
      set.delete(ans.pop());
    }
    set.add(ch);
    ans.push(ch);
  }
  return ans.join("");
};
