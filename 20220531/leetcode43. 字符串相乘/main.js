/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-31 15:53:25                                                  *
 * @LastModifiedDate: 2022-05-31 16:29:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const n1 = num1.length;
  const n2 = num2.length;
  if (num1 == "0" || num2 == "0") {
    return "0";
  }
  if (n1 > n2) {
    return multiply(num2, num1);
  }
  const sum = [];
  for (let i = n1 - 1; i >= 0; i--) {
    let subSum = "";
    let carry = 0;
    // 不能使用数字进行计算，因为数字过大会导致溢出
    for (let j = n2 - 1; j >= 0; j--) {
      let prod = (num1[i] * num2[j] + carry) % 10;
      carry = Math.floor((num1[i] * num2[j] + carry) / 10);
      subSum = prod + subSum;
    }
    if (carry > 0) {
      subSum = carry + subSum;
    }
    // 后缀0
    subSum += "0".repeat(n1 - i - 1);
    sum.push(subSum);
  }
  // 字符串求和
  while (sum.length > 1) {
    // 计算最后两个数之和
    let k1 = sum.pop();
    let k2 = sum.pop();
    const len1 = k1.length;
    const len2 = k2.length;

    let newNum = "";
    let carry = 0;
    for (let i = len1 - 1; i >= 0; i--) {
      let j = i - (len1 - len2);
      let add = parseInt(k1[i]) + (j >= 0 ? parseInt(k2[j]) : 0) + carry;
      carry = Math.floor(add / 10);
      newNum = (add % 10) + newNum;
    }
    if (carry > 0) {
      newNum = carry + newNum;
    }
    sum.push(newNum);
  }
  return sum[0];
};

// nums2 *
// nums1

// 4 2 5 8
//   1 2 3
