/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-06 17:01:06                                                  *
 * @LastModifiedDate: 2022-05-06 17:38:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 根据 逆波兰表示法，求表达式的值。

// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 注意 两个整数之间的除法只保留整数部分。

// 可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // 使用栈
  const stack = [];
  for (const token of tokens) {
    let a;
    let b;
    switch (token) {
      case "+":
        a = stack.pop();
        b = stack.pop();
        stack.push(a + b);
        continue;
      case "/":
        a = stack.pop();
        b = stack.pop();
        stack.push(Math.floor(b / a));
        continue;
      case "-":
        a = stack.pop();
        b = stack.pop();
        stack.push(b - a);
        continue;
      case "*":
        a = stack.pop();
        b = stack.pop();
        stack.push(a * b);
        continue;
      default:
        stack.push(parseInt(token));
    }
  }
  return stack[0];
};
