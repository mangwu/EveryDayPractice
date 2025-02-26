/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-26 09:26:41                                                  *
 * @LastModifiedDate: 2025-02-26 09:45:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const strArr = S.split("").sort();
  const n = S.length;
  const ans = [];
  const path = [];
  const visited = new Array(n).fill(false);
  const dfs = () => {
    if (path.length === n) {
      ans.push(path.slice().join(""));
      return;
    }
    for (let i = 0; i < n; i++) {
      // 不能选择已访问的，或者连续相同的字符，不能在前一个字符未选择的情况下先选
      if (
        visited[i] ||
        (i > 0 && strArr[i] === strArr[i - 1] && !visited[i - 1])
      )
        continue;
      visited[i] = true;
      path.push(strArr[i]);
      dfs();
      path.pop();
      visited[i] = false;
    }
  };
  dfs();
  return ans;
};
