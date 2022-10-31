/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-30 11:07:29                                                  *
 * @LastModifiedDate: 2022-10-30 11:18:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 n 和 target 。

// 如果某个整数每一位上的数字相加小于或等于 target ，则认为这个整数是一个 美丽整数 。

// 找出并返回满足 n + x 是 美丽整数 的最小非负整数 x 。生成的输入保证总可以使 n 变成一个美丽整数。

/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  let cur = getSum(n);
  if (cur <= target) {
    return 0;
  }
  // 从个位开始
  const len = n.toString().length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let k = n % 10;
    n += 10 - k;
    res += (10 - k) * Math.pow(10, i);
    if (getSum(n) <= target) {
      return res;
    }
    n = n / 10;
  }
};

var getSum = function (num) {
  // 每位求和
  let ans = 0;
  while (num) {
    let cur = num % 10;
    ans += cur;
    num = Math.floor(num / 10);
  }
  return ans;
};
