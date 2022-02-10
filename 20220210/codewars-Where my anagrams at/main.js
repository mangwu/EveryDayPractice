/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-10 13:27:51                                                  *
 * @LastModifiedDate: 2022-02-10 14:11:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 变位词（anagram）：指的是由相同字母构成，当时字母顺序异构的单词
// 如abba 与  baab互为变位词，而abbba 不是它们的变位词

// 给定一个原始词word，和一个单词数组words，找出words中是word的变位词组成的数组
// 注意，相同的词也符合条件

/**
 * @description 返回变位词数组
 * @param {String} word 原始词
 * @param {Array} words 单词数组
 * @returns {Array} 变位词数组
 */
function anagrams(word, words) {
  // 判断一个词是否为变位词是本题的关键
  // 首先，如果词的长度不相等，那么一定不是变位词
  // 使用hash表记录word的每个字符和字符数量
  // 遍历words中的单词，对于长度相等的单词进行判断
  // 复杂一份word的hash，对照减去字符，保证字符数量最终等于0即是变位词

  const ans = [];
  const len = word.length;
  // hash
  const map = new Map();
  for (const ch of word) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }
  // 遍历words
  for (const w of words) {
    if (w.length === len) {
      // 字符长度相等
      const copy = new Map(map);
      // 查看是否是变位词
      let isAnagram = true;
      for (const ch of w) {
        if (copy.has(ch) && copy.get(ch) > 0) {
          copy.set(ch, copy.get(ch) - 1);
        } else {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        ans.push(w);
      }
    }
  }
  return ans;
}

// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);

// 下面一种通过字符排序的方法

/**
 * @description 返回变位词数组
 * @param {String} word 原始词
 * @param {Array} words 单词数组
 * @returns {Array} 变位词数组
 */
function anagrams2(word, words) {
  // 排序后进行过滤比较
  const newWord = word.split("").sort().join("");
  return words.filter((w) => w.split("").sort().join("") == newWord);
}

console.log(anagrams2("abba", ["aabb", "abcd", "bbaa", "dada", "baba"]));
