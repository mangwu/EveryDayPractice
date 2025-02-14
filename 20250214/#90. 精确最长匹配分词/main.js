/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 01:31:10                                                  *
 * @LastModifiedDate: 2025-02-15 01:51:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个连续不包含空格的字符串，该字符串仅包含英文小写字母及英文标点符号（逗号、分号、句号），同时给定词库，对该字符串进行精确分词。

// 说明：

// 精确分词：字符串分词后，不会出现重叠。即"ilovechina"，不同词库可分割为"i,love,china"，"ilove,china"，不能分割出现重叠的"i,ilove,china"，i 出现重叠
// 标点符号不成词，仅用于断句
// 词库：根据外部知识库统计出来的常用词汇例：dictionary = ["i", "love", "china", "lovechina", "ilove"]
// 分词原则：采用分词顺序优先且最长匹配原则 "ilovechina"，假设分词结果 [i,ilove,lo,love,ch,china,lovechina]，则输出 [ilove,china] 错误输出：[i,lovechina]，原因："ilove" > 优先于 "lovechina" 成词 错误输出：[i,love,china]，原因："ilove" > "i"遵循最长匹配原则
// 输入描述

// 第一行输入待分词语句 "ilovechina"，字符串长度限制：0 < length < 256

// 第二行输入中文词库

// "i,love,china,ch,na,ve,lo,this,is,this,word"，词库长度限制：1 < length < 100000

// 输出描述

// 按顺序输出分词结果 "i,love,china"

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  const words = inputs[1].split(",");
  const trie = {};
  for (const word of words) {
    let node = trie;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  const res = [];
  // 查找str
  const n = str.length;
  for (let i = 0; i < n; i++) {
    let lastMatch = -1;
    let node = trie;
    for (let j = i; j < n; j++) {
      const ch = str[j];
      if (node[ch]) {
        node = node[ch];
        if (node.isEnd) lastMatch = j;
      } else break;
    }
    if (lastMatch !== -1) {
      // 最长匹配
      res.push(str.substring(i, lastMatch + 1));
      i = lastMatch;
    } else {
      // 单字符
      res.push(str[i]);
    }
  }
  console.log(res.join(","))
}
solution();
