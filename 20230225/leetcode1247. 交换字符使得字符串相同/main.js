/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-25 13:08:10                                                  *
 * @LastModifiedDate: 2023-02-25 13:44:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有两个长度相同的字符串 s1 和 s2，且它们其中 只含有 字符 "x" 和 "y"，你需要通过「交换字符」的方式使这两个字符串相同。

// 每次「交换字符」的时候，你都可以在两个字符串中各选一个字符进行交换。

// 交换只能发生在两个不同的字符串之间，绝对不能发生在同一个字符串内部。也就是说，我们可以交换 s1[i] 和 s2[j]，但不能交换 s1[i] 和 s1[j]。

// 最后，请你返回使 s1 和 s2 相同的最小交换次数，如果没有方法能够使得这两个字符串相同，则返回 -1 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  // x和y的数量要是偶数
  let x1 = 0;
  let x2 = 0;
  for (const ch of s1) {
    if (ch === "x") x1++;
  }
  for (const ch of s2) {
    if (ch === "x") x2++;
  }
  if ((x1 + x2) % 2 !== 0) return -1;
  // s1和s2原本相同的地方不用交换，不同的地方要进行交换操作
  // 不同的地方肯定就是x与y相对的
  const n = s1.length;
  let diff = 0;
  let xDiff = 0;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      if (s1[i] === "x") xDiff++;
    }
  }
  if (xDiff % 2 == 0) return diff / 2;
  return diff / 2 + 1;
};

// xyyx yyxx => xy yx
//            4             5
// xxyxyxyxyx => xxxxxxxxxx => yyyyyxxxxx
// yyxyxyxyxy => yyyyyyyyyy => yyyyyxxxxx

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  // s1和s2原本相同的地方不用交换，不同的地方要进行交换操作
  // 不同的地方肯定就是x与y相对的
  const n = s1.length;
  let diff = 0;
  let xDiff = 0;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      if (s1[i] === "x") xDiff++;
    }
  }
  if (diff % 2 !== 0) return -1;
  if (xDiff % 2 == 0) return diff / 2;
  return diff / 2 + 1;
};
