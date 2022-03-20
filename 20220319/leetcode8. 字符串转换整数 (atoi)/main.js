/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-19 20:46:28                                                  *
 * @LastModifiedDate: 2022-03-19 21:54:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

// 函数 myAtoi(string s) 的算法如下：

// 读入字符串并丢弃无用的前导空格
// 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
// 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
// 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
// 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
// 返回整数作为最终结果。
// 注意：

// 本题中的空白字符只包括空格字符 ' ' 。
// 除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。

const max = Math.pow(2, 31) - 1;
const min = 0 - Math.pow(2, 31);
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let ans = parseInt(s);
  if (isNaN(ans)) {
    return 0;
  }
  if (ans > max) {
    return max;
  }
  if (ans < min) {
    return min;
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 自己遍历
  let ans = 0;
  // 已经遍历到数字了
  let hasNumber = false;
  let isNegtive = false;
  for (const ch of s) {
    // 没遇到数字前的遍历
    if (!hasNumber) {
      if (ch == " ") {
        continue;
      } else if (isNaN(ch) && ch !== "+" && ch !== "-") {
        break;
      } else {
        // 遇到"+"，"-" 数字
        hasNumber = true;
        if (ch == "+") {
          continue;
        }
        if (ch == "-") {
          isNegtive = true;
          continue;
        }
        ans = Number(ch);
      }
    } else {
      // 遇到了数字
      if (isNaN(ch) || ch == " ") {
        break;
      } else {
        ans = ans * 10 + Number(ch);
      }
    }
  }
  if (isNegtive) {
    ans = 0 - ans;
  }
  if (ans > max) {
    return max;
  }
  if (ans < min) {
    return min;
  }
  return ans;
};
