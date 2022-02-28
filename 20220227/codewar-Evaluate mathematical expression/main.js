/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-27 23:31:01                                                  *
 * @LastModifiedDate: 2022-02-28 10:14:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 字符串数学运算
// 操作符
// + - * /
// -可以表示负数
// 当字符串中的操作符优先级合数学规则
// 优先级括号 ()
// 计算返回结果

/**
 * @description 字符串数学运算
 * @param {String} expression 字符串表达式
 * @returns results 数字结果
 */
var calc = function (expression) {
  // evaluate `expression` and return result
  // 需要使用栈进行保存进行优先级计算判断
  const stack = []; // 使用栈
  let isNeg = "false";
  for (const ch of expression) {
    if (ch !== " ") {
      // 非空格
      // 栈顶元素
      const top = stack.pop();
      // 是数字或者未定义或者前面为负数符号
      if (!isNaN(parseFloat(top)) || top === undefined || isNeg) {
        // 查看栈顶元素是否是数字
        // 判断ch 是否是数字或者小数点
        if (isNaN(parseFloat(ch) && ch !== ".")) {
          // 不是数字
          stack.push(top);
          stack.push(ch);
        } else {
          // 是数字
          if (top !== undefined) {
            stack.push(top + ch);
          } else {
            stack.push(ch);
          }
        }
        isNeg = false;
      } else {
        // 栈点元素不是数字（包含小数点）
        // 负数的特殊处理
        if (ch == "-") {
          // 接下来的数是负数
          isNeg = true;
        }
        if (top !== undefined) {
          stack.push(top);
          stack.push(ch);
        } else {
          stack.push(ch);
        }
      }
    }
  }
  console.log(stack);
};
calc("2.5 + 3 * 4 / 5 - (2.5 + 8 / 2)");
