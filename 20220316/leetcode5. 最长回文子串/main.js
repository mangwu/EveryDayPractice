/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-16 20:04:49                                                  *
 * @LastModifiedDate: 2022-03-16 20:20:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，找到 s 中最长的回文子串。

// 马拉车算法的时间复杂度位O(n)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 暴力法
  // 预处理s
  s = "#" + s.split("").join("#") + "#";
  let idx = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let max = expand(s, i);
    if (max > maxLen) {
      idx = i;
      maxLen = max;
    }
  }
  // 获得结果
  const ans = s
    .substring(idx - (maxLen - 1) / 2, idx + (maxLen - 1) / 2)
    .replaceAll("#", "");
  return ans;
};
// 以i为中心进行扩展
var expand = (s, i) => {
  let ans = 1;
  let add = 1;
  const len = s.length;
  while (i - add >= 0 && i + add < len && s[i - add] == s[i + add]) {
    ans += 2;
    add++;
  }
  return ans;
};
