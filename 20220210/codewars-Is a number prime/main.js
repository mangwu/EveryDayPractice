/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-10 14:54:06                                                  *
 * @LastModifiedDate: 2022-02-10 15:06:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 判断一个整数是否位质数 prime
// -2 => false
// 3 => true
// 1不被看为质数

function isPrime(num) {
  // 小于1的数都不是质数
  if (num <= 1) return false;
  // 其它数 求平方根
  const k = Math.pow(num, 0.5);
  for (let i = 2; i <= k; i++) {
    // 除数为整数则不是质数
    const dividor = num / i;
    if (dividor == Math.floor(dividor)) {
      return false;
    }
  }
  return true;
}


function isPrime2(num) {
  // 简化
  // 其它数 求平方根
  const k = Math.sqrt(num);
  for (let i = 2; i <= k; i++) {
    // 使用 % 判断余数从而判断是否整除
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
