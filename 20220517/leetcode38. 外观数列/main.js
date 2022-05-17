/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 09:47:04                                                  *
 * @LastModifiedDate: 2022-05-17 10:01:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数 n ，输出外观数列的第 n 项。

// 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

// 你可以将其视作是由递归公式定义的数字字符串序列：

// countAndSay(1) = "1"
// countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
// 前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 第一项是数字 1
// 描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
// 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
// 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
// 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
// 要 描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。

// 例如，数字字符串 "3322251" 的描述如下图：

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 递归
  if (n == 1) {
    return "1";
  }
  const pre = countAndSay(n - 1);
  let ans = "";
  let m = pre.length;
  for (let i = 0; i < m; i++) {
    let cnt = 1;
    while (i < m - 1 && pre[i] == pre[i + 1]) {
      cnt++;
      i++;
    }
    // cnt个pre[i]
    ans += cnt.toString() + pre[i];
  }
  return ans;
};
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 迭代
  let pre = "1";
  while (n !== 1) {
    let m = pre.length;
    let res = "";
    for (let i = 0; i < m; i++) {
      let cnt = 1;
      while (i < m - 1 && pre[i] == pre[i + 1]) {
        cnt++;
        i++;
      }
      // cnt个pre[i]
      res += cnt.toString() + pre[i];
    }
    pre = res;
    n--;
  }
  return pre;
};
