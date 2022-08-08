/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-08 09:25:18                                                  *
 * @LastModifiedDate: 2022-08-08 11:17:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 特殊的二进制序列是具有以下两个性质的二进制序列：

// 0 的数量与 1 的数量相等。
// 二进制序列的每一个前缀码中 1 的数量要大于等于 0 的数量。
// 给定一个特殊的二进制序列 S，以字符串形式表示。
// 定义一个操作 为首先选择 S 的两个连续且非空的特殊的子串，然后将它们交换。
// （两个子串为连续的当且仅当第一个子串的最后一个字符恰好为第二个子串的第一个字符的前一个字符。)

/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  if (s.length <= 2) {
    return s;
  }
  let subs = [];
  let left = 0;
  let cnts = 0;
  for (let i = 0; i < s.length; i++) {
    // 遍历搜索一个子特殊序列
    if (s[i] == "1") {
      cnts++;
    } else {
      cnts--;
      if (cnts == 0) {
        // 找到一个子特殊序列
        subs.push("1" + makeLargestSpecial(s.substring(left + 1, i)) + "0");
        left = i + 1;
      }
    }
  }
  subs.sort().reverse();
  return subs.join("");
};
