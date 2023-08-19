/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-19 22:39:03                                                  *
 * @LastModifiedDate: 2023-08-19 22:49:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 str1 和 str2 。

// 一次操作中，你选择 str1 中的若干下标。对于选中的每一个下标 i ，你将 str1[i] 循环 递增，变成下一个字符。也就是说 'a' 变成 'b' ，'b' 变成 'c' ，以此类推，'z' 变成 'a' 。

// 如果执行以上操作 至多一次 ，可以让 str2 成为 str1 的子序列，请你返回 true ，否则返回 false 。

// 注意：一个字符串的子序列指的是从原字符串中删除一些（可以一个字符也不删）字符后，剩下字符按照原本先后顺序组成的新字符串。
const APHLA = "abcdefghijklmnopqrstuvwxyz".split("");
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  if (len1 < len2) return false;
  // str2的每位有两个可选的序列
  const str2Arr = str2.split("").map((v) => {
    return [v, APHLA[(v.charCodeAt() - "a".charCodeAt() + 25) % 26]];
  });
  // 双指针进行匹配
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (str1[i] === str2Arr[j][0] || str1[i] === str2Arr[j][1]) {
      j++;
    }
    i++;
  }
  return j === len2;
};
