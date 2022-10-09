/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-09 10:05:27                                                  *
 * @LastModifiedDate: 2022-10-09 10:29:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

// () 得 1 分。
// AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
// (A) 得 2 * A 分，其中 A 是平衡括号字符串。
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  s = "(" + s + ")";
  n = s.length;
  // 遍历一遍，找到每个左右括号对应的索引
  const hash = new Map();
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === ")") {
      // 出栈
      hash.set(stack.pop(), i);
    } else {
      // 入栈
      stack.push(i);
    }
  }
  const dfs = (start, end) => {
    if (start + 1 === end) {
      return 1;
    }
    let res = 0;
    let next = start + 1;
    while (next !== end) {
      let cur = hash.get(next);
      res += 2 * dfs(next, cur);
      next = cur + 1;
    }
    return res
  };
  return dfs(0, n - 1) / 2;
};
