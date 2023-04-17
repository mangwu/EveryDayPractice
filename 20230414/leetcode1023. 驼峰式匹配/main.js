/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-14 08:41:06                                                  *
 * @LastModifiedDate: 2023-04-14 09:01:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果我们可以将小写字母插入模式串 pattern 得到待查询项 query，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）

// 给定待查询列表 queries，和模式串 pattern，返回由布尔值组成的答案列表 answer。只有在待查项 queries[i] 与模式串 pattern 匹配时， answer[i] 才为 true，否则为 false。

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  // 只能插入小写字母，所以queries中的大写字母组成必须为pattern才能匹配
  const ans = [];
  const target = getUpperCh(pattern);
  const n = pattern.length;
  out: for (const querie of queries) {
    const cur = getUpperCh(querie);
    let start = 0;
    const m = querie.length;
    for (let i = 0; i < n; i++) {
      while (start < m && pattern[i] !== querie[start]) {
        start++;
      }
      if (start === m) {
        ans.push(false);
        continue out;
      }
      start++; // 本次已被比较
    }
    ans.push(cur === target);
  }
  return ans;
};

var getUpperCh = function (str) {
  let target = "";
  for (const ch of str) {
    if (
      ch.charCodeAt() >= "A".charCodeAt() &&
      ch.charCodeAt() <= "Z".charCodeAt()
    ) {
      target += ch;
    }
  }
  return target;
};
