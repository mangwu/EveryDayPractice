/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-04 14:33:13                                                  *
 * @LastModifiedDate: 2022-10-04 15:20:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 只有满足下面几点之一，括号字符串才是有效的：

// 它是一个空字符串，或者
// 它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
// 它可以被写作 (A)，其中 A 是有效字符串。
// 给定一个括号字符串 s ，移动N次，你就可以在字符串的任何位置插入一个括号。

// 例如，如果 s = "()))" ，
// 你可以插入一个开始括号为 "(()))" 或结束括号为 "())))" 。
// 返回 为使结果字符串 s 有效而必须添加的最少括号数。

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  // 使用栈模拟
  const stack = [];
  for (const ch of s) {
    if (ch == "(") {
      stack.push(ch);
    } else {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
  }
  return stack.length;
};

// 不使用栈，使用两个变量记录左括号数量和无效右括号数量即可

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let ans = 0;
  let leftCount = 0;
  for (const ch of s) {
    if (ch === "(") {
      leftCount++;
    } else {
      if (leftCount > 0) {
        leftCount--;
      } else {
        // 无效右括号
        ans++;
      }
    }
  }
  ans += leftCount;
  return ans;
};
