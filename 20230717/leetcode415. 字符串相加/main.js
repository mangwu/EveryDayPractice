/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-17 09:05:51                                                  *
 * @LastModifiedDate: 2023-07-17 09:29:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  if (len1 > len2) return addStrings(num2, num1);
  const ansArr = [];
  let carry = 0;
  for (let i = len2 - 1, j = len1 - 1; i >= 0; i--, j--) {
    const cur1 = parseInt(num2[i]);
    const cur2 = j >= 0 ? parseInt(num1[j]) : 0;
    let cur = cur1 + cur2 + carry;
    carry = Math.floor(cur / 10);
    cur %= 10;
    ansArr.push(cur);
  }
  if (carry) ansArr.push(carry);
  return ansArr.reverse().join("");
};
