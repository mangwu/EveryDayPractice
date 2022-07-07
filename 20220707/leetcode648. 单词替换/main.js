/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-07 09:11:02                                                  *
 * @LastModifiedDate: 2022-07-07 09:36:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在英语中，我们有一个叫做 词根(root) 的概念，可以词根后面添加其他一些词组成另一个较长的单词——我们称这个词为
//  继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。

// 现在，给定一个由许多词根组成的词典 dictionary 和一个用空格分隔单词形成的句子 sentence。
// 你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。

// 你需要输出替换之后的句子
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const words = sentence.split(" ");
  const n = words.length;
  for (let i = 0; i < n; i++) {
    for (const d of dictionary) {
      if (words[i].startsWith(d)) {
        words[i] = d;
      }
    }
  }
  return words.join(" ");
};
