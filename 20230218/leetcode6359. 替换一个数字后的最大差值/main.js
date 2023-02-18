/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-18 22:30:40                                                  *
 * @LastModifiedDate: 2023-02-18 22:36:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 num 。你知道 Danny Mittal 会偷偷将 0 到 9 中的一个数字 替换 成另一个数字。

// 请你返回将 num 中 恰好一个 数字进行替换后，得到的最大值和最小值的差位多少。

// 注意：

// 当 Danny 将一个数字 d1 替换成另一个数字 d2 时，Danny 需要将 nums 中所有 d1 都替换成 d2 。
// Danny 可以将一个数字替换成它自己，也就是说 num 可以不变。
// Danny 可以将数字分别替换成两个不同的数字分别得到最大值和最小值。
// 替换后得到的数字可以包含前导 0 。
// Danny Mittal 获得周赛 326 前 10 名，让我们恭喜他。

/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  // 把第一位代表的数字替换为9总是最大的，但是记住第一位可能本身就是9
  const str = num.toString();
  let max = num;
  let maxStr = str;
  for (const ch of str) {
    if (ch !== "9") {
      maxStr = str.replaceAll(ch, "9");
      break;
    }
  }
  max = parseInt(maxStr);
  let minStr = str.replaceAll(str[0], "0");
  min = parseInt(minStr);
  return max - min;
};
