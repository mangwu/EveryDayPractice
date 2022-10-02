/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-02 11:23:18                                                  *
 * @LastModifiedDate: 2022-10-02 11:47:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由小写英文字母组成的字符串 s 。在一步操作中，你可以：

// 删除 整个字符串 s ，或者
// 对于满足 1 <= i <= s.length / 2 的任意 i ，
// 如果 s 中的 前 i 个字母和接下来的 i 个字母 相等 ，删除 前 i 个字母。
// 例如，如果 s = "ababc" ，那么在一步操作中，
// 你可以删除 s 的前两个字母得到 "abc" ，
// 因为 s 的前两个字母和接下来的两个字母都等于 "ab" 。

// 返回删除 s 所需的最大操作数。

/**
 * @param {string} s
 * @return {number}
 */
var deleteString = function (s) {
  // 贪心: 删除重复字母时，选择最短的但是下一次仍然可以继续删除的情况
  const n = s.length;
  const hash = new Map();
  const dfs = (i) => {
    if (hash.has(i)) {
      return hash.get(i);
    }
    // 最后一位
    if (i == n - 1) {
      return 1;
    }
    let res = 1;
    let pre = "";
    for (let start = i + 1; i < n && 2 * start - i <= n; i++) {
      pre += s[start - 1];
      console.log(pre, s.substring(start, 2 * start - i));
      if (pre === s.substring(start, 2 * start - i)) {
        res = Math.max(res, 1 + dfs(start));
      }
    }
    hash.set(i, res);
    return res;
  };
  return dfs(0);
};

var hasRepeat = function (str) {
  if (str.length === 0) {
    return false;
  }
};
