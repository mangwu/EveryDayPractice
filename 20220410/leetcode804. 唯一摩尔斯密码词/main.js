/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-10 20:27:52                                                  *
 * @LastModifiedDate: 2022-04-10 20:39:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如:

// 'a' 对应 ".-" ，
// 'b' 对应 "-..." ，
// 'c' 对应 "-.-." ，以此类推。
// 为了方便，所有 26 个英文字母的摩尔斯密码表如下：

const Mores = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
// 给你一个字符串数组 words ，每个单词可以写成每个字母对应摩尔斯密码的组合。

// 例如，"cab" 可以写成 "-.-..--..." ，(即 "-.-." + ".-" + "-..." 字符串的结合)。
// 我们将这样一个连接过程称作 单词翻译 。
// 对 words 中所有单词进行单词翻译，返回不同 单词翻译 的数量。

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set();
  for (const word of words) {
    let morscode = "";
    for (const ch of word) {
      morscode += Mores[ch.charCodeAt() - "a".charCodeAt()];
    }
    set.add(morscode);
  }
  return set.size;
};
