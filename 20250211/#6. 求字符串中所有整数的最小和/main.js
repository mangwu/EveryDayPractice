/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 19:44:09                                                  *
 * @LastModifiedDate: 2025-02-11 19:53:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 输入字符串s，输出s中包含所有整数的最小和。

// 说明： 字符串s，只包含 a-z A-Z ± ； 合法的整数包括 1） 正整数 一个或者多个0-9组成，如 0 2 3 002 102 2）负整数 负号 – 开头，数字部分由一个或者多个0-9组成，如 -0 -012 -23 -00023

// 输入描述 包含数字的字符串

// 输出描述 所有整数的最小和

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const iterFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await iterFunc())) {
    inputs.push(line);
  }
  // 负数尽可能的组合在一起，正数都分开
  const str = inputs[0];
  let res = 0;
  const n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] === "–") {
      // 负数，找后面的数
      i++;
      let cur = 0;
      while (i < n && !isNaN(parseInt(str[i]))) {
        cur = cur * 10 + parseInt(str[i++]);
      }
      i--;
      res = res - cur;
    } else {
      // 判断是否是数字
      if (!isNaN(parseInt(str[i]))) {
        res += parseInt(str[i]);
      }
    }
  }
  console.log(res);
}
solution();
