/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-23 09:23:53                                                  *
 * @LastModifiedDate: 2022-06-23 14:58:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s 和一些 长度相同 的单词 words 。
// 找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let n = s.length;
  // 字符串表
  const alpha = new Array(26).fill(0);
  const hash = new Map();
  let wordsNum = 0;
  for (const word of words) {
    if (hash.has(word)) {
      hash.set(word, hash.get(word) + 1);
    } else {
      hash.set(word, 1);
    }
    for (const ch of word) {
      alpha[ch.charCodeAt() - "a".charCodeAt()]++;
      wordsNum++;
    }
  }
  if (n < wordsNum) {
    return [];
  }
  const ans = [];
  const alpha2 = new Array(26).fill(0);
  for (let i = 0; i < wordsNum; i++) {
    alpha2[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  if (alpha.toString() == alpha2.toString()) {
    if (constitueIt(hash, s.substring(0, wordsNum))) {
      ans.push(0);
    }
  }
  for (let i = wordsNum; i < n; i++) {
    alpha2[s[i - wordsNum].charCodeAt() - "a".charCodeAt()]--;
    alpha2[s[i].charCodeAt() - "a".charCodeAt()]++;
    if (alpha.toString() == alpha2.toString()) {
      if (constitueIt(hash, s.substring(i - wordsNum + 1, i + 1))) {
        ans.push(i - wordsNum + 1);
      }
    }
  }
  return ans;
};

const constitueIt = (hash, s) => {
  const n = s.length;
  const copy = new Map(hash);
  for (let i = 0; i < n; i++) {
    let hasMatch = false;
    for (const [key, val] of copy) {
      if (s.substring(i, i + key.length) == key) {
        if (val == 1) {
          copy.delete(key);
        } else {
          copy.set(key, val - 1);
        }
        hasMatch = true;
        i = i + key.length - 1;
        break;
      }
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
};

// console.log(
//   constitueIt(
//     new Map([
//       ["bar", 2],
//       ["foo", 1],
//       ["rfo", 1],
//     ]),
//     "rfooarfoobar"
//   )
// );

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let n = s.length;
  // 不使用hash表和字母表
  let wordsNum = 0;
  for (const word of words) {
    wordsNum += word.length;
  }
  let ans = [];
  for (let i = 0; i <= n - wordsNum; i++) {
    let res = constitueStr(s.substring(i, i + wordsNum), words.slice());
    if (res) {
      ans.push(i);
    }
  }
  return ans;
};
const constitueStr = (s, words) => {
  const n = s.length;
  let m = words.length;
  for (let i = 0; i < n; i++) {
    let start = i;
    let hasMatch = false;
    for (let j = 0; j < m; j++) {
      if (s.substring(start, start + words[j].length) == words[j]) {
        hasMatch = true;
        // 跳跃i
        i = start + words[j].length - 1;
        // 删除
        words.splice(j, 1);
        m--;
        break;
      }
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
};

constitueStr("barwordfoofoobarword", [
  "word",
  "word",
  "bar",
  "foo",
  "foo",
  "bar",
]);

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let n = s.length;
  // 滑动窗口
  const wordLen = words[0].length;
  const wordsLen = words.length * wordLen;
  if (n < wordsLen) {
    return [];
  }
  const hash = new Map();
  const alpha = new Array(26).fill(0);
  for (const word of words) {
    for (const ch of word) {
      alpha[ch.charCodeAt() - "a".charCodeAt()]++;
    }
  }
  let diff = 0;
  for (const a of alpha) {
    if (a !== 0) {
      diff++;
    }
  }
  for (let i = 0; i < wordsLen; i++) {
    let idx = s[i].charCodeAt() - "a".charCodeAt();
    if (alpha[idx] == 1) {
      diff--;
    } else if (alpha[idx] == 0) {
      diff++;
    }
    alpha[idx]--;
  }
  if (diff == 0 && hash.has(s.substring(0, wordLen))) {
    const 
  }
};
