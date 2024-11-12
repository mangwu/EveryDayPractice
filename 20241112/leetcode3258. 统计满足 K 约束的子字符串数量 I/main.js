/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-12 17:17:39                                                  *
 * @LastModifiedDate: 2024-11-12 18:08:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 二进制 字符串 s 和一个整数 k。

// 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：

// 字符串中 0 的数量最多为 k。
// 字符串中 1 的数量最多为 k。
// 返回一个整数，表示 s 的所有满足 k 约束 的
// 子字符串
// 的数量。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  // 双指针
  const n = s.length;
  let zeroNum = 0;
  let oneNum = 0;
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < n) {
    while (left < right && zeroNum > k && oneNum > k) {
      if (s[left++] === "0") {
        zeroNum--;
      } else {
        oneNum--;
      }
    }
    while (right < n && (zeroNum <= k || oneNum <= k)) {
      if (s[right++] === "0") {
        zeroNum++;
      } else {
        oneNum++;
      }
    }
    res += right - left;
  }
  if (left < n) {
    left = n - left - 1;
    res += ((left + 1) * left) / 2;
  }
  return res;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  // 暴力解法
  const n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let oneNum = 0;
    let zeroNum = 0;
    for (let j = i; j < n; j++) {
      if (s[j] === "1") oneNum++;
      else zeroNum++;
      if (oneNum > k && zeroNum > k) {
        res += j - i;
        console.log(i, j);
        break;
      }
    }
    if (oneNum <= k || zeroNum <= k) res += n - i;
  }
  return res;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  // 双指针解法
  const n = s.length;
  let zeroNum = 0;
  let oneNum = 0;
  let right = 0;
  let res = 0;
  for (let left = 0; left < n; left++) {
    while (right < n) {
      // 找到满足条件的后一位right值
      if (s[right++] === "0") zeroNum++;
      else oneNum++;
      if (zeroNum <= k || oneNum <= k) {
        continue;
      } else {
        if (s[--right] === "0") zeroNum--;
        else oneNum--;
        break;
      }
    }
    res += right - left;
    // 减去
    if (s[left] === "0") {
      zeroNum--;
    } else {
      oneNum--;
    }
  }
  return res;
};
