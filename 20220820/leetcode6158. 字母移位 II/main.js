/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-20 23:00:49                                                  *
 * @LastModifiedDate: 2022-08-20 23:11:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个小写英文字母组成的字符串 s 和一个二维整数数组 shifts ，
// 其中 shifts[i] = [starti, endi, directioni] 。对于每个 i ，
// 将 s 中从下标 starti 到下标 endi （两者都包含）所有字符都进行移位运算，
// 如果 directioni = 1 将字符向后移位，如果 directioni = 0 将字符向前移位。

// 将一个字符 向后 移位的意思是将这个字符用字母表中 下一个
// 字母替换（字母表视为环绕的，所以 'z' 变成 'a'）。类似的，
// 将一个字符 向前 移位的意思是将这个字符用字母表中 前一个 字母替换（字母表是环绕的，所以 'a' 变成 'z' ）。

// 请你返回对 s 进行所有移位操作以后得到的最终字符串。

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  // 遍历shifts，记录每个下标位置的移位情况
  const n = s.length;
  const res = new Array(n).fill(0);
  for (const shift of shifts) {
    for (let i = shift[0]; i <= shift[1]; i++) {
      if (shift[2] == 1) {
        //  向后移位
        res[i]++;
      } else {
        res[i]--;
      }
      // 避免出现负数
      if (res[i] < 0) {
        res[i] += 26;
      }
    }
  }
  const sArr = s.split("");
  for (let i = 0; i < n; i++) {
    sArr[i] = String.fromCharCode(
      ((sArr[i].charCodeAt() - 97 + res[i]) % 26) + 97
    );
  }
  return sArr.join("");
};
