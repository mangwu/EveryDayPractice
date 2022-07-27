/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-27 09:07:05                                                  *
 * @LastModifiedDate: 2022-07-27 10:51:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个表示分数加减运算的字符串 expression ，你需要返回一个字符串形式的计算结果。

// 这个结果应该是不可约分的分数，即最简分数。
// 如果最终结果是一个整数，例如 2，你需要将它转换成分数形式，其分母为 1。所以在上述例子中, 2 应该被转换为 2/1。

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let stack = [];
  let n = expression.length;
  for (let i = 0; i < n; i++) {
    const ch = expression[i];
    switch (ch) {
      case "+":
        if (stack.length == 0) {
          stack.push(ch);
        } else {
          let first = stack.join("");
          let second = "";
          i++;
          if (expression[i] == "-") {
            i++;
            second += "-";
          }
          while (expression[i] != "+" && expression[i] != "-" && i < n) {
            second += expression[i];
            i++;
          }
          let res = computeFraction(first, second, "+");
          stack = [res];
          i--;
        }
        break;
      case "-":
        if (stack.length == 0) {
          stack.push(ch);
        } else {
          let first = stack.join("");
          let second = "";
          i++;
          if (expression[i] == "-") {
            i++;
            second += "-";
          }
          while (expression[i] != "+" && expression[i] != "-" && i < n) {
            second += expression[i];
            i++;
          }
          let res = computeFraction(first, second, "-");
          stack = [res];
          i--;
        }
        break;
      default:
        stack.push(ch);
    }
  }
  let ans = stack.join("");
  if (ans[0] == "+") {
    return ans.substring(1);
  }
  return ans;
};
/**
 *
 * @param {string} first
 * @param {string} second
 * @param {string} sub
 */
var computeFraction = (first, second, sub) => {
  const arr1 = first.split("/");
  const arr2 = second.split("/");
  const molecule1 = parseInt(arr1[0]);
  const molecule2 = parseInt(arr2[0]);
  const denominator1 = parseInt(arr1[1]);
  const denominator2 = parseInt(arr2[1]);
  let modecule;
  let denominator;
  if (sub == "-") {
    // 减号
    if (denominator1 == denominator2) {
      modecule = molecule1 - molecule2;
      denominator = denominator1;
    } else {
      modecule = molecule1 * denominator2 - molecule2 * denominator1;
      denominator = denominator1 * denominator2;
    }
  } else {
    // 加号
    if (denominator1 == denominator2) {
      modecule = molecule1 + molecule2;
      denominator = denominator1;
    } else {
      modecule = molecule1 * denominator2 + molecule2 * denominator1;
      denominator = denominator1 * denominator2;
    }
  }
  // 获取最大公约数
  const divisor = getMaxCommonDivisor(
    Math.abs(modecule),
    Math.abs(denominator)
  );
  modecule /= divisor;
  denominator /= divisor;
  return modecule + "/" + denominator;
};

/**
 * @description 求最大公约数
 * @param {number} num1
 * @param {number} num2
 * @returns number
 */
var getMaxCommonDivisor = (num1, num2) => {
  if (num1 == 0) {
    return num2;
  }
  const min = Math.min(num1, num2);
  let ans = 1;
  const divisors = getDivisor(min);
  for (const d of divisors) {
    if (num1 % d == 0 && num2 % d == 0) {
      ans = Math.max(d, ans);
    }
  }
  return ans;
};

/**
 * @description 获取一个数的约数
 * @param {number} num
 * @returns
 */
var getDivisor = (num) => {
  if (num == 1) {
    return [];
  }
  const ans = [num];
  const logNum = Math.sqrt(num);
  for (let i = 2; i <= logNum; i++) {
    if (num % i == 0) {
      ans.push(i, num / i);
    }
  }
  return ans;
};
