/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-30 22:55:29                                                  *
 * @LastModifiedDate: 2022-03-31 00:38:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 每次除以26
  let diff = "A".charCodeAt() - 1;
  let ans = "";
  // 使用String.fromCharCode得到字符
  while (columnNumber > 0) {
    let num = columnNumber % 26;
    let ch = String.fromCharCode(diff + num);
    ans = ch + ans;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return ans;
};
// 上述解答错误,需要考虑0的情况，如果num 为0，那么求出的diff字符就是@而不是字母了
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 每次除以26
  let diff = "A".charCodeAt() - 1;
  let ans = "";
  // 使用String.fromCharCode得到字符
  while (columnNumber > 0) {
    // 减去1是为了避免26这种情况，这个时候26 27都应该选择A
    let num = ((columnNumber - 1) % 26) + 1;
    let ch = String.fromCharCode(diff + num);
    ans = ch + ans;
    // 再计算时
    columnNumber = Math.floor((columnNumber - num)/ 26);
  }
  return ans;
};
