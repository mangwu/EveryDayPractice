/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-17 08:49:41                                                  *
 * @LastModifiedDate: 2022-03-17 09:04:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个字符串数组 words 组成的一本英语词典。
// 返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

// 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  // 即对于任意一个words，它的所有包含第一个字符的子串应该在words中
  const hash = new Set(words);
  // console.log(hash);
  const len = words.length;
  let max = 0;
  let ans = "";
  for (let i = len - 1; i >= 0; i--) {
    const word = words[i];
    let isAns = true;
    for (let i = 0; i < word.length; i++) {
      if (!hash.has(word.substring(0, i + 1))) {
        isAns = false;
        break;
      }
    }
    // console.log(word, isAns);
    if (isAns && word.length > max) {
      ans = word
      max = word.length;
    } else if (isAns && word.length == max) {
      ans = word < ans ? word : ans;
    }
  }
  // console.log(ans);
  return ans;
};

longestWord(["w", "wo", "wor", "worl", "world"]);
