/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-30 14:35:27                                                  *
 * @LastModifiedDate: 2022-10-30 14:41:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
const a = "a".charCodeAt();
const z = "z".charCodeAt();
const A = "A".charCodeAt();
const Z = "Z".charCodeAt();
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let ans = [];
  const n = s.length;
  const dfs = (pre, i) => {
    if (i == n) {
      ans.push(pre);
      return;
    }
    let code = s[i].charCodeAt();
    if (code >= a && code < z) {
      dfs(pre + s[i].toLocaleUpperCase(), i + 1);
    } else if (code >= A && code <= Z) {
      dfs(pre + s[i].toLocaleLowerCase(), i + 1);
    }
    dfs(pre + s[i], i + 1);
  };
  dfs("", 0);
  return ans;
};
