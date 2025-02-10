/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-10 10:16:19                                                  *
 * @LastModifiedDate: 2025-02-10 17:29:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个字符串 s（仅含有小写英文字母和括号）。

// 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

// 注意，您的结果中 不应 包含任何括号。

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // dfs递归
  // 遍历一遍，查找到每个左括号对应的右括号
  const n = s.length;
  const stack = [];
  const map = new Map();
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      map.set(stack.pop(), i);
    }
  }
  const dfs = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
      if (s[i] === "(") {
        // 找到下一个")"
        const rightJ = map.get(i);
        const sub = dfs(i + 1, rightJ - 1);
        i = rightJ;
        for (const item of sub) {
          res.push(item);
        }
      } else {
        res.push(s[i]);
      }
    }
    return res.reverse();
  };
  const res = dfs(0, n - 1);
  return res.reverse().join("");
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // 只使用栈的暴力解法
  const stack = [];
  for (const ch of s) {
    if (ch === ")") {
      const queue = [];
      while (stack[stack.length - 1] !== "(") {
        queue.push(stack.pop());
      }
      stack.pop(); // 弹出(
      for (const item of queue) stack.push(item);
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // 记录每个括号的对应关系，在遍历到左括号时
  const stack = [];
  const n = s.length;
  const pair = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      const j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  }
  const sb = [];
  let i = 0;
  let step = 1; // 增量方向
  while (i < n) {
    if (s[i] === "(" || s[i] === ")") {
      i = pair[i];
      step = -step;
    } else {
      sb.push(s[i]);
    }
    i += step;
  }
  return sb.join("");
};

reverseParentheses("((ab))");


/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // dfs递归
  // 遍历一遍，查找到每个左括号对应的右括号
  const n = s.length;
  const stack = [];
  const map = new Map();
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      map.set(stack.pop(), i);
    }
  }
  const dfs = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
      if (s[i] === "(") {
        // 找到下一个")"
        const rightJ = map.get(i);
        const sub = dfs(i + 1, rightJ - 1);
        i = rightJ;
        for (const item of sub) {
          res.push(item);
        }
      } else {
        res.push(s[i]);
      }
    }
    return res.reverse();
  };
  const res = dfs(0, n - 1);
  return res.reverse().join("");
};