/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-09 20:33:11                                                  *
 * @LastModifiedDate: 2022-07-09 21:04:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

// n >= 3
// 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
// 给定一个严格递增的正整数数组形成序列 arr ，找到 arr 中最长的斐波那契式的子序列的长度。
// 如果一个不存在，返回  0 。

// （回想一下，子序列是从原序列 arr 中派生出来的，它从 arr 中删掉任意数量的元素（也可以不删），
// 而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const set = new Set(arr);
  const n = arr.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (n - i <= ans) {
        return ans;
      }
      let pre = arr[j];
      let cur = arr[i] + arr[j];
      let k = 2;
      while (set.has(cur)) {
        k++;
        cur = cur + pre;
        pre = cur - pre;
      }
      if (k >= 3) {
        ans = Math.max(ans, k);
      }
    }
  }
  return ans;
};
