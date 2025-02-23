/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-23 19:39:53                                                  *
 * @LastModifiedDate: 2025-02-23 21:17:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有两个字符串，即pattern和value。 pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。
// 例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），
// 该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。
// 编写一个方法判断value字符串是否匹配pattern字符串。

/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  const m = pattern.length;
  const n = value.length;
  const firstA = pattern.indexOf("a");
  const firstB = pattern.indexOf("b");
  if (firstA === -1 || firstB === -1) {
    // 只有一个模式
    if (n % m !== 0) return false;
    const len = n / m;
    const subStr = value.substring(0, len);
    return subStr.repeat(m) === value;
  }
  const aNum = pattern
    .split("")
    .reduce((pre, cur) => pre + Number(cur === "a"), 0);
  const bNum = m - aNum;
  let res = false;
  for (let i = 0; i <= n; i++) {
    const aLen = i;
    if ((n - aLen * aNum) % bNum !== 0) continue;
    const bLen = (n - aLen * aNum) / bNum;
    const aStr = value.substring(firstA * bLen, firstA * bLen + aLen);
    const bStr = value.substring(firstB * aLen, firstB * aLen + bLen);
    if (aStr === bStr) continue;
    const str = pattern
      .split("")
      .map((v) => (v === "a" ? aStr : bStr))
      .join("");
    res = res || str === value;
  }
  return res;
};
