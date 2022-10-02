/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-02 17:51:50                                                  *
 * @LastModifiedDate: 2022-10-02 18:15:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）
// 中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，
// 或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，
// 请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  // XL => LX L可以左移
  // RX => XR R可以右移
  const n = start.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (start[i] === "X") {
      continue;
    }
    // 找到一个
    const ch = start[i];
    while (end[j] === "X") {
      j++;
    }
    if (end[j] !== ch) {
      return false;
    }
    if (ch === "R") {
      // R可以右移，所以j 应该大于等于i
      if (j < i) {
        return false;
      }
    }
    if (ch == "L") {
      // L可以左移，所以j 应该小于等于i
      if (j > i) {
        return false;
      }
    }
    j++;
  }
  while (end[j] === "X") {
    j++;
  }
  // 全部遍历完
  return j === n;
};
