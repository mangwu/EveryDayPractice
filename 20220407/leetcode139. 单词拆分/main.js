/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-07 17:16:06                                                  *
 * @LastModifiedDate: 2022-04-07 21:05:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 由于可以重复使用wordDict，所以可以先建立一个hash
  const hash = new Set(wordDict);
  const wordDfs = (s, hash) => {
    if (hash.has(s)) {
      return true;
    }
    // 遍历s
    const len = s.length;
    let ans = false;
    for (let i = 1; i <= len; i++) {
      if (hash.has(s.substring(0, i))) {
        ans = ans || wordBreak(s.substring(i), hash);
      }
    }
    return ans;
  };
  return wordDfs(s, hash);
};
// 上面的解法时间复杂度过高，最坏的情况下是O(n!)
//"leetcodes"
// ["ee","co","eet","etco","des","le","ode","etc","codes"]
// 的输出应该是true 它可以由"le" "etco" "des"组成
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 由于可以重复使用wordDict，所以可以先建立一个hash
  const hash = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  // 默认dp[0]保存空字符串的状态
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      // 从字符开始找到两个符合条件的子串（组成当前的字符），如果找不到当前字符串就是false
      if (dp[j] && hash.has(s.substring(j, i + 1))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};
