/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-08 17:20:07                                                  *
 * @LastModifiedDate: 2022-02-08 19:22:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 三元斐波那契数列
 * @param {Array} signature 开头序列
 * @param {Number} n 元素个数
 */
function tribonacci(signature, n) {
  if (n <= 3) {
    return signature.splice(0, n);
  }
  // your code here
  // 序列
  let pre1 = signature[0];
  let pre2 = signature[1];
  let current = signature[2];
  for (let i = 3; i < n; i++) {
    let sum = pre1 + pre2 + current;
    signature.push(sum);
    pre1 = pre2;
    pre2 = current;
    current = sum;
  }
  console.log(signature);
  return signature;
}

tribonacci([1, 1, 1], 10);

/**
 * @description X元斐波那契数列
 * @param {Array} signature 开头序列
 * @param {Number} n 元素个数
 */
function Xbonacci(signature, n) {
  // X元的X数
  const x = signature.length;
  // 小于等于x时
  if (n <= x) {
    return signature.splice(0, n);
  }
  // 前x个序列窗口
  const w = signature.slice();
  for (let i = x; i < n; i++) {
    const sum = w.reduce((pre, current) => {
      return pre + current;
    });
    signature.push(sum);
    w.push(sum);
    w.shift();
  }
  console.log(signature);
  return signature;
}

Xbonacci([1, 0, 1, 2, 1], 12);
