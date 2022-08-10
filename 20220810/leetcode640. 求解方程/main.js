/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-10 09:00:58                                                  *
 * @LastModifiedDate: 2022-08-10 09:47:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 求解一个给定的方程，将x以字符串 "x=#value" 的形式返回。
// 该方程仅包含 '+' ， '-' 操作，变量 x 和其对应系数。

// 如果方程没有解，请返回 "No solution" 。如果方程有无限解，则返回 “Infinite solutions” 。

// 如果方程中只有一个解，要保证返回值 'x' 是一个整数。

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const arr = equation.split("=");
  // 求左边的x系数和常数，右边的x系数和常数
  const { coefficient: leftCoe, constant: LeftCon } =
    computeCoefficientAndConstant(arr[0]);
  const { coefficient: rightCoe, constant: rightCon } =
    computeCoefficientAndConstant(arr[1]);
  if (leftCoe == rightCoe) {
    if (LeftCon == rightCon) {
      return "Infinite solutions";
    } else {
      return "No solution";
    }
  }
  return "x=" + (rightCon - LeftCon) / (leftCoe - rightCoe);
};

var computeCoefficientAndConstant = (formula) => {
  let coefficient = 0;
  let constant = 0;
  let stack = [];
  for (const ch of formula) {
    if (ch == "+" || ch == "-") {
      if (stack.length > 0) {
        if (stack[stack.length - 1] == "x") {
          // 是x，计算系数
          let num = parseInt(stack.join(""), 10);
          if (isNaN(num)) {
            if (stack[0] == "-") {
              coefficient--;
            } else {
              coefficient++;
            }
          } else {
            coefficient += num;
          }
        } else {
          // 不是x，是常数
          let num = parseInt(stack.join(""), 10);
          constant += num;
        }
      }
      // 置空
      stack = [];
    }
    stack.push(ch);
  }
  if (stack.length > 0) {
    if (stack[stack.length - 1] == "x") {
      // 是x，计算系数
      let num = parseInt(stack.join(""), 10);
      if (isNaN(num)) {
        if (stack[0] == "-") {
          coefficient--;
        } else {
          coefficient++;
        }
      } else {
        coefficient += num;
      }
    } else {
      // 不是x，是常数
      let num = parseInt(stack.join(""), 10);
      constant += num;
    }
  }
  return { coefficient, constant };
};
