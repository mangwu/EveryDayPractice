/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-21 10:30:17                                                  *
 * @LastModifiedDate: 2023-05-21 10:33:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由 大写 英文字符组成的字符串 s 。

// 你可以对此字符串执行一些操作，在每一步操作中，你可以从 s 中删除 任一个 "AB" 或 "CD" 子字符串。

// 通过执行操作，删除所有 "AB" 和 "CD" 子串，返回可获得的最终字符串的 最小 可能长度。

// 注意，删除子串后，重新连接出的字符串可能会产生新的 "AB" 或 "CD" 子串。

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];
  for (const ch of s) {
    if (ch == "B" && stack.length && stack[stack.length - 1] === "A") {
      stack.pop();
    } else if (ch == "D" && stack.length && stack[stack.length - 1] === "C") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
};
