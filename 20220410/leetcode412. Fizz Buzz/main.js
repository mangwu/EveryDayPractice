/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-10 21:29:16                                                  *
 * @LastModifiedDate: 2022-04-10 21:33:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

// answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
// answer[i] == "Fizz" 如果 i 是 3 的倍数。
// answer[i] == "Buzz" 如果 i 是 5 的倍数。
// answer[i] == i （以字符串形式）如果上述条件全不满足。

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      ans.push("FizzBuzz");
      continue;
    }
    if (i % 3 == 0) {
      ans.push("Fizz");
      continue;
    }
    if (i % 5 == 0) {
      ans.push("Buzz");
      continue;
    }
    ans.push(i.toString());
  }
  return ans;
};
