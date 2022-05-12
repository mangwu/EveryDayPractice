/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-12 10:39:22                                                  *
 * @LastModifiedDate: 2022-05-12 11:10:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const set = new Set(new Array(9).fill(0).map((_v, i) => i + 1));
  let max;
  let min;
  for (let i = 1; i <= k; i++) {
    max += 10 - i;
    min += i;
  }
  if (n > max || n < min) {
    return [];
  }
  const combinationSum = (k, n, set) => {
    if (k == 1) {
      if (n >= 1 && n <= 9 && set.has(n)) {
        return [[n]];
      }
    }
    let ans = [];
    for (const val of set) {
      // 第一个值选择为i
      const copy = new Set(set);
      for (let i = 1; i <= val; i++) {
        copy.delete(i);
      }
      // 递归获得结果
      const res = combinationSum(k - 1, n - val, copy);
      for (const r of res) {
        r.push(val);
        ans.push(r);
      }
    }
    return ans;
  };
  return combinationSum(k, n, set);
};
