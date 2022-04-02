/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-02 15:47:30                                                  *
 * @LastModifiedDate: 2022-04-02 17:12:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。
// 你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const hash = new Set();
  for (const num of candidates) {
    if (num <= target) {
      hash.add(num);
    }
  }
  if (hash.size == 0) {
    return [];
  }
  const dfs = (target) => {
    if (target == 0) {
      return [[]];
    }
    const ans = new Set();
    for (const val of hash) {
      if (val <= target) {
        const arr = dfs(target - val);
        for (const item of arr) {
          ans.add(JSON.stringify([val].concat(item).sort((a, b) => a - b)));
        }
      } else {
        break;
      }
    }
    return [...ans].map((v) => JSON.parse(v));
  };
  return dfs(target);
};
// 上述的会产生重复组合，使用了SET这种方法进行去重，实际上是一种不高效但是有用的做法

// 实际上应该有更好的方式构建dfs
