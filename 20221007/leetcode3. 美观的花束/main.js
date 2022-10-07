/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-07 15:12:07                                                  *
 * @LastModifiedDate: 2022-10-07 15:34:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 力扣嘉年华的花店中从左至右摆放了一排鲜花，记录于整型一维矩阵 flowers 中每个数字表示该位置所种鲜花的品种编号。你可以选择一段区间的鲜花做成插花，且不能丢弃。
// 在你选择的插花中，如果每一品种的鲜花数量都不超过 cnt 朵，那么我们认为这束插花是 「美观的」。

// 例如：[5,5,5,6,6] 中品种为 5 的花有 3 朵， 品种为 6 的花有 2 朵，每一品种 的数量均不超过 3
// 请返回在这一排鲜花中，共有多少种可选择的区间，使得插花是「美观的」。

// 注意：

// 答案需要以 1e9 + 7 (1000000007) 为底取模，如：计算初始结果为：1000000008，请返回 1

const MAX_VALUE = Math.pow(10, 9) + 7;
/**
 * @param {number[]} flowers
 * @param {number} cnt
 * @return {number}
 */
var beautifulBouquet = function (flowers, cnt) {
  const hash = new Map();
  const n = flowers.length;
  let pre = 0;
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  hash.set(flowers[0], [0]);
  for (let i = 1; i < n; i++) {
    if (hash.has(flowers[i])) {
      const arr = hash.get(flowers[i]);
      if (arr.length >= cnt) {
        pre = Math.max(pre, arr[arr.length - cnt] + 1);
      }
      dp[i] = (dp[i - 1] + (i - pre + 1)) % MAX_VALUE;
      arr.push(i);
    } else {
      dp[i] = (dp[i - 1] + (i - pre + 1)) % MAX_VALUE;
      hash.set(flowers[i], [i]);
    }
  }
  return dp[n - 1];
};
