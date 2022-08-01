/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-01 15:10:06                                                  *
 * @LastModifiedDate: 2022-08-01 15:49:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words 。words 中每个元素都是一个包含 两个 小写英文字母的单词。

// 请你从 words 中选择一些元素并按 任意顺序 连接它们，并得到一个 尽可能长的回文串 。
// 每个元素 至多 只能使用一次。

// 请你返回你能得到的最长回文串的 长度 。如果没办法得到任何一个回文串，请你返回 0 。

// 回文串 指的是从前往后和从后往前读一样的字符串。

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  // 对于words中相等的两个字符进行记录
  // 记录每个元素和相反元素的对数
  let count = 0;
  const hash = new Map();
  for (const word of words) {
    if (hash.has(word[1] + word[0])) {
      count += 2;
      const num = hash.get(word[1] + word[0]);
      if (num == 1) {
        hash.delete(word[1] + word[0]);
      } else {
        hash.set(word[1] + word[0], num - 1);
      }
    } else {
      const num = hash.get(word) ? hash.get(word) : 1;
      hash.set(word, num);
    }
  }
  for (const [key, _val] of hash) {
    // 查找是否存在"xx"
    if (key[0] == key[1]) {
      count++;
      break;
    }
  }
  console.log(hash);
  return count * 2;
};

// ["qo","fo","fq","qf","fo","ff","qq","qf","of","of","oo","of","of","qf","qf","of"]
//        of   qf        of

// fo of
// fo of
// fq qf
// ff

// Map(6) {
//   'qo' => 1,
//   'ff' => 1,
//   'qq' => 1,
//   'qf' => 1,
//   'of' => 1,
//   'oo' => 1
// }
