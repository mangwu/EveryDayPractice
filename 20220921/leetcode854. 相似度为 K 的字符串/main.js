/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-21 08:52:01                                                  *
 * @LastModifiedDate: 2022-09-21 10:01:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对于某些非负整数 k ，如果交换 s1 中两个字母的位置恰好 k 次，能够使结果字符串等于 s2 ，
// 则认为字符串 s1 和 s2 的 相似度为 k 。

// 给你两个字母异位词 s1 和 s2 ，返回 s1 和 s2 的相似度 k 的最小值。

// s1 和 s2  只包含集合 {'a', 'b', 'c', 'd', 'e', 'f'} 中的小写字母
// s2 是 s1 的一个字母异位词
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function (s1, s2) {
  let n = s1.length;
  // 可以将s1和s2同位置同字符的进行删除
  let newS1 = "";
  let newS2 = "";
  for (let i = 0; i < n; i++) {
    if (s1[i] == s2[i]) {
      continue;
    }
    newS1 += s1[i];
    newS2 += s2[i];
  }
  s1 = newS1;
  s2 = newS2;
  n = s1.length;
  const hash1 = new Map();
  const hash2 = new Map();
  for (let i = 0; i < n; i++) {
    hash1.has(s1[i]) ? hash1.get(s1[i]).push(i) : hash1.set(s1[i], [i]);
    hash2.has(s2[i]) ? hash2.get(s2[i]).push(i) : hash2.set(s2[i], [i]);
  }
  // 记录选择的情况
  const hash = new Map();
  // 状态压缩
  const dfs = (useNumber, total, pre) => {
    if(pre & )
  }
};

//   abc  bca

//  0 -> 2  1 -> 0 2 -> 1

// abcd  dabc

// 0 -> 1 -> 2 -> 3 -> 1

// abcdabc
// dabcbca

// 0 -> 1 -> 2 -> 3 -> 0
// 4 -> 6 5 -> 4 6 -> 5

// 0 -> 6 -> 3 -> 0   2
// 1 -> 4 -> 1    1
// 2 -> 5 -> 2    1
