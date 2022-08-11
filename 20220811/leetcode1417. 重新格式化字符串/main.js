/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-11 08:54:33                                                  *
 * @LastModifiedDate: 2022-08-11 09:29:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。

// 请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。

// 请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const nums = [];
  const aplha = [];
  for (const ch of s) {
    if (
      ch.charCodeAt() >= "0".charCodeAt() &&
      ch.charCodeAt() <= "9".charCodeAt()
    ) {
      nums.push(ch);
    } else {
      aplha.push(ch);
    }
  }
  if (Math.abs(nums.length - aplha.length) > 1) {
    return "";
  }
  let ans = "";

  if (nums.length >= aplha.length) {
    for (let i = 0; i < nums.length; i++) {
      ans += aplha[i] ? nums[i] + aplha[i] : nums[i];
    }
  } else {
    for (let i = 0; i < aplha.length; i++) {
      ans += nums[i] ? aplha[i] + nums[i] : aplha[i];
    }
  }
  return ans;
};

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  // 双指针
  const n = s.length;
  let digitLength = 0;
  for (const ch of s) {
    if (isDigit(ch)) {
      digitLength++;
    }
  }
  if (Math.abs(n - 2 * digitLength) > 1) {
    return "";
  }
  let i = 0; // 记录数量多的
  let j = 1; // 记录数量少的
  const arr = [];
  let flag = digitLength >= n - digitLength; // true i就记录数字
  let idx = 0;
  while (idx < n) {
    if (flag) {
      if (isDigit(s[idx])) {
        arr[i] = s[idx];
        i += 2;
      } else {
        arr[j] = s[idx];
        j += 2;
      }
    } else {
      if (isDigit(s[idx])) {
        arr[j] = s[idx];
        j += 2;
      } else {
        arr[i] = s[idx];
        i += 2;
      }
    }
    idx++;
  }
  return arr.join("");
};

var isDigit = (ch) => {
  return (
    ch.charCodeAt() >= "0".charCodeAt() && ch.charCodeAt() <= "9".charCodeAt()
  );
};
