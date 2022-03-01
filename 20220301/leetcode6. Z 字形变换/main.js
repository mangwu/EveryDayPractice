/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-01 08:40:08                                                  *
 * @LastModifiedDate: 2022-03-01 09:33:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 构造一个二维数组，长度为numRows，横向记录数组的值
  // 每次循环遍历numRows + (numRows - 2) == 2*numRows - 2 次，获得一个し符号
  // 直到s被遍历完为止
  if(numRows == 0) {
    return s;
  }
  const z = [];
  for (let i = 0; i < s.length; i++) {
    const ni = i % (2 * numRows - 2);
    const idx = ni >= numRows ? numRows - 1 - (ni + 1 - numRows) : ni;
    console.log(ni, idx);
    if (!z[idx]) {
      z[idx] = [s[i]];
    } else {
      z[idx].push(s[i]);
    }
  }
  console.log(z);
  let ans = "";
  for (const row of z) {
    ans += row.join("");
  }
  return ans;
};
convert("A", 1);
