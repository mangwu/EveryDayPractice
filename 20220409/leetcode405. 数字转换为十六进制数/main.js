/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-09 23:47:43                                                  *
 * @LastModifiedDate: 2022-04-10 21:25:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。

// 注意:

// 十六进制中所有字母(a-f)都必须是小写。
// 十六进制字符串中不能包含多余的前导零。如果要转化的数为0，
// 那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。
// 给定的数确保在32位有符号整数范围内。
// 不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。
const hex = {
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f",
};
const max = Math.pow(2, 32);
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  // 如果num小于0
  if (num < 0) {
    num = max + num;
  }
  if (num == 0) {
    return "0";
  }
  let ans = "";
  while (num > 0) {
    let k = num % 16;
    if (k > 9) {
      k = hex[k];
    }
    num = Math.floor(num / 16);
    ans = k + ans;
  }
  return ans;
};

// num的范围[-2^31, 2^31 - 1]
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  // 32位整数，负数的符号位为1，采用补码规则
  // 将32位共有8组，一组4位，一组可以取值得到0-15中的一个数
  // 通过右移4 * n位再与0xf相与得到一组的数进行
  if (num == 0) {
    return "0";
  }
  let ans = "";
  for (let i = 0; i < 8; i++) {
    // 获得一组的数据
    let n = (num >> (i * 4)) & 0xf;
    let ch = n > 9 ? hex[n] : n;
    ans = ch + ans;
  }
  // 删除前面的0
  let i = 0;
  for (; i < ans.length; i++) {
    if (ans[i] == "0") {
      continue;
    } else {
      break;
    }
  }
  return ans.substring(i);
};
