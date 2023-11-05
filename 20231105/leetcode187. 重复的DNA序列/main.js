/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-05 20:40:29                                                  *
 * @LastModifiedDate: 2023-11-05 20:49:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

// 例如，"ACGAATTCCG" 是一个 DNA序列 。
// 在研究 DNA 时，识别 DNA 中的重复序列非常有用。

// 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n - 9; i++) {
    const cur = s.substring(i, i + 10);
    hash.set(cur, (hash.get(cur) || 0) + 1);
  }
  const ans = [];
  for (const [key, value] of hash) {
    if (value > 1) ans.push(key);
  }
  return ans;
};
