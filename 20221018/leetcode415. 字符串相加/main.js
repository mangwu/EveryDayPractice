/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 09:06:45                                                  *
 * @LastModifiedDate: 2022-10-18 09:15:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  // 保证num2的长度不超过num1
  if (num1.length < num2.length) {
    return addStrings(num2, num1);
  }
  const res = num1.split("");
  const addend = num2.split("");
  let carry = 0;
  for (let i = res.length - 1, j = addend.length - 1; i >= 0; i--, j--) {
    let add = j >= 0 ? parseInt(addend[j]) : 0;
    let sum = parseInt(res[i]) + add + carry;
    console.log(add, sum);
    carry = Math.floor(sum / 10);
    res[i] = sum % 10;
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
};
