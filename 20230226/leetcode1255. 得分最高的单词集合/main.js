/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-26 20:06:10                                                  *
 * @LastModifiedDate: 2023-02-26 22:19:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你将会得到一份单词表 words，一个字母表 letters （可能会有重复字母），以及每个字母对应的得分情况表 score。

// 请你帮忙计算玩家在单词拼写游戏中所能获得的「最高得分」：能够由 letters 里的字母拼写出的 任意 属于 words 单词子集中，分数最高的单词集合的得分。

// 单词拼写游戏的规则概述如下：

// 玩家需要用字母表 letters 里的字母来拼写单词表 words 中的单词。
// 可以只使用字母表 letters 中的部分字母，但是每个字母最多被使用一次。
// 单词表 words 中每个单词只能计分（使用）一次。
// 根据字母得分情况表score，字母 'a', 'b', 'c', ... , 'z' 对应的得分分别为 score[0], score[1], ..., score[25]。
// 本场游戏的「得分」是指：玩家所拼写出的单词集合里包含的所有字母的得分之和。

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  // 计算words中每个单词的分数
  const wordHash = new Map();
  for (const word of words) {
    if (wordHash.has(word)) {
      wordHash.get(word)[2]++;
    } else {
      const h = new Map();
      let s = 0;
      for (const ch of word) {
        s += score[ch.charCodeAt() - "a".charCodeAt()];
        h.has(ch) ? h.set(ch, h.get(ch) + 1) : h.set(ch, 1);
      }
      wordHash.set(word, [s, h, 1]);
    }
  }
  words = words
    .sort((a, b) => wordHash.get(b)[0] - wordHash.get(a)[0])
    .filter((v) => wordHash.get(v)[0] !== 0);
  const n = words.length;
  const aphla = new Array(26).fill(0);
  for (const letter of letters) {
    aphla[letter.charCodeAt() - "a".charCodeAt()]++;
  }
  let res = 0;
  const dfs = (i, s) => {
    if (i === n) {
      res = Math.max(res, s);
      return;
    }
    // 不选当前的word
    dfs(i + 1, s);
    // 选择当前word
    const info = wordHash.get(words[i]);
    s += info[0];
    let flag = true;
    for (const [key, value] of info[1]) {
      let code = key.charCodeAt() - "a".charCodeAt();
      aphla[code] -= value;
      if (aphla[code] < 0) flag = false;
    }
    if (flag) {
      dfs(i + 1, s);
    }
    // 回溯
    for (const [key, value] of info[1]) {
      let code = key.charCodeAt() - "a".charCodeAt();
      aphla[code] += value;
    }
  };
  dfs(0, 0);
  return res;
};
