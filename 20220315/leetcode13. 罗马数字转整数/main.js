/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-15 19:43:09                                                  *
 * @LastModifiedDate: 2022-03-15 19:59:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97#knowledge_article
// 将罗马数字转化为整数
// 规则
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，
// 例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
// 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 遍历s，考虑6种特殊情况，其余按照相加考虑
  let len = s.length;
  // 构建一个罗马-数字字符表
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  // sum =
  for (let i = 0; i < len; i++) {
    const ch = s[i];
    if (ch == "I" && i + 1 < len) {
      // 判断右边是否为 V或者X
      if (s[i + 1] == "V" || s[i + 1] == "X") {
        sum += obj[s[i + 1]] - 1;
        i++;
        continue;
      }
    } else if (ch == "X" && i + 1 < len) {
      // 判断右边是否为 L或者C
      if (s[i + 1] == "L" || s[i + 1] == "C") {
        sum += obj[s[i + 1]] - 10;
        i++;
        continue;
      }
    } else if (ch == "C" && i + 1 < len) {
      // 判断右边是否为 L或者C
      if (s[i + 1] == "D" || s[i + 1] == "M") {
        sum += obj[s[i + 1]] - 100;
        i++;
        continue;
      }
    }
    sum += obj[ch];
  }
  return sum;
};

// 6中情况统一就是 => 当前罗马符号比右边符号小，减去就好

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 遍历s，考虑6种特殊情况，其余按照相加考虑
  let len = s.length;
  // 构建一个罗马-数字字符表
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  // sum =
  for (let i = 0; i < len; i++) {
    const ch = s[i];
    if (i + 1 < len && obj[ch] < obj[s[i + 1]]) {
      sum -= obj[ch];
    } else {
      sum += obj[ch];
    }
  }
  return sum;
};
