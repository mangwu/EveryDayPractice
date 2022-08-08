/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-08 15:33:59                                                  *
 * @LastModifiedDate: 2022-08-08 16:13:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  let carry = 0;
  // 使用位运算
  let ans = [];
  for (let i = 0; i < 32; i++) {
    let abit = a & (1 << i) ? 1 : 0;
    let bbit = b & (1 << i) ? 1 : 0;
    let r = abit ^ bbit ^ carry;
    carry = abit & bbit || abit & carry || bbit & carry;
    ans[31 - i] = r;
  }
  const arr = new Int32Array(1);
  arr[0] = parseInt(ans.join(""), 2);
  return arr[0];
};

// a b c r c
// 0 0 0 0 0
// 1 0 0 1 0
// 0 1 0 1 0
// 1 1 0 0 1
// 0 0 1 1 1
// 1 0 1 0 1
// 0 1 1 0 1
// 1 1 1 1 1

// c = a & b || a & c || b & c;
// r = a ^ b ^ c

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 加法器
  while (b) {
    // 进位
    let carry = a & b;
    // 本位
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};
