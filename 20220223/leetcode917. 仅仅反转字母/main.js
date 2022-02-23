/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-23 08:59:30                                                  *
 * @LastModifiedDate: 2022-02-23 09:35:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，根据下述规则反转字符串：

// 所有非英文字母保留在原有位置。
// 所有英文字母（小写或大写）位置反转。
// 返回反转后的 s 。

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const strArr = s.split("");
  // 双指针
  let i = 0,
    j = strArr.length - 1;
  while (i < j) {
    const charI = strArr[i].charCodeAt();
    const charJ = strArr[j].charCodeAt();
    // 是字母
    if ((charI >= 97 && charI <= 122) || (charI >= 65 && charI <= 90)) {
      if ((charJ >= 97 && charJ <= 122) || (charJ >= 65 && charJ <= 90)) {
        const tem = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = tem;
        i++;
        j--;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
  return strArr.join("");
};

reverseOnlyLetters("a-bC-dEf-ghIj");

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters2 = function (s) {
  const strArr = s.split("");
  // 双指针
  let i = 0,
    j = strArr.length - 1;
  while (i < j) {
    const charI = strArr[i].charCodeAt();
    // 不是字母
    if ((charI > 90 && charI < 97) || charI > 122 || charI < 65) {
      i++;
      continue;
    }
    const charJ = strArr[j].charCodeAt();
    if ((charJ > 90 && charJ < 97) || charJ > 122 || charJ < 65) {
      j--;
      continue;
    }
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
    i++;
    j--;
  }
  return strArr.join("");
};

reverseOnlyLetters2("a-bC-dEf-ghIj");

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters3 = function (s) {
  // 不使用charCodeAt，直接字符判断大小
  const strArr = s.split("");
  // 双指针
  let i = 0,
    j = strArr.length - 1;
  while (i < j) {
    // 不是字母
    if (
      (strArr[i] > "Z" && strArr[i] < "a") ||
      strArr[i] > "z" ||
      strArr[i] < "A"
    ) {
      i++;
      continue;
    }
    if (
      (strArr[j] > "Z" && strArr[j] < "a") ||
      strArr[j] > "z" ||
      strArr[j] < "A"
    ) {
      j--;
      continue;
    }
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
    i++;
    j--;
  }
  return strArr.join("");
};

// [a-z] => [97, 122]
// [A-Z] => [65, 90]