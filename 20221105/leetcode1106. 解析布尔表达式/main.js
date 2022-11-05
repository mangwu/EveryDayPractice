/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-05 20:35:43                                                  *
 * @LastModifiedDate: 2022-11-05 20:52:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个以字符串形式表述的 布尔表达式（boolean） expression，返回该式的运算结果。

// 有效的表达式需遵循以下约定：

// "t"，运算结果为 True
// "f"，运算结果为 False
// "!(expr)"，运算过程为对内部表达式 expr 进行逻辑 非的运算（NOT）
// "&(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 与的运算（AND）
// "|(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 或的运算（OR）

/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  // 栈模拟
  // 保存布尔值和左括号
  const stack = [];
  // 保存运算操作
  const opStack = [];
  for (const ch of expression) {
    if (ch === "&" || ch === "|" || ch === "!") {
      opStack.push(ch);
    } else if (ch === "(") {
      stack.push("(");
    } else if (ch === "f") {
      stack.push(false);
    } else if (ch === "t") {
      stack.push(true);
    } else if (ch === ")") {
      // 右括号 进行一次计算
      let op = opStack.pop();
      computeBoolRes(op, stack);
    }
    // 不用考虑逗号
  }
  return stack[0];
};

var computeBoolRes = function (op, stack) {
  let cur = stack.pop();
  if (op === "&") {
    while (stack[stack.length - 1] !== "(") {
      cur &= stack.pop();
    }
  } else if (op === "|") {
    while (stack[stack.length - 1] !== "(") {
      cur |= stack.pop();
    }
  } else if (op === "!") {
    cur = !cur;
  }
  // 弹出"("
  stack.pop();
  // 弹进结果
  stack.push(cur);
};
