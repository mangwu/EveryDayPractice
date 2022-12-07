/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-12-06 09:24:29
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

//  给你一个字符串 word ，该字符串由数字和小写英文字母组成。

//  请你用空格替换每个不是数字的字符。例如，"a123bc34d8ef34" 将会变成 " 123  34 8  34" 。注意，剩下的这些整数为（相邻彼此至少有一个空格隔开）："123"、"34"、"8" 和 "34" 。

//  返回对 word 完成替换后形成的 不同 整数的数目。

//  只有当两个整数的 不含前导零 的十进制表示不同， 才认为这两个整数也不同。
const start = "0".charCodeAt();
const end = "9".charCodeAt();
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const n = word.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    let cur = "";
    let start = 0;
    while (
      i < n &&
      word[i].charCodeAt() >= start &&
      word[i].charCodeAt() <= end
    ) {
      cur += word[i];
      i++;
    }
    if (cur) {
      // 除去先导0
      let idx = 0;
      while (cur[idx] === "0") {
        idx++;
      }
      if (idx === cur.length) {
        idx--;
      }
      set.add(cur.substring(idx));
    }
  }
  return set.size;
};
