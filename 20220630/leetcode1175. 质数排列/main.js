/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-30 10:38:50                                                  *
 * @LastModifiedDate: 2022-06-30 11:08:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const MOD = Math.pow(10, 9) + 7;
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  if (n <= 2) {
    return 1;
  }
  // 计算得出质数和数量
  let primeNum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNum++;
    }
  }
  let notPrimeNum = n - primeNum;
  let prod = 1;
  while (primeNum > 1) {
    prod *= primeNum;
    prod = prod % MOD;
    primeNum--;
  }
  while (notPrimeNum > 1) {
    prod *= notPrimeNum;
    prod = prod % MOD;
    notPrimeNum--;
  }
  return prod;
};

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
