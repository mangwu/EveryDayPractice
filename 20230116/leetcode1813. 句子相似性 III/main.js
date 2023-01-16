/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-16 09:57:29                                                  *
 * @LastModifiedDate: 2023-01-16 11:17:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个句子是由一些单词与它们之间的单个空格组成，且句子的开头和结尾没有多余空格。比方说，"Hello World" ，"HELLO" ，"hello world hello world" 都是句子。每个单词都 只 包含大写和小写英文字母。

// 如果两个句子 sentence1 和 sentence2 ，可以通过往其中一个句子插入一个任意的句子（可以是空句子）而得到另一个句子，那么我们称这两个句子是 相似的 。比方说，sentence1 = "Hello my name is Jane" 且 sentence2 = "Hello Jane" ，我们可以往 sentence2 中 "Hello" 和 "Jane" 之间插入 "my name is" 得到 sentence1 。

// 给你两个句子 sentence1 和 sentence2 ，如果 sentence1 和 sentence2 是相似的，请你返回 true ，否则返回 false 。

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1.length < sentence2.length) {
    return areSentencesSimilar(sentence2, sentence1);
  }
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");
  // 往words2里塞句子，可以是空句子
  const n1 = words1.length;
  const n2 = words2.length;
  if (n1 < n2) {
    return false;
  }
  for (let i = 0; i <= n2; i++) {
    // 塞入words2[i]前
    let flag = false;
    for (let j = 0; j < i; j++) {
      if (words1[j] !== words2[j]) {
        flag = true;
        break;
      }
    }
    if (flag) continue;
    flag = false;
    for (let j = n1 - 1, k = n2 - 1; k >= i; k--, j--) {
      if (words1[j] !== words2[k]) {
        flag = true;
        break;
      }
    }
    if (flag) continue;
    return true;
  }
  return false;
};

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1.length < sentence2.length) {
    return areSentencesSimilar(sentence2, sentence1);
  }
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");
  // 往words2里塞句子，可以是空句子
  const n1 = words1.length;
  const n2 = words2.length;
  if (n1 < n2) {
    return false;
  }
  
  
};
