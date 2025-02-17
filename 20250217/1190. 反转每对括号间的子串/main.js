/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-17 09:57:47                                                  *
 * @LastModifiedDate: 2025-02-17 10:37:17                                      *
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
  const n = s.length;
  const pair = new Array(n).fill(-1);
  const stack = []; // (的索引
  for (let i = 0; i < n; i++) {
    if (s[i] === ")") {
      const preLeft = stack.pop();
      pair[preLeft] = i;
      pair[i] = preLeft;
    } else if (s[i] === "(") {
      stack.push(i);
    }
  }
  const dfs = (start, end) => {
    // 最小单位：不包含()或者只包含一个()
    if (
      s[start] === "(" &&
      s[end] === ")" &&
      s.indexOf("(", start + 1) === -1
    ) {
      let res = [];
      for (let i = end - 1; i > start; i--) res.push(s[i]);
      return res;
    }
    if (s.indexOf("(") === -1) return s.substring(start + 1, end + 1).split("");
    const res = [];
    for (let i = start; i <= end; i++) {
      if (s[i] === "(") {
        const curRes = dfs(i + 1, pair[i] - 1).reverse();
        i = pair[i];
        res.push(...curRes);
      } else res.push(s[i]);
    }
    return res;
  };
  const res = dfs(0, n - 1);
  console.log(res.join(""));
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const n = s.length;
  const pair = new Array(n).fill(-1);
  const stack = []; // (的索引
  for (let i = 0; i < n; i++) {
    if (s[i] === ")") {
      const preLeft = stack.pop();
      pair[preLeft] = i;
      pair[i] = preLeft;
    } else if (s[i] === "(") {
      stack.push(i);
    }
  }
  // 遇到(方向转变，索引移动到指定位置
  const res = [];
  let i = 0;
  let step = 1;
  while (i < n) {
    if (s[i] === "(" || s[i] === ")") {
      i = pair[i];
      step = -step;
    } else {
      res.push(s[i]);
    }
    i += step;
  }
  return res.join("")
};
