/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2021-12-31 16:56:46                                                  *
 * @LastModifiedDate: 2021-12-31 17:23:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2021 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

// 给定一个 整数 n， 如果是完美数，返回 true，否则返回 false

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  // 合值
  let sum = 0;
  // 计算 num的开方向下取整数
  const sqNum = Math.floor(Math.sqrt(num));
  // 计算临界值是否能除
  if (num % sqNum === 0) {
    if (sqNum * sqNum !== num) {
      sum = sum + sqNum + num / sqNum;
    } else {
      sum += sqNum;
    }
  }
  // 遍历从2开始的数, 除了自身，所以不能从1开始，最后加上1即可
  for (let i = 2; i < sqNum; i++) {
    if (num % i === 0) {
      sum = sum + num / i + i;
    }
  }
  return sum + 1 === num;
};

console.log(checkPerfectNumber(28));
