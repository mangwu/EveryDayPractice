/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-24 22:35:49                                                  *
 * @LastModifiedDate: 2022-08-24 22:44:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个小写英文字母组成的字符串 s 和一个二维整数数组 shifts ，
// 其中 shifts[i] = [starti, endi, directioni] 。
// 对于每个 i ，将 s 中从下标 starti 到下标 endi （两者都包含）所有字符都进行移位运算，
// 如果 directioni = 1 将字符向后移位，如果 directioni = 0 将字符向前移位。

// 将一个字符 向后 移位的意思是将这个字符用字母表中 下一个 字母替换（字母表视为环绕的，所以 'z' 变成 'a'）。
// 类似的，将一个字符 向前 移位的意思是将这个字符用字母表中 前一个 字母替换\
// （字母表是环绕的，所以 'a' 变成 'z' ）。

// 请你返回对 s 进行所有移位操作以后得到的最终字符串。

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = s.length;
  const diff = new Array(n + 1).fill(0);
  for (let [start, end, direction] of shifts) {
    // 0 => -1 1 => 1
    direction = 2 * direction - 1;
    diff[start] += direction;
    diff[end + 1] -= direction;
    if (diff[start] < 0) {
      diff[start] += 26;
    }
    if (diff[end + 1] < 0) {
      diff[end + 1] += 26;
    }
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (i) diff[i] += diff[i - 1];
    ans.push(
      String.fromCharCode(((s[i].charCodeAt() + diff[i] - 97) % 26) + 97)
    );
  }
  return ans.join("");
};
