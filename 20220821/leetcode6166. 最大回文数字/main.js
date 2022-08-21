/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-21 10:46:14                                                  *
 * @LastModifiedDate: 2022-08-21 11:00:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由数字（0 - 9）组成的字符串 num 。

// 请你找出能够使用 num 中数字形成的 最大回文 整数，并以字符串形式返回。该整数不含 前导零 。

// 注意：

// 你 无需 使用 num 中的所有数字，但你必须使用 至少 一个数字。
// 数字可以重新排序。

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  // 获取数字
  const digits = new Array(10).fill(0);
  for (const ch of num) {
    digits[parseInt(ch)]++;
  }
  let ans = "";
  for (let i = 0; i <= 9; i++) {
    if (digits[i] >= 2) {
      let k = Math.floor(digits[i] / 2);
      ans = i.toString().repeat(k) + ans + i.toString().repeat(k);
      digits[i] = digits[i] % 2;
    }
  }
  // 找到一个最大数放入ans 中间
  for (let i = 9; i >= 0; i--) {
    if (digits[i] >= 1) {
      ans =
        ans.substring(0, ans.length / 2) +
        i.toString() +
        ans.substring(ans.length / 2);
      break;
    }
  }
  if (ans[0] == "0") {
    return ans[Math.floor(ans.length / 2)];
  }
  return ans;
};
