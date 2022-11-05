/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-06 01:38:35                                                  *
 * @LastModifiedDate: 2022-11-06 01:53:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你设计一个可以解释字符串 command 的 Goal 解析器 。
// command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。
// Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)"
// 解释为字符串 "al" 。然后，按原顺序将经解释得到的字符串连接成一个字符串。

// 给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const n = command.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (command[i] === "G") {
      ans += "G";
    } else if (command[i + 1] === ")") {
      ans += "o";
      i++;
    } else {
      ans += "al";
      i += 3;
    }
  }
  return ans;
};
