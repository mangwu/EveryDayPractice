/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-27 09:03:56                                                  *
 * @LastModifiedDate: 2022-06-27 09:54:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定字符串列表 strs ，返回其中 最长的特殊序列 。如果最长特殊序列不存在，返回 -1 。

// 特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

//  s 的 子序列可以通过删去字符串 s 中的某些字符实现。

// 例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。
// "aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  const set = new Set();
  // 返回strs中的最长序列
  // 如果最长序列中存在一个没有重复的strs，就可以返回了
  while (strs.length > 0) {
    const hash = new Map();
    let pre = strs[strs.length - 1].length;
    for (let i = strs.length - 1; i >= 0; i--) {
      if (strs[i].length == pre) {
        set.add(strs[i]);
        let num = hash.get(strs[i]) ? hash.get(strs[i]) : 0;
        hash.set(strs[i], num + 1);
        strs.pop();
      } else {
        break;
      }
    }
    for (const [key, val] of hash) {
      // 只有一个
      if (val == 1) {
        let isSub = false;
        for (const str of set) {
          if (hash.has(str)) {
            continue;
          }
          if (isSubsequence(key, str)) {
            // 构成其它序列的子序列
            isSub = true;
            break;
          }
        }
        // 没有子序列
        if (!isSub) {
          return key.length;
        }
      }
    }
  }
  return -1;
};
//
/**
 * @description 判断短字符串是否构成长字符串的子序列
 * @param {string} shortStr 短字符串
 * @param {string} longStr 长字符串
 */
var isSubsequence = (shortStr, longStr) => {
  let sLen = shortStr.length;
  let lLen = longStr.length;
  let idx = 0;
  for (let i = 0; i < sLen; i++) {
    let ch = shortStr[i];
    let hasMatch = false;
    // 保证长度
    while (lLen - idx >= sLen - i && idx < lLen) {
      if (longStr[idx] == ch) {
        hasMatch = true;
        idx++;
        break;
      }
      idx++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
};
// isSubsequence("abssaoc","abassdfasasoasdcas")
