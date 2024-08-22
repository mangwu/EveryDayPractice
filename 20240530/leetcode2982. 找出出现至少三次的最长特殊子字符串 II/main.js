/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-30 08:47:46                                                  *
 * @LastModifiedDate: 2024-05-30 10:43:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由小写英文字母组成的字符串 s 。

// 如果一个字符串仅由单一字符组成，那么它被称为 特殊 字符串。例如，字符串 "abc" 不是特殊字符串，而字符串 "ddd"、"zz" 和 "f" 是特殊字符串。

// 返回在 s 中出现 至少三次 的 最长特殊子字符串 的长度，如果不存在出现至少三次的特殊子字符串，则返回 -1 。

// 子字符串 是字符串中的一个连续 非空 字符序列。

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    let start = i;
    while (i + 1 < n && s[i + 1] === ch) {
      // 相同连续字符
      i++;
    }
    for (let j = start; j <= i; j++) {
      const curStr = ch + (j - start + 1);
      hash.set(curStr, (hash.get(curStr) | 0) + i - j + 1);
    }
  }
  let ans = -1;
  for (const [str, num] of hash) {
    if (num >= 3) ans = Math.max(ans, parseInt(str.substring(1)));
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  // 二分查找
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n && s[j] === s[i]) {
      j++;
    }
    hash.has(s[i]) ? hash.get(s[i]).push(j - i) : hash.set(s[i], [j - i]);
    i = j - 1;
  }
  let res = -1;
  for (const [_ch, arr] of hash) {
    // 找到最长的出现出现次数大于等于3次的长度
    let low = 1;
    let hi = n - 2;
    while (low <= hi) {
      const mid = (low + hi) >> 1;
      let count = 0;
      for (const len of arr) {
        if (len >= mid) {
          count += len - mid + 1;
        }
      }
      if (count >= 3) {
        low = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    if (hi > 0) res = Math.max(res, hi);
  }
  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  // 一次遍历
  // 保存每个字符的三个最长长度最大的连续子字符串l1,l2,l3
  // 不用保存第四个，因为l4的长度不可能成为答案，或者l3长度等于l4
  // 如果l4 < l3，那么答案肯定不是l4，因为l1,l2,l3都存在一个l3长度的字符串
  // 如果l4 = l3，那么答案就可能是l3，是l4的情况已经被包括了，不用考虑l4
  // res = max(l1 - 2, min(l1-1, l2), l3)

  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n && s[j] === s[i]) {
      j++;
    }
    const len = j - i;
    if (!hash.has(s[i])) hash.set(s[i], new Array(3).fill(-1));
    const arr = hash.get(s[i]);
    if (len > arr[0]) {
      [arr[0], arr[1], arr[2]] = [len, arr[0], arr[1]];
    } else if (len > arr[1]) {
      [arr[1], arr[2]] = [len, arr[1]];
    } else if (len > arr[2]) {
      arr[2] = len;
    }
    i = j - 1;
  }
  let res = -1;
  for (const [_ch, arr] of hash) {
    res = Math.max(arr[0] - 2, Math.min(arr[0] - 1, arr[1]), arr[2], res);
  }
  return res > 0 ? res : -1;
};
