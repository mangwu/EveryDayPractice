/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-07 16:48:39                                                  *
 * @LastModifiedDate: 2024-04-07 17:13:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 '('、')' 和小写字母组成的字符串 s。

// 你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

// 请返回任意一个合法字符串。

// 有效「括号字符串」应当符合以下 任意一条 要求：

// 空字符串或只包含小写字母的字符串
// 可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
// 可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(["(", i]);
    } else if (s[i] === ")") {
      if (stack.length && stack[stack.length - 1][0] === "(") stack.pop();
      else stack.push([")", i]);
    }
  }
  if (!stack.length) return s;
  const ans = [];
  let curIdx = 0;
  for (let i = 0; i < n; i++) {
    if (
      (s[i] === "(" || s[i] === ")") &&
      curIdx < stack.length &&
      stack[curIdx][1] === i
    ) {
      curIdx++;
      continue;
    }
    ans.push(s[i]);
  }
  return ans;
};
