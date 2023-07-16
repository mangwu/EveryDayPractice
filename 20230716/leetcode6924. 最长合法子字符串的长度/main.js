/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-16 11:10:30                                                  *
 * @LastModifiedDate: 2023-07-16 11:33:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 word 和一个字符串数组 forbidden 。

// 如果一个字符串不包含 forbidden 中的任何字符串，我们称这个字符串是 合法 的。

// 请你返回字符串 word 的一个 最长合法子字符串 的长度。

// 子字符串 指的是一个字符串中一段连续的字符，它可以为空。

/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
  const set = new Set(forbidden);
  const n = word.length;
  let left = 0;
  let right = 0;
  let curWord = "";
  let ans = 0;
  while (right < n) {
    for (; right < n; right++) {
      curWord += word[right];
      const res = hasStr(curWord, set);
      console.log(curWord, right, res);
      if (res === false) {
        continue;
      } else {
        ans = Math.max(ans, right - left);
        curWord = res;
        right++;
        left = right - res.length;
        break;
      }
    }
    if (right === n) {
      ans = Math.max(ans, right - left);
    }
  }
  return ans;
};
var hasStr = function (word, set) {
  const n = word.length;
  let cur = "";
  for (let i = n - 1; i >= Math.max(0, n - 10); i--) {
    cur = word[i] + cur;
    if (set.has(cur)) return cur.slice(1);
  }
  return false;
};
longestValidSubstring("cbaaaabc", ["aaa", "cb"]);
