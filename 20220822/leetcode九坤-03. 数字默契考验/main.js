/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-22 21:27:10                                                  *
 * @LastModifiedDate: 2022-08-22 23:56:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 某数学兴趣小组有 N 位同学，编号为 0 ~ N-1，老师提议举行一个数字默契小测试：
// 首先每位同学想出一个数字，按同学编号存于数组 numbers。
// 每位同学可以选择将自己的数字进行放大操作，每次在以下操作中任选一种（放大操作不限次数，可以不操作）：

// 将自己的数字乘以 2
// 将自己的数字乘以 3
// 若最终所有同学可以通过操作得到相等数字，则返回所有同学的最少操作次数总数；否则请返回 -1。

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minOperations = function (numbers) {
  numbers.sort((a, b) => a - b);
  let n = numbers.length;
  let hash = getFactors(numbers[n - 1]);
  if (hash.size > 2 && numbers[0] == 1) {
    // 有非2，3的因数，且存在1
    return -1;
  }
  let k = hash.size;
  if (!hash.has(2)) {
    k++;
  }
  if (!hash.has(3)) {
    k++;
  }
  let ans = 0;
  for (let i = n - 2; i >= 0; i--) {
    const newHash = getFactors(numbers[i]);
    let m = newHash.size;
    if (!newHash.has(2)) {
      m++;
    }
    if (!newHash.has(3)) {
      m++;
    }
    if (m !== k) {
      return -1;
    }
    // 2 3 特殊考虑
    const preVal2 = hash.has(2) ? hash.get(2) : 0;
    const preVal3 = hash.has(3) ? hash.get(3) : 0;
    const val2 = newHash.has(2) ? newHash.get(2) : 0;
    const val3 = newHash.has(3) ? newHash.get(3) : 0;
    if (preVal2 >= val2) {
      ans += preVal2 - val2;
    } else {
      hash.set(2, val2);
      ans += (val2 - preVal2) * (n - i - 1);
    }
    if (preVal3 >= val3) {
      ans += preVal3 - val3;
    } else {
      hash.set(3, val3);
      ans += (val3 - preVal3) * (n - i - 1);
    }

    for (const [key, val] of newHash) {
      if (key > 3 && val !== hash.get(key)) {
        return -1;
      }
    }
  }
  return ans;
};

// 求每个数的质因数
var getFactors = (num) => {
  const hash = new Map();
  let i = 2;
  while (num > 1 && i <= num) {
    while (num % i == 0) {
      hash.has(i) ? hash.set(i, hash.get(i) + 1) : hash.set(i, 1);
      num /= i;
    }
    if (isPrime(num)) {
      hash.set(num, 1);
      // 判断是否为质数
      break;
    }
    i++;
  }
  return hash;
};

var isPrime = (num) => {
  if (num == 1) {
    return false;
  }
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
