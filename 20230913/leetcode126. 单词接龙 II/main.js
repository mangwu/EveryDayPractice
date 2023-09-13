/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-13 16:22:16                                                  *
 * @LastModifiedDate: 2023-09-13 17:11:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord -> s1 -> s2 -> ... -> sk 这样的单词序列，并满足：

// 每对相邻的单词之间仅有单个字母不同。
// 转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList 中的单词。
// sk == endWord
// 给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk] 的形式返回。

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  // 不存在endWord
  if (!wordSet.has(endWord)) return [];
  const hash = new Map();
  wordSet.add(beginWord);
  wordList = [...wordSet];
  const n = wordList.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (onlyOneChDiff(wordList[i], wordList[j])) {
        hash.has(wordList[i])
          ? hash.get(wordList[i]).push(wordList[j])
          : hash.set(wordList[i], [wordList[j]]);
        hash.has(wordList[j])
          ? hash.get(wordList[j]).push(wordList[i])
          : hash.set(wordList[j], [wordList[i]]);
      }
    }
  }
  const ans = [];
  console.log(hash);
  const visited = new Set();
  const path = [beginWord];
  visited.add(beginWord);
  const dfs = (cur) => {
    if (cur === endWord) {
      ans.push(path.slice());
      return;
    }
    const next = hash.get(cur);
    if (next) {
      for (const item of next) {
        if (!visited.has(item)) {
          path.push(item);
          visited.add(item);
          dfs(item);
          path.pop();
          visited.delete(item);
        }
      }
    }
  };
  dfs(beginWord);
  if (ans.length) {
    ans.sort((a, b) => a.length - b.length);
    const len = ans[0].length;
    for (let i = ans.length - 1; i > 0; i--) {
      if (ans[i].length !== len) ans.pop();
      else break;
    }
  }
  return ans;
};

function onlyOneChDiff(str1, str2) {
  let diff = 0;
  const n = str1.length;
  for (let i = 0; i < n; i++) if (str1[i] !== str2[i]) diff++;
  return diff === 1;
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  // 不存在endWord
  if (!wordSet.has(endWord)) return [];
  const hash = new Map();
  wordSet.add(beginWord);
  wordList = [...wordSet];
  const n = wordList.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (onlyOneChDiff(wordList[i], wordList[j])) {
        hash.has(wordList[i])
          ? hash.get(wordList[i]).push(wordList[j])
          : hash.set(wordList[i], [wordList[j]]);
        hash.has(wordList[j])
          ? hash.get(wordList[j]).push(wordList[i])
          : hash.set(wordList[j], [wordList[i]]);
      }
    }
  }
  let ans = [];
  const visited = new Set();
  const path = [beginWord];
  visited.add(beginWord);
  // console.log(hash);
  let minLen = Infinity;
  const dfs = (cur) => {
    if (cur === endWord) {
      if (path.length < minLen) {
        minLen = path.length;
        ans = [path.slice()];
      } else if (path.length === minLen) {
        ans.push(path.slice());
      }
      return;
    }
    // 减操作
    if (path.length >= minLen) return; //长度已经超过，不用寻找了
    const next = hash.get(cur);
    console.log(path.length, minLen, path[path.length - 1]);
    if (next) {
      for (const item of next) {
        if (!visited.has(item)) {
          path.push(item);
          visited.add(item);
          dfs(item);
          visited.delete(item);
          path.pop();
        }
      }
    }
  };
  dfs(beginWord);
  console.log(ans);
  return ans;
};

findLadders("qa", "sq", [
  "si",
  "go",
  "se",
  "cm",
  "so",
  "ph",
  "mt",
  "db",
  "mb",
  "sb",
  "kr",
  "ln",
  "tm",
  "le",
  "av",
  "sm",
  "ar",
  "ci",
  "ca",
  "br",
  "ti",
  "ba",
  "to",
  "ra",
  "fa",
  "yo",
  "ow",
  "sn",
  "ya",
  "cr",
  "po",
  "fe",
  "ho",
  "ma",
  "re",
  "or",
  "rn",
  "au",
  "ur",
  "rh",
  "sr",
  "tc",
  "lt",
  "lo",
  "as",
  "fr",
  "nb",
  "yb",
  "if",
  "pb",
  "ge",
  "th",
  "pm",
  "rb",
  "sh",
  "co",
  "ga",
  "li",
  "ha",
  "hz",
  "no",
  "bi",
  "di",
  "hi",
  "qa",
  "pi",
  "os",
  "uh",
  "wm",
  "an",
  "me",
  "mo",
  "na",
  "la",
  "st",
  "er",
  "sc",
  "ne",
  "mn",
  "mi",
  "am",
  "ex",
  "pt",
  "io",
  "be",
  "fm",
  "ta",
  "tb",
  "ni",
  "mr",
  "pa",
  "he",
  "lr",
  "sq",
  "ye",
]);
