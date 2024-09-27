/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-27 09:16:02                                                  *
 * @LastModifiedDate: 2024-09-27 10:09:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由字符 'a'、'b'、'c' 组成的字符串 s 和一个非负整数 k 。每分钟，你可以选择取走 s 最左侧 还是 最右侧 的那个字符。

// 你必须取走每种字符 至少 k 个，返回需要的 最少 分钟数；如果无法取到，则返回 -1 。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  if (k === 0) return 0;
  let aNum = 0;
  let bNum = 0;
  let cNum = 0;
  for (const ch of s) {
    if (ch === "a") aNum++;
    else if (ch === "b") bNum++;
    else cNum++;
  }
  if (aNum < k || bNum < k || cNum < k) return -1;
  let left = 0;
  let right = 0;
  const n = s.length;
  let res = n;
  const setNum = (ch, type = "add") => {
    if (ch === "a") {
      type === "add" ? aNum++ : aNum--;
    } else if (ch === "b") {
      type === "add" ? bNum++ : bNum--;
    } else {
      type === "add" ? cNum++ : cNum--;
    }
  };
  while (right < n) {
    setNum(s[right++], "");
    while ((aNum < k || bNum < k || cNum < k) && left < n) {
      setNum(s[left++]);
    }
    res = Math.min(res, n - (right - left));
  }
  return res;
};
