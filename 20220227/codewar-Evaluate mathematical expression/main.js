/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-27 23:31:01                                                  *
 * @LastModifiedDate: 2022-02-27 23:51:02                                      *
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
  for (const ch of expression) {
    if (ch !== " ") {
      // 非空格
      // 栈顶元素
      const top = stack.pop();
      if (typeof top === "number" || top == undefined) {
        // 是数字
        // 判断ch 是否是数字
        if (isNaN(parseFloat(ch))) {
          // 不是数字
          stack.push(top);
          stack.push(ch);
        } else {
          // 是数字
          if (top !== undefined) {
            stack.push(parseFloat())
          }
        }
      }
    }
  }
};
