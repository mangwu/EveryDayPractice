/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-27 08:38:03                                                  *
 * @LastModifiedDate: 2023-03-27 09:09:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 s 和 t ，请你找出 s 中的非空子串的数目，这些子串满足替换 一个不同字符 以后，是 t 串的子串。换言之，请你找到 s 和 t 串中 恰好 只有一个字符不同的子字符串对的数目。

// 比方说， "computer" and "computation" 只有一个字符不同： 'e'/'a' ，所以这一对子字符串会给答案加 1 。

// 请你返回满足上述条件的不同子字符串对数目。

// 一个 子字符串 是一个字符串中连续的字符。

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  // 可以遍历两遍，得到s或t的所有子字符串
  const hash = new Map();
  const m = t.length;
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j <= m; j++) {
      let cur = t.substring(i, j);
      hash.has(cur.length)
        ? hash.get(cur.length).push(cur)
        : hash.set(cur.length, [cur]);
    }
  }
  const n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let cur = s.substring(i, j);
      if (hash.has(cur.length)) {
        const curHash = new Map();
        const arr = hash.get(cur.length);
        for (const item of arr) {
          if (curHash.has(item)) {
            res += curHash.get(item);
            continue;
          }
          let curRes = hasOneDiff(cur, item) ? 1 : 0;
          res += curRes;
          curHash.set(item, curRes);
        }
      } else {
        break;
      }
    }
  }
  return res;
};

var hasOneDiff = function (s1, s2) {
  const n = s1.length;
  let diff = 0;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) diff++;
  }
  return diff === 1;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  // 可以遍历两遍，得到s或t的所有子字符串
  const hash = new Map();
  const m = t.length;
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j <= m; j++) {
      let cur = t.substring(i, j);
      hash.has(cur.length)
        ? hash.get(cur.length).push(cur)
        : hash.set(cur.length, [cur]);
    }
  }
  const n = s.length;
  let res = 0;
  const curHash = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let cur = s.substring(i, j);
      if (hash.has(cur.length)) {
        const arr = hash.get(cur.length);
        for (const item of arr) {
          if (curHash.has(cur + item)) {
            res += curHash.get(cur + item);
            continue;
          }
          let curRes = hasOneDiff(cur, item) ? 1 : 0;
          res += curRes;
          curHash.set(cur + item, curRes);
        }
      } else {
        break;
      }
    }
  }
  return res;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  // 枚举，计算s和t所有起点相同长度的字符串比较是否满足题意
  // 如果计算得出的diff大于1，可以切换起点重新开始了
  const m = s.length;
  const n = t.length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let diff = 0;
      // k 表示长度（从0开始易于获取最后一位字符）
      for (let k = 0; i + k < m && j + k < n; k++) {
        diff += s[i + k] === t[j + k] ? 0 : 1;
        if (diff > 1) break;
        else if (diff === 1) res++;
      }
    }
  }
  return res;
};
