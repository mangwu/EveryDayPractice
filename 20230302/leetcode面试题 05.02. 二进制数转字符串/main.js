/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-02 11:04:09                                                  *
 * @LastModifiedDate: 2023-03-02 11:22:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字无法精确地用32位以内的二进制表示，则打印“ERROR”。

/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  const res = num.toString(2);
  return res.length > 8 ? "ERROR" : res;
};

/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  const res = ["0", "."];
  let cur = num;
  let n = 6;
  while (cur !== 0 && n) {
    n--;
    cur *= 2;
    if (cur >= 1) {
      res.push("1");
      cur -= 1;
    } else {
      res.push("0");
    }
  }
  if (cur > 0) return "ERROR";
  return res.join("");
};
