/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 22:30:46                                                  *
 * @LastModifiedDate: 2022-10-29 22:40:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words ，每一个字符串长度都相同，令所有字符串的长度都为 n 。

// 每个字符串 words[i] 可以被转化为一个长度为 n - 1 的 差值整数数组 difference[i] ，其中对于 0 <= j <= n - 2 有 difference[i][j] = words[i][j+1] - words[i][j] 。注意两个字母的差值定义为它们在字母表中 位置 之差，也就是说 'a' 的位置是 0 ，'b' 的位置是 1 ，'z' 的位置是 25 。

// 比方说，字符串 "acb" 的差值整数数组是 [2 - 0, 1 - 2] = [2, -1] 。
// words 中所有字符串 除了一个字符串以外 ，其他字符串的差值整数数组都相同。你需要找到那个不同的字符串。

// 请你返回 words中 差值整数数组 不同的字符串。
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  let arr = [];
  const n = words[0].length;
  for (let i = 0; i < 3; i++) {
    const cur = [];
    for (let j = 1; j < n; j++) {
      cur.push(words[i][j].charCodeAt() - words[i][j - 1].charCodeAt());
    }
    arr.push(cur);
  }
  let same = null;
  if (isSame(arr[0], arr[1])) {
    if (isSame(arr[0], arr[2])) {
      same = arr[0];
    } else {
      return words[2];
    }
  } else if (isSame(arr[0], arr[2])) {
    return words[1];
  } else {
    return words[0];
  }
  for (let i = 3; i < words.length; i++) {
    const cur = [];
    for (let j = 1; j < n; j++) {
      cur.push(words[i][j].charCodeAt() - words[i][j - 1].charCodeAt());
    }
    if (!isSame(cur, same)) {
      return words[i];
    }
  }
};

var isSame = function (arr1, arr2) {
  const n = arr1.length;
  for (let i = 0; i < n; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
