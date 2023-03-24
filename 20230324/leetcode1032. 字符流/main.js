/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-24 08:45:24                                                  *
 * @LastModifiedDate: 2023-03-24 09:29:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个算法：接收一个字符流，并检查这些字符的后缀是否是字符串数组 words 中的一个字符串。

// 例如，words = ["abc", "xyz"] 且字符流中逐个依次加入 4 个字符 'a'、'x'、'y' 和 'z' ，你所设计的算法应当可以检测到 "axyz" 的后缀 "xyz" 与 words 中的字符串 "xyz" 匹配。

// 按下述要求实现 StreamChecker 类：

// StreamChecker(String[] words) ：构造函数，用字符串数组 words 初始化数据结构。
// boolean query(char letter)：从字符流中接收一个新字符，如果字符流中的任一非空后缀能匹配 words 中的某一字符串，返回 true ；否则，返回 false。

/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  // 保存最后一位
  const hash = new Map();
  for (const word of words) {
    const last = word[word.length - 1];
    if (hash.has(last)) {
      hash.get(last)[0].add(word);
      hash.get(last)[1] = Math.max(hash.get(last)[1], word.length);
    } else {
      hash.set(last, [new Set([word]), word.length]);
    }
  }
  this.hash = hash;
  this.cur = "";
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.cur += letter;
  if (!this.hash.has(letter)) return false;
  const [curSet, length] = this.hash.get(letter);
  const len = this.cur.length;
  let num = Math.min(len, 200, length);
  for (let i = 0; i < num; i++) {
    if (curSet.has(this.cur.substring(len - i - 1, len))) return true;
  }
  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
