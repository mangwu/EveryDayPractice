/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-27 22:32:34                                                  *
 * @LastModifiedDate: 2023-05-27 23:32:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 s 和一个单词字典 dictionary 。你需要将 s 分割成若干个 互不重叠 的子字符串，每个子字符串都在 dictionary 中出现过。s 中可能会有一些 额外的字符 不在任何子字符串中。

// 请你采取最优策略分割 s ，使剩下的字符 最少 。

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  dictionary = dictionary.filter((v) => s.indexOf(v) !== -1);
  const n = s.length;
  if (dictionary.length === 0) return n;
  // 提前遍历出字典每个对应的字符开头
  const hash = new Map();
  const hash2 = new Map();
  for (const dic of dictionary) {
    const set = new Set();
    for (let i = 0; i < n; i++) {
      if (s[i] === dic[0] && s.substring(i, i + dic.length) === dic) {
        set.add(i);
        hash2.has(i) ? hash2.get(i).push(dic) : hash2.set(i, [dic]);
      }
    }
    hash.set(dic, set);
  }
  // 遍历 s
  let res = n;
  const dp = new Array(n).fill(-1);
  // 返回最大选择数
  const dfs = (i) => {
    if (i === n) {
      return 0;
    }
    if (dp[i] !== -1) return dp[i];
    // 不选
    let curRes = dfs(i + 1);
    // 选择
    const curChoose = hash2.get(i);
    if (curChoose) {
      for (const item of curChoose) {
        const kk = hash.get(item);
        if (kk.has(i)) {
          // 双向选择
          curRes = Math.max(curRes, item.length + dfs(i + item.length));
        }
      }
    }
    dp[i] = curRes;
    return curRes;
  };
  return n - dfs(0);
};
