/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-11 09:04:16                                                  *
 * @LastModifiedDate: 2022-07-11 09:17:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。

// 实现 MagicDictionary 类：

// MagicDictionary() 初始化对象
// void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，
// dictionary 中的字符串互不相同
// bool search(String searchWord) 给定一个字符串 searchWord ，
// 判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。
// 如果可以，返回 true ；否则，返回 false 。

// 。

var MagicDictionary = function () {
  this.data = null;
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  dictionary.sort((a, b) => a.length - b.length);
  this.data = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  const n = searchWord.length;
  for (const d of this.data) {
    if (d.length > n) {
      return false;
    }
    if (d.length < n) {
      continue;
    }
    // 长度相等的情况
    let diff = 0;
    for (let i = 0; i < n; i++) {
      if (searchWord[i] !== d[i]) {
        diff++;
      }
      if (diff > 1) {
        break;
      }
    }
    if (diff == 1) {
      return true;
    }
  }
  return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
