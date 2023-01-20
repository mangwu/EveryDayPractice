/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-19 19:27:31                                                  *
 * @LastModifiedDate: 2023-01-20 19:57:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个密码满足以下所有条件，我们称它是一个 强 密码：

// 它有至少 8 个字符。
// 至少包含 一个小写英文 字母。
// 至少包含 一个大写英文 字母。
// 至少包含 一个数字 。
// 至少包含 一个特殊字符 。特殊字符为："!@#$%^&*()-+" 中的一个。
// 它 不 包含 2 个连续相同的字符（比方说 "aab" 不符合该条件，但是 "aba" 符合该条件）。
// 给你一个字符串 password ，如果它是一个 强 密码，返回 true，否则返回 false 。

const specailCh = new Set("!@#$%^&*()-+".split(""));
let a = "a".charCodeAt();
let z = "z".charCodeAt();
let A = "A".charCodeAt();
let Z = "Z".charCodeAt();
let zero = "0".charCodeAt();
let nine = "9".charCodeAt();
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;
  let hasLowerCase = false;
  let hasBigCase = false;
  let hasNum = false;
  let hasSpecail = false;
  let pre = "";
  for (const ch of password) {
    let cur = ch.charCodeAt();
    if (pre == ch) {
      return false;
    } else if (cur >= a && cur <= z) {
      hasLowerCase = true;
    } else if (cur >= A && cur <= Z) {
      hasBigCase = true;
    } else if (cur >= zero && cur <= nine) {
      hasNum = true;
    } else if (specailCh.has(ch)) {
      hasSpecail = true;
    }
    pre = ch;
  }
  return hasLowerCase && hasBigCase && hasNum && hasSpecail;
};
