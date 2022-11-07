/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-07 08:50:56                                                  *
 * @LastModifiedDate: 2022-11-07 09:18:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们有一些二维坐标，如 "(1, 3)" 或 "(2, 0.5)"，然后我们移除所有逗号，小数点和空格，得到一个字符串S。返回所有可能的原始字符串到一个列表中。

// 原始的坐标表示法不会存在多余的零，所以不会出现类似于"00", "0.0", "0.00", "1.0", "001", "00.01"或一些其他更小的数来表示坐标。此外，一个小数点前至少存在一个数，所以也不会出现“.1”形式的数字。

// 最后返回的列表可以是任意顺序的。而且注意返回的两个数字中间（逗号之后）都有一个空格。

/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  // 出现小数的情况是：小数只有一位，且小数前至少只有一位，不能出现以0开头的连续0，或者1.0
  let str = s.substring(1, s.length - 1);
  const n = str.length;
  const ans = [];
  for (let i = 1; i < n; i++) {
    let pre = str.substring(0, i);
    let last = str.substring(i);
    let preLegal = constructLigalNum(pre);
    let lastLegal = constructLigalNum(last);
    if (preLegal.length > 0 && lastLegal.length > 0) {
      for (const ch1 of preLegal) {
        for (const ch2 of lastLegal) {
          ans.push(`(${ch1}, ${ch2})`);
        }
      }
    }
  }
  return ans;
};

var constructLigalNum = function (str) {
  // 构造合法的数字字符
  const res = [];
  const n = str.length;
  if (n === 1) {
    res.push(str);
    return res;
  }
  // 作为一个整数是否可行
  if (str[0] !== "0") {
    res.push(str);
  }
  // 不能作为分数
  if (str[n - 1] === "0") {
    return res;
  }
  // 可以使用分数,进行分隔
  for (let i = n - 1; i > 0; i--) {
    let cur = str.substring(0, i) + "." + str.substring(i);
    if (parseFloat(cur).toString() === cur) {
      res.push(cur);
    }
  }
  return res;
};
