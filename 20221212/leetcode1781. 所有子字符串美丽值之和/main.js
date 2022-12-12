/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-12 08:44:46                                                  *
 * @LastModifiedDate: 2022-12-12 10:12:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个字符串的 美丽值 定义为：出现频率最高字符与出现频率最低字符的出现次数之差。

// 比方说，"abaacc" 的美丽值为 3 - 1 = 2 。
// 给你一个字符串 s ，请你返回它所有子字符串的 美丽值 之和。

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  // 因为s的长度最大为500，所以可以使用暴击法
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 3; j <= n; j++) {
      ans += getBeautyValue(s, i, j);
    }
  }
  return ans;
};

var getBeautyValue = (str, start, end) => {
  const hash = new Map();
  for (let i = start; i < end; i++) {
    hash.has(str[i])
      ? hash.set(str[i], hash.get(str[i]) + 1)
      : hash.set(str[i], 1);
  }
  let min = Infinity;
  let max = -Infinity;
  for (const [_key, value] of hash) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return max - min;
};

// 0 1 2 3
//

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    const arr = new Array(26).fill(0);
    arr[s[i].charCodeAt() - "a".charCodeAt()]++;
    arr[s[i + 1].charCodeAt() - "a".charCodeAt()]++;
    let curMax = -Infinity;
    for (let j = i + 2; j < n; j++) {
      arr[s[j].charCodeAt() - "a".charCodeAt()]++;
      let curMin = Infinity;
      for (let i = 0; i < 26; i++) {
        curMax = Math.max(curMax, arr[i]);
        if (arr[i] > 0) {
          curMin = Math.min(curMin, arr[i]);
        }
      }
      ans += curMax - curMin;
    }
  }
  return ans;
};
