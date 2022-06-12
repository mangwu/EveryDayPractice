/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-11 23:20:01                                                  *
 * @LastModifiedDate: 2022-06-11 23:30:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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

const special = "!@#$%^&*()-+";
const low = ["a".charCodeAt(), "z".charCodeAt()];
const big = ["A".charCodeAt(), "Z".charCodeAt()];
const num = ["0".charCodeAt(), "9".charCodeAt()];

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false;
  }
  let hasLowercase = false;
  let hasCapital = false;
  let hasNumber = false;
  let hasSpecial = false;
  let pre = null; // 没有连续字符
  for (const ch of password) {
    if (ch == pre) {
      // 连续相同字符
      return false;
    }
    if (ch.charCodeAt() >= low[0] && ch.charCodeAt() <= low[1]) {
      // 是小写字符
      hasLowercase = true;
    } else if (ch.charCodeAt() >= big[0] && ch.charCodeAt() <= big[1]) {
      hasCapital = true;
    } else if (ch.charCodeAt() >= num[0] && ch.charCodeAt() <= num[1]) {
      hasNumber = true;
    } else if (special.indexOf(ch) !== -1) {
      hasSpecial = true;
    }
    pre = ch;
  }
  return hasLowercase && hasCapital && hasNumber && hasSpecial;
};
