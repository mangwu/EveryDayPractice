/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-27 09:05:23                                                  *
 * @LastModifiedDate: 2022-12-27 09:13:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，由 n 个字符组成，每个字符不是 'X' 就是 'O' 。

// 一次 操作 定义为从 s 中选出 三个连续字符 并将选中的每个字符都转换为 'O' 。注意，如果字符已经是 'O' ，只需要保持 不变 。

// 返回将 s 中所有字符均转换为 'O' 需要执行的 最少 操作次数。

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let ans = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    while (s[i] === "O") {
      i++;
    }
    if (s[i] === "X") {
      ans++;
      i += 2;
    }
  }
  return ans;
};
