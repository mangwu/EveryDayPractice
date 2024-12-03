/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-28 18:03:40                                                  *
 * @LastModifiedDate: 2024-11-28 18:52:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的 正 整数数组 nums 。

// 如果两个 非负 整数数组 (arr1, arr2) 满足以下条件，我们称它们是 单调 数组对：

// 两个数组的长度都是 n 。
// arr1 是单调 非递减 的，换句话说 arr1[0] <= arr1[1] <= ... <= arr1[n - 1] 。
// arr2 是单调 非递增 的，换句话说 arr2[0] >= arr2[1] >= ... >= arr2[n - 1] 。
// 对于所有的 0 <= i <= n - 1 都有 arr1[i] + arr2[i] == nums[i] 。
// 请你返回所有 单调 数组对的数目。

// 由于答案可能很大，请你将它对 109 + 7 取余 后返回。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function (nums) {
  const n = nums.length;
  const mod = 10 ** 9 + 7;
  const cache = new Array(n + 1).fill(-1).map(() => new Array(51).fill(-1));
  // cache[i][num] 表示当前arr[i]=num时，剩下的元素能组成多少个单调数组对的个数
  const dfs = (i, pre1, pre2) => {
    if (i === n) return 1;
    let sum = 0;
    for (let cur1 = pre1; cur1 <= nums[i]; cur1++) {
      const cur2 = nums[i] - cur1;
      if (cur2 > pre2) continue;
      if (cache[i][cur1] !== -1) {
        sum += cache[i][cur1];
        sum %= mod;
      } else {
        sum += dfs(i + 1, cur1, cur2);
        sum %= mod;
      }
    }
    if (i > 0) cache[i - 1][pre1] = sum;
    return sum;
  };
  return dfs(0, 0, Infinity);
};
countOfPairs([2, 3, 2]);
