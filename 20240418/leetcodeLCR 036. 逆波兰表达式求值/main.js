/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-18 14:43:39                                                  *
 * @LastModifiedDate: 2024-04-18 15:21:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 根据 逆波兰表示法，求该后缀表达式的计算结果。

// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      // 整数除法只保留整数部分。
      const pop1 = stack.pop();
      const pop2 = stack.pop();
      let isPositive = pop1 * pop2 > 0 ? true : false;
      stack.push(
        isPositive
          ? Math.floor(pop2 / pop1)
          : -Math.floor(Math.abs(pop2) / Math.abs(pop1))
      );
    } else stack.push(parseInt(token));
  }
  return stack[0]
};
