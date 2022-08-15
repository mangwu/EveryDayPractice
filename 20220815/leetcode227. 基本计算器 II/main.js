/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 10:56:42                                                  *
 * @LastModifiedDate: 2022-08-15 11:27:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

// 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 使用栈模拟
  // 需要考虑优先级问题
  // 没有括号，所以先解决乘除法
  // 每次进行除法都进行一次向下取整
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] == " ") {
      // 空格
      continue;
    }
    if (isDigit(s[i])) {
      // 数字
      let strNum = s[i];
      while (isDigit(s[i + 1]) && i + 1 < n) {
        strNum += s[i + 1];
        i++;
      }
      // 获取上一个符号
      const op = stack.pop();
      if (op == "*") {
        // 相乘
        const num1 = stack.pop();
        const num2 = parseInt(strNum);
        stack.push(num1 * num2);
      } else if (op == "/") {
        const num1 = stack.pop();
        const num2 = parseInt(strNum);
        // 取整
        stack.push(Math.floor(num1 / num2));
      } else {
        // 直接push
        if (op) {
          // op可能是undefined
          stack.push(op);
        }
        stack.push(parseInt(strNum));
      }
    } else {
      // 运算符号
      stack.push(s[i]);
    }
  }
  // 遍历stack，求出结果
  const ans = [];
  for (const s of stack) {
    if (s !== "+" && s !== "-") {
      if (ans.length > 0) {
        // 获取两个数
        const op = ans.pop();
        const num1 = ans.pop();
        let res = 0;
        if (op == "+") {
          res = num1 + s;
        } else {
          res = num1 - s;
        }
        ans.push(res);
      } else {
        ans.push(s);
      }
    } else {
      ans.push(s);
    }
  }
  return ans[0];
};

/**
 * @decription 判断是否是数字字符
 * @param {string} ch 字符
 */
var isDigit = (ch) => {
  if (!ch) {
    return false;
  }
  if (
    ch.charCodeAt() >= "0".charCodeAt() &&
    ch.charCodeAt() <= "9".charCodeAt()
  ) {
    return true;
  }
  return false;
};
