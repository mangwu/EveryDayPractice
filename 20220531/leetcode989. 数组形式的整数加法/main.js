/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-31 16:50:43                                                  *
 * @LastModifiedDate: 2022-05-31 17:31:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

// 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
// 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let arrK = k.toString().split("");
  const n1 = num.length;
  const n2 = arrK.length;
  if (n1 >= n2) {
    let carry = 0;
    for (let i = n1 - 1, j = n2 - 1; i >= 0 || j >= 0; i--, j--) {
      let num1 = num[i];
      let num2 = arrK[j] !== undefined ? Number(arrK[j]) : 0;
      let sum = (num1 + num2 + carry) % 10;
      carry = Math.floor((num1 + num2 + carry) / 10);
      num[i] = sum;
    }
    if (carry) {
      num.unshift(carry);
    }
    return num;
  } else {
    let carry = 0;
    for (let i = n1 - 1, j = n2 - 1; j >= 0 || i >= 0; i--, j--) {
      let num1 = num[i] !== undefined ? num[i] : 0;
      let num2 = Number(arrK[j]);
      let sum = (num1 + num2 + carry) % 10;
      carry = Math.floor((num1 + num2 + carry) / 10);
      arrK[j] = sum;
    }
    if (carry) {
      arrK.unshift(carry);
    }
    return arrK;
  }
};
