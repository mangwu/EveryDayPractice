/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-08 10:55:08                                                  *
 * @LastModifiedDate: 2022-03-08 13:37:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const ans = [];
  if (s.length == 0) {
    return ans;
  }
  // 如果s中有n个字母则有2^n种可能的情况
  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt();
    if (
      (code >= "a".charCodeAt() && code <= "z".charCodeAt()) ||
      (code >= "A".charCodeAt() && code <= "Z".charCodeAt())
    ) {
      // 获得剩余字符的组合方式
      const last = letterCasePermutation(s.substring(i + 1));
      // console.log(last);
      for (const l of last) {
        ans.push(s.substring(0, i) + s[i].toLowerCase() + l);
        ans.push(s.substring(0, i) + s[i].toLocaleUpperCase() + l);
      }
      if (last.length == 0) {
        ans.push(s.substring(0, i) + s[i].toLowerCase());
        ans.push(s.substring(0, i) + s[i].toLocaleUpperCase());
      }
      break;
    }
  }
  // console.log(ans);
  if (ans.length == 0) {
    // 后面没有字母，全是数字，直接返回结果
    return [s];
  } else {
    return ans;
  }
};
console.log(letterCasePermutation("4a1456A1ha5sc45"));
