/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-13 11:14:36                                                  *
 * @LastModifiedDate: 2022-10-13 13:36:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为 n 的整数数组 arr ，它表示在 [0, n - 1] 范围内的整数的排列。

// 我们将 arr 分割成若干 块 (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。

// 返回数组能分成的最多块数量。

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  // arr[i]表示该数字应该在的位置，i表示该元素当前在的位置
  let ans = 0;
  const n = arr.length;
  let cur = 0;
  let i = 0;
  while (i < n) {
    let j = i;
    while (j <= cur) {
      cur = Math.max(cur, arr[j]);
      j++;
    }
    cur++;
    console.log(j);
    i = j;
    ans++;
  }
  return ans;
};
