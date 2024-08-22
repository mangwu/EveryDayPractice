/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-27 09:12:02                                                  *
 * @LastModifiedDate: 2024-06-27 09:44:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由小写英文字母组成的字符串 s 。在一步操作中，你可以完成以下行为：

// 选择 s 的任一非空子字符串，可能是整个字符串，接着将字符串中的每一个字符替换为英文字母表中的前一个字符。例如，'b' 用 'a' 替换，'a' 用 'z' 替换。
// 返回执行上述操作 恰好一次 后可以获得的 字典序最小 的字符串。

// 子字符串 是字符串中的一个连续字符序列。

// 现有长度相同的两个字符串 x 和 字符串 y ，在满足 x[i] != y[i] 的第一个位置 i 上，如果  x[i] 在字母表中先于 y[i] 出现，则认为字符串 x 比字符串 y 字典序更小 。

/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  // 找到第一个a
  let firstAIdx = 0;
  const n = s.length;
  while (firstAIdx < n && s[firstAIdx] !== "a") {
    firstAIdx++;
  }
  if (firstAIdx === 0) {
    // 第一个字符是a，获取前面连续的a
    while (firstAIdx < n && s[firstAIdx] === "a") firstAIdx++;
    // 全部都是字符a的特殊情况
    if (firstAIdx === n) return "a".repeat(n - 1) + "z";
    let nextAIdx = firstAIdx;
    // 找到下一个a（中间的字符需要进行一次替换）
    while (nextAIdx < n && s[nextAIdx] !== "a") nextAIdx++;
    return (
      s.slice(0, firstAIdx) +
      s
        .slice(firstAIdx, nextAIdx)
        .split("")
        .map((v) => String.fromCharCode(v.charCodeAt() - 1))
        .join("") +
      s.slice(nextAIdx, n)
    );
  } else {
    return (
      s
        .slice(0, firstAIdx)
        .split("")
        .map((v) => String.fromCharCode(v.charCodeAt() - 1))
        .join("") + s.slice(firstAIdx, n)
    );
  }
};
