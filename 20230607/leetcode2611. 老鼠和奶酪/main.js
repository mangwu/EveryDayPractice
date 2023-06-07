/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-07 08:54:55                                                  *
 * @LastModifiedDate: 2023-06-07 09:06:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有两只老鼠和 n 块不同类型的奶酪，每块奶酪都只能被其中一只老鼠吃掉。

// 下标为 i 处的奶酪被吃掉的得分为：

// 如果第一只老鼠吃掉，则得分为 reward1[i] 。
// 如果第二只老鼠吃掉，则得分为 reward2[i] 。
// 给你一个正整数数组 reward1 ，一个正整数数组 reward2 ，和一个非负整数 k 。

// 请你返回第一只老鼠恰好吃掉 k 块奶酪的情况下，最大 得分为多少。
/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  // diff = reward1[i] - reward2[i]
  // diff代表了奶酪被第一只老鼠吃的优先级，越大越应该被吃
  const n = reward1.length;
  const shuffle = new Array(n).fill(0).map((v, i) => i);
  shuffle.sort((a, b) => {
    const resa = reward1[a] - reward2[a];
    const resb = reward1[b] - reward2[b];
    return resb - resa;
  });
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      res += reward1[shuffle[i]];
    } else {
      res += reward2[shuffle[i]];
    }
  }
  return res;
};
