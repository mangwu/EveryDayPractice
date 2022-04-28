/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-28 16:53:20                                                  *
 * @LastModifiedDate: 2022-04-28 17:31:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，
// 它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const n1 = num1.length;
  const n2 = num2.length;
  if (n2 > n1) {
    return multiply(num2, num1);
  }
  const everyNums = [];
  for (let i = n2 - 1; i >= 0; i--) {
    let res = "";
    let carry = 0;
    for (let j = n1 - 1; j >= 0; j--) {
      let mul = num1[j] * num2[i] + carry;
      res = (mul % 10) + res;
      carry = Math.floor(mul / 10);
    }
    if (carry > 0) {
      res = carry + res;
    }
    everyNums.push(res + "0".repeat(n2 - i - 1));
  }
  console.log(everyNums);
  const ans = everyNums.reduce((pre, cur) => {
    let len = cur.length;
    let carry = 0;
    let res = "";
    for (let i = len - 1; i >= 0; i--) {
      const x = pre[i] !== undefined ? Number(pre[i]) : 0;
      const y = cur[i] !== undefined ? Number(cur[i]) : 0;
      let addition = x + y;
      carry = Math.floor(addition / 10);
      res = (addition % 10) + res;
    }
    if (carry > 0) {
      res = carry + res;
    }
    return res;
  });
  console.log(ans);
  return ans;
};

//  123
//  456
//  738
// 615
//492
multiply("99999", "1");
