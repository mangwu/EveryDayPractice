/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-09 09:41:48                                                  *
 * @LastModifiedDate: 2022-02-09 09:53:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Write a function, persistence,
// that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

// 能将一个正整数的每位进行相乘的次数
// 例子 ： 246 -> 2 * 4 * 6 -> 48 -> 4 * 8 -> 32 -> 3 * 2 -> 6 共乘了3次，6是个位不能每位相乘，所以返回3

/**
 * @description 能相乘的个数
 * @param {Number} num 相乘的数
 */
function persistence(num) {
  // 声明ans
  let ans = 0;
  // 判断一个数是否为个位数,将其除以10，判断它是否比1大即可
  while (num / 10 >= 1) {
    // 进行一次每位相乘
    num = specailMutiply(num);
    ans++;
  }
  return ans;
}

/**
 * @description 每位进行相乘，返回相乘结果
 * @param {Number} num 每位相乘
 */
function specailMutiply(num) {
  // 声明相乘结果
  let ans = 1;
  // 转化为字符串
  const strNum = String(num);
  // 遍历相乘
  for (const ch of strNum) {
    ans *= ch;
  }
  return ans;
}

console.log(persistence(246));
