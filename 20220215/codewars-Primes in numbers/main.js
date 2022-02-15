/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-15 09:49:37                                                  *
 * @LastModifiedDate: 2022-02-15 10:09:00                                      *
 * @ModifiedBy:                                                                *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 求构成一个正整数的所有质数
// 使用(2**5)(5)(7**2)(prime*num)的字符串形式返回

// 例子 86240 应该返回(2**5)(5)(7**2)(11)

// 给出的正整数大于2

// 判断一个数是否为质数
function isPrime(num) {
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

/**
 * @description 返回一个数的所有质数
 * @param {Number} n 正整数 >2
 * @returns {String} 以(prime**num)的形式返回
 */
function primeFactors(n) {
  // 质数的上限
  const max = Math.sqrt(n);
  // 质数hash
  const hash = new Map();
  let ans = "";
  // 遍历[2, max]之间的所有整数
  for (let i = 2; i <= max; i++) {
    // 如果能够整除i就添加到hash中
    while (n % i === 0) {
      if (hash.has(i)) {
        hash.set(i, hash.get(i) + 1);
      } else {
        hash.set(i, 1);
      }
      n = n / i;
    }
    // 获取当前的质数并保存再ans中
    if (hash.has(i)) {
      const num = hash.get(i);
      if (num > 1) {
        ans += `(${i}**${num})`;
      } else {
        ans += `(${i})`;
      }
    }
  }
  // console.log(n);
  // 最后如果n不等于1，说明n是质数，需要加到最终结果中
  return n !== 1 ? ans + `(${n})` : ans;
}

primeFactors(7775460);