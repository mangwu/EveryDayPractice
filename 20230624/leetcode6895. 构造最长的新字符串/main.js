/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-24 22:39:30                                                  *
 * @LastModifiedDate: 2023-06-24 23:59:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你三个整数 x ，y 和 z 。

// 这三个整数表示你有 x 个 "AA" 字符串，y 个 "BB" 字符串，和 z 个 "AB" 字符串。你需要选择这些字符串中的部分字符串（可以全部选择也可以一个都不选择），将它们按顺序连接得到一个新的字符串。新字符串不能包含子字符串 "AAA" 或者 "BBB" 。

// 请你返回新字符串的最大可能长度。

// 子字符串 是一个字符串中一段连续 非空 的字符序列。

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function (x, y, z) {
  let res = 0;
  let min = Math.min(x, y, z);
  if (min > 0) {
    res += min * 6;
    x -= min;
    y -= min;
    z -= min;
    if (x === 0 && y === 0) {
      res += z * 2;
      return res;
    }
    if (z === 0) {
      if (x === 0) {
        res += 2;
      } else if (y === 0) {
        res += 2;
      } else if (x === y) {
        res += x * 4;
      } else {
        res += (Math.min(x, y) * 2 + 1) * 2
      }
      return res;
    }
    
  }
};

// BBABAA
// z的左边一定是y, 右边一定是x

//  AABBABAABB   BBABAA

// BBABAB
// AB