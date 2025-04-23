/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-22 22:38:20                                                  *
 * @LastModifiedDate: 2025-04-22 23:01:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你两个整数 n 和 maxValue ，用于描述一个 理想数组 。

// 对于下标从 0 开始、长度为 n 的整数数组 arr ，如果满足以下条件，则认为该数组是一个 理想数组 ：

// 每个 arr[i] 都是从 1 到 maxValue 范围内的一个值，其中 0 <= i < n 。
// 每个 arr[i] 都可以被 arr[i - 1] 整除，其中 0 < i < n 。
// 返回长度为 n 的 不同 理想数组的数目。由于答案可能很大，返回对 109 + 7 取余的结果。

const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function (n, maxValue) {
  // 超时解答，因为n，maxValue都在在10^5数量级
  const cache = new Map();
  // 默认上一个选择是1，当前选择的索引是i，这两个构成了唯一的答案
  const dfs = (pre, i) => {
    if (i === n) return 1;
    if (cache.has(pre) && cache.get(pre).has(i)) {
      return cache.get(pre).get(i);
    }
    let res = 0;
    let maxFactor = Math.floor(maxValue / pre); // 最大倍数
    for (let factor = 1; factor <= maxFactor; factor++) {
      res = (res + dfs(factor * pre, i + 1)) % MOD;
    }
    const hash = cache.get(pre) || new Map();
    hash.set(i, res);
    cache.set(pre, hash);
    return res;
  };
  return dfs(1, 0);
};
