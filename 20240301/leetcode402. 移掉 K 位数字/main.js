/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-01 10:12:24                                                  *
 * @LastModifiedDate: 2024-03-01 11:15:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  // 如果移动前面的数字后会产生前导0，就相当于多移除了一个数字
  // 所以优先判断移除是否能生成前导0
  // 然后根据大小进行移除
  const zeros = [];
  const n = num.length;
  for (let i = 0; i < n; i++) if (num[i] === "0") zeros.push(i);
  let re = 0;
  let idx = 0;
  for (let i = 0; i < zeros.length; i++) {
    re = zeros[i] - i;
    if (k <= re) {
      idx = zeros[i];
      continue;
    } else break;
  }
  if (re > 0) {
    // 需要移除前面re个字符
    k -= re;
    num = num.slice(idx + 1);
    if (!num || parseInt(num) === 0) return "0";
  }
  
};
// 12005140
// 0 1 2 3
// 58240924
// 3
