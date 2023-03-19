/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-19 13:52:55                                                  *
 * @LastModifiedDate: 2023-03-20 00:14:38                                      *
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
  // 先进行轮转
  const n = s.length;
  const set = new Set([s]);
  let start = b;
  while (true) {
    let cur = "";
    for (let i = 0; i < n; i++) {
      cur += s[(i + start) % n];
    }
    if (set.has(cur)) break;
    set.add(cur);
    start += b;
  }
  const arr = [...set];
  for (const item of arr) {
    for (let i = 1; i <= 9; i++) {
      // 添加第10次就循环了
      let cur = "";
      let cur2 = "";
      for (let j = 1; j < n; j += 2) {
        cur += item[j - 1] + ((parseInt(item[j]) + i * a) % 10);
      }
      set.add(cur);
      for (let j = 0; j < n; j += 2) {
        cur2 += ((parseInt(item[j]) + i * a) % 10) + item[j + 1];
      }
      set.add(cur2);
    }
  }
  return [...set].sort((a, b) => a - b)[0];
};

// 1 1 2 3 4 5
// 4 5 1 1 2 3
// 2 3 4 5 1 1

// 奇数轮转
//

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  // 先进行轮转
  const n = s.length;
  const vis = new Array(n).fill(false);
  let res = s;
  s = s + s; // 方便轮转
  // 进行轮转
  for (let i = 0; !vis[i]; i = (i + b) % n) {
    vis[i] = true;
    for (let j = 0; j < 10; j++) {
      // b如果是偶数，就只会对字符串上的偶数位进行翻转
      let kLimit = b % 2 === 0 ? 0 : 9;
      for (let k = 0; k <= kLimit; k++) {
        const t = [...s.slice(i, i + n)];
        for (let p = 1; p < n; p += 2) {
          t[p] = String.fromCharCode(
            "0".charCodeAt() +
              ((t[p].charCodeAt() - "0".charCodeAt() + j * a) % 10)
          );
        }
        for (let p = 0; p < n; p += 2) {
          t[p] = String.fromCharCode(
            "0".charCodeAt() +
              ((t[p].charCodeAt() - "0".charCodeAt() + k * a) % 10)
          );
        }
        const tStr = t.join("");
        if (tStr < res) {
          res = tStr;
        }
      }
    }
  }
  return res;
};

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  // 先进行轮转
  const n = s.length;
  const set = new Set();
  let res = s;
  let start = 0;
  // 进行轮转
  while (true) {
    let curS = "";
    for (let i = 0; i < n; i++) curS += s[(i + start) % n];
    if (set.has(curS)) break;
    set.add(curS);
    start += b;
    // 进行累加，如果b是偶数，则只能对奇数进行增加
    for (let j = 0; j < 10; j++) {
      let kLimit = b % 2 ? 9 : 0;
      for (let k = 0; k <= kLimit; k++) {
        let str = "";
        for (let p = 0; p < n; p++) {
          str += (parseInt(curS[p]) + (((p % 2 === 1 ? j : k) * a) % 10)) % 10;
        }
        if (str < res) res = str;
      }
    }
  }
  return res;
};
