/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-28 19:30:11                                                  *
 * @LastModifiedDate: 2022-05-28 21:05:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，
// + 代表字符串的连接。

// 例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
// 如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），
// 其中 A 和 B 都是非空有效括号字符串。

// 给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，
// 其中 P_i 是有效括号字符串原语。

// 对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let n = s.length;
  let leftNum = 0;
  let rightNum = 0;
  let ans = "";
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (s[i] == "(") {
      leftNum++;
    } else {
      rightNum++;
      if (rightNum == leftNum) {
        ans += s.substring(start, start + leftNum * 2 - 2);
        start = i + 2;
        leftNum = 0;
        rightNum = 0;
      }
    }
  }
  return ans;
};

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  // 不使用substring,在遍历过程中一个个添加字符串
  // 使用一个变量记录左括号和右括号的差值
  let num = 0;
  let ans = "";
  for (const ch of s) {
    if (ch == ")") {
      num--;
    }
    if (num > 0) {
      ans += ch;
    }
    if (ch == "(") {
      num++;
    }
  }
  return ans;
};
