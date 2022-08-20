/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-20 22:37:28                                                  *
 * @LastModifiedDate: 2022-08-20 23:00:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二进制字符串 s 。在一秒之中，所有 子字符串 "01" 同时 被替换成 "10" 。
// 这个过程持续进行到没有 "01" 存在。

// 请你返回完成这个过程所需要的秒数。

/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  // 相当于右移
  // 计算第一个0，右边1的个数
  let ans = 0;
  let hasFirst = false;
  for (const ch of s) {
    if (hasFirst) {
      if (ch == "1") {
        ans++;
      }
      continue;
    }
    if (ch == "0") {
      hasFirst = true;
    }
  }
  return ans;
};

// 100101011101
// 101010101110
// 110101010110
// 111010101010
// 111101010100
// 111110101000
// 111111010000
// 111111100000

// 110101011101
// 111010101110
// 111101010110
// 111110101010
// 111111010110
// 111111101010
// 111111110100
// 111111111000

/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  const res = s.split("");
  let ones = "1";
  for (const ch of s) {
    if (ch == "1") {
      ones++;
    }
  }
  let k = "1".repeat(ones - 1);
  const n = s.length;
  let ans = 0;
  while (res.join("").substring(0, ones - 1) !== k) {
    for (let i = 0; i < n - 1; i++) {
      if (res[i] == "0" && res[i + 1] == "1") {
        res[i] = "1";
        res[i + 1] = "0";
        i++;
      }
    }
    ans++;
  }
  return ans;
};
