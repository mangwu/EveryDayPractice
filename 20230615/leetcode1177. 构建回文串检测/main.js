/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-15 08:41:08                                                  *
 * @LastModifiedDate: 2023-06-15 09:12:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，请你对 s 的子串进行检测。

// 每次检测，待检子串都可以表示为 queries[i] = [left, right, k]。我们可以 重新排列 子串 s[left], ..., s[right]，并从中选择 最多 k 项替换成任何小写英文字母。

// 如果在上述检测过程中，子串可以变成回文形式的字符串，那么检测结果为 true，否则结果为 false。

// 返回答案数组 answer[]，其中 answer[i] 是第 i 个待检子串 queries[i] 的检测结果。

// 注意：在替换时，子串中的每个字母都必须作为 独立的 项进行计数，也就是说，如果 s[left..right] = "aaa" 且 k = 2，我们只能替换其中的两个字母。（另外，任何检测都不会修改原始字符串 s，可以认为每次检测都是独立的）

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  // 遍历s，将每次的结果都进行保存
  const aphla = new Array(26).fill(0);
  const prefix = [aphla.slice()];
  for (const ch of s) {
    aphla[ch.charCodeAt() - "a".charCodeAt()]++;
    prefix.push(aphla.slice());
  }
  const ans = [];
  for (const query of queries) {
    const [left, right, k] = query;
    const newAphla = getAphlaDiff(prefix[right + 1], prefix[left]);
    // 计算回文要替换的数字
    let m = 0;
    for (const item of newAphla) {
      if (item % 2 === 1) m++;
    }
    // 有 m 个不同的单字符
    // 判断子字符串的长度奇偶性
    if ((right - left + 1) % 2 === 1) m--;
    ans.push(m / 2 <= k);
  }
  return ans;
};

var getAphlaDiff = function (aphla1, aphla2) {
  const aphla = new Array(26).fill(0);
  for (let i = 0; i < 26; i++) {
    aphla[i] = aphla1[i] - aphla2[i];
  }
  return aphla;
};
