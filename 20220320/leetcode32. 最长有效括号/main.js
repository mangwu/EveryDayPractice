/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-20 21:54:11                                                  *
 * @LastModifiedDate: 2022-03-20 22:35:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 记录做括号和右括号的数量，当左括号始终要对于右括号才能继续对数量进行增加
  // 否则需要清空
  let ans = 0;
  let left = 0;
  let right = 0;
  for (const ch of s) {
    if (ch == "(") {
      left++;
    } else if (ch == ")") {
      right++;
      // right比left小就可以更新
      if (right == left) {
        ans = Math.max(ans, right);
      } else if (right > left) {
        // 重置
        left = 0;
        right = 0;
      }
    }
  }
  left = 0;
  right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (ch == "(") {
      left++;
    } else if (ch == ")") {
      right++;
    }
    if (right == left) {
      ans = Math.max(ans, left);
    } else if (left > right) {
      // 重置
      left = 0;
      right = 0;
    }
  }
  // console.log(k);
  // console.log(ans, ans2);
  return ans;
};

// 上述解答错误，未考虑左括号过多而没有对应的右括号的情况
longestValidParentheses("))))())()()(()");
