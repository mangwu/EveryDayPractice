/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-19 13:52:55                                                  *
 * @LastModifiedDate: 2023-03-19 15:37:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 以及两个整数 a 和 b 。其中，字符串 s 的长度为偶数，且仅由数字 0 到 9 组成。

// 你可以在 s 上按任意顺序多次执行下面两个操作之一：

// 累加：将  a 加到 s 中所有下标为奇数的元素上（下标从 0 开始）。数字一旦超过 9 就会变成 0，如此循环往复。例如，s = "3456" 且 a = 5，则执行此操作后 s 变成 "3951"。
// 轮转：将 s 向右轮转 b 位。例如，s = "3456" 且 b = 1，则执行此操作后 s 变成 "6345"。
// 请你返回在 s 上执行上述操作任意次后可以得到的 字典序最小 的字符串。

// 如果两个字符串长度相同，那么字符串 a 字典序比字符串 b 小可以这样定义：在 a 和 b 出现不同的第一个位置上，字符串 a 中的字符出现在字母表中的时间早于 b 中的对应字符。例如，"0158” 字典序比 "0190" 小，因为不同的第一个位置是在第三个字符，显然 '5' 出现在 '9' 之前。

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const set = new Set([s]);
  const str = s.split("").map((v) => parseInt(v));
  const n = str.length;
  let start = 0; // 起始点，轮转b相当于start加b
  while (true) {
    let res = "";
    for (let i = 1; i < n; i += 2) {
      let cur = (start + i) % n;
      str[cur] = (str[cur] + a) % 10;
      res += str[cur];
      res += str[(cur + 1) % n];
    }
    start += b;
    start %= n;
    if (set.has(res)) break;
    set.add(res);
  }
  return [...set].sort((a, b) => a - b)[0];
};

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  // 如果b是偶数，那么
}

// 1 1 2 3 4 5
// 4 5 1 1 2 3
// 2 3 4 5 1 1
     
// 奇数轮转
// 