/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 19:06:03                                                  *
 * @LastModifiedDate: 2022-08-15 19:11:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个字符串，打印出该字符串中字符的所有排列。

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  // A(n,n) 8 7 6 5 4 3 2
  const set = new Set();
  const n = s.length;
  set.add(s[0]);
  let res = [s[0]];
  for (let i = 1; i < n; i++) {
    let nxt = [];
    for (const r of res) {
      for (let j = 0; j <= r.length; j++) {
        let newStr = r.substring(0, j) + s[i] + r.substring(j, r.length);
        if (set.has(newStr)) {
          continue;
        } else {
          nxt.push(newStr);
          set.add(newStr);
        }
      }
    }
    res = nxt;
  }
  return res;
};
