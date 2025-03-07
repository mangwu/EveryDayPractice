/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 14:12:09                                                  *
 * @LastModifiedDate: 2025-03-05 15:09:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。

// 如果小数部分为循环小数，则将循环的部分括在括号内。

// 如果存在多个答案，只需返回 任意一个 。

// 对于所有给定的输入，保证 答案字符串的长度小于 104 。

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let isNeg = false;
  if (numerator === 0) return "0";
  if (numerator < 0) {
    isNeg = !isNeg;
    numerator = -numerator;
  }
  if (denominator < 0) {
    isNeg = !isNeg;
    denominator = -denominator;
  }
  const hash = new Map();
  const res = [Math.floor(numerator / denominator)];
  if (isNeg) res.unshift("-");
  let cur = (numerator % denominator) * 10;
  if (cur === 0) return res.join("");
  res.push(".");
  while (cur) {
    let next = (cur % denominator) * 10;
    if (hash.has(cur)) {
      res.splice(hash.get(cur), 0, "(");
      res.push(")");
      break;
    } else {
      hash.set(cur, res.length);
      res.push(Math.floor(cur / denominator));
      cur = next;
    }
  }
  return res.join("");
};
