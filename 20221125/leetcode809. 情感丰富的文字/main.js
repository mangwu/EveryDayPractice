/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-25 10:16:18                                                  *
 * @LastModifiedDate: 2022-11-25 10:36:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 有时候人们会用重复写一些字母来表示额外的感受，比如 "hello" -> "heeellooo", "hi" -> "hiii"。我们将相邻字母都相同的一串字符定义为相同字母组，例如："h", "eee", "ll", "ooo"。

// 对于一个给定的字符串 S ，如果另一个单词能够通过将一些字母组扩张从而使其和 S 相同，我们将这个单词定义为可扩张的（stretchy）。扩张操作定义如下：选择一个字母组（包含字母 c ），然后往其中添加相同的字母 c 使其长度达到 3 或以上。

// 例如，以 "hello" 为例，我们可以对字母组 "o" 扩张得到 "hellooo"，但是无法以同样的方法得到 "helloo" 因为字母组 "oo" 长度小于 3。此外，我们可以进行另一种扩张 "ll" -> "lllll" 以获得 "helllllooo"。如果 S = "helllllooo"，那么查询词 "hello" 是可扩张的，因为可以对它执行这两种扩张操作使得 query = "hello" -> "hellooo" -> "helllllooo" = S。

// 输入一组查询单词，输出其中可扩张的单词数量。

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  const n = s.length;
  const info = [];
  for (let i = 0; i < n; i++) {
    let start = i;
    while (s[i] === s[i + 1]) {
      i++;
    }
    info.push([s[i], i - start + 1]);
  }
  let ans = 0;
  for (const word of words) {
    const len = word.length;
    if (len > n) {
      continue;
    }
    let idx = 0;
    for (let i = 0; i < len; i++) {
      let start = i;
      while (word[i] === word[i + 1]) {
        i++;
      }
      let cur = i - start - 1;
      if (
        word[i] === info[idx][0] &&
        ((cur < info[idx][1] && info[idx][1] >= 3) || cur === info[idx][1])
      ) {
        idx++;
      } else {
        break;
      }
    }
    if (idx === info.length) {
      ans++;
    }
  }
  return ans;
};
